import { combineReducers } from 'redux';
import { reducers as products } from './products';
import { reducers as imageGallery } from './imageGallery';

const rootReducer = combineReducers({
  products,
  imageGallery,
});

export default rootReducer;
