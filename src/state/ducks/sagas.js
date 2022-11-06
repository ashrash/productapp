import { all } from 'redux-saga/effects';
import { combinedSaga as productSaga } from './products/sagas';
import { combinedSaga as imageGallery } from './imageGallery/sagas';

export default function* rootSaga() {
  yield all([
    productSaga(),
    imageGallery(),
  ]);
}
