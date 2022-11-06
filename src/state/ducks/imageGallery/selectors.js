/* eslint-disable import/prefer-default-export */
import * as R from 'ramda';

const getImageData = (state) => R.pathOr([], ['imageGallery', 'imageData'], state);

export default {
  getImageData,
};
