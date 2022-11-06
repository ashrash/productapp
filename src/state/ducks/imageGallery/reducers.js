import { STORE_IMAGES, SET_ERROR } from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_IMAGES: {
      const data = action.payload;
      return {
        ...state,
        imageData: data,
      };
    }
    case SET_ERROR: {
      const error = action.payload;
      return {
        ...state,
        error,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
