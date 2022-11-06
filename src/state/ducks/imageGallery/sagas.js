/* eslint-disable import/prefer-default-export */
import {
  takeEvery, all, call, put,
} from 'redux-saga/effects';
import axios from 'axios';
import * as R from 'ramda';
import { FETCH_IMAGES, STORE_IMAGES, SET_ERROR } from './types';

function* getImages() {
  try {
    const galleryId = '66911286-72157647277042064';
    const apiKey = '071c59ee64afbe84e204d89113abd9b8';
    const url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiKey}&gallery_id=${galleryId}&format=json&nojsoncallback=1`;
    const response = yield call(axios.get, url);
    const photosList = R.pathOr(null, ['data', 'photos', 'photo'], response);
    if (photosList) {
      const result = photosList.map((item) => {
        const {
          farm, server, id, secret,
        } = item;
        const hasData = R.all((data) => !R.isNil(data))([farm, server, id, secret]);
        if (hasData) {
          return {
            img: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`,
            title: `${id}_${secret}.jpg`,
          };
        }
        return null;
      });
      const photoUrlList = R.reject(R.isNil, result);
      yield put({ type: STORE_IMAGES, payload: photoUrlList });
      yield put({ type: SET_ERROR, payload: '' });
    } else {
      yield put({ type: STORE_IMAGES, payload: [] });
      yield put({ type: SET_ERROR, payload: 'Data not found' });
    }
  } catch (e) {
    yield put({ type: SET_ERROR, payload: 'Exception in listing all products' });
  }
}

function* watchGetImages() {
  yield takeEvery(FETCH_IMAGES, getImages);
}

export function* combinedSaga() {
  yield all([
    watchGetImages(),
  ]);
}
