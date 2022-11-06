/* eslint-disable import/prefer-default-export */
import {
  takeEvery, all, call, put,
} from 'redux-saga/effects';
import axios from 'axios';
import Types from './types';

function* getAllProducts() {
  try {
    const response = yield call(axios.get, '/product/all');
    const { data } = response;
    if (data) {
      yield put({ type: Types.SET_PRODUCT_DATA, payload: data });
      yield put({ type: Types.SET_ERROR, payload: '' });
    } else {
      yield put({ type: Types.SET_PRODUCT_DATA, payload: [] });
      yield put({ type: Types.SET_ERROR, payload: 'Data not found' });
    }
  } catch (e) {
    yield put({ type: Types.SET_ERROR, payload: 'Exception in listing all products' });
  }
}

function* addProduct(request) {
  try {
    const { name, price } = request.payload;
    const payload = { name, price };
    const response = yield call(axios.post, '/product', payload);
    const { data } = response;
    if (data) {
      yield call(getAllProducts);
    } else {
      yield put({ type: Types.SET_ERROR, payload: 'Data not found' });
    }
  } catch (e) {
    yield put({ type: Types.SET_ERROR, payload: 'Exception in adding a product' });
  }
}

function* editProduct(request) {
  try {
    const { _id, name, price } = request.payload;
    const payload = { name, price };
    const response = yield call(axios.put, `/product/${_id}`, payload);
    const { data } = response;
    if (data) {
      yield call(getAllProducts);
    } else {
      yield put({ type: Types.SET_ERROR, payload: 'Data not found' });
    }
  } catch (e) {
    yield put({ type: Types.SET_ERROR, payload: 'Exception in editing a product' });
  }
}

function* deleteProduct(request) {
  try {
    const { _id } = request.payload;
    const response = yield call(axios.delete, `/product/${_id}`);
    const { data } = response;
    if (data) {
      yield call(getAllProducts);
    } else {
      yield put({ type: Types.SET_ERROR, payload: 'Data not found' });
    }
  } catch (e) {
    yield put({ type: Types.SET_ERROR, payload: 'Exception in deleting a product' });
  }
}

function* watchGetAllProducts() {
  yield takeEvery(Types.FETCH_ALL_PRODUCTS, getAllProducts);
}

function* watchAddProduct() {
  yield takeEvery(Types.ADD_PRODUCT, addProduct);
}

function* watchEditProduct() {
  yield takeEvery(Types.EDIT_PRODUCT, editProduct);
}

function* watchDeleteProduct() {
  yield takeEvery(Types.DELETE_PRODUCT, deleteProduct);
}

export function* combinedSaga() {
  yield all([
    watchEditProduct(),
    watchAddProduct(),
    watchGetAllProducts(),
    watchDeleteProduct(),
  ]);
}
