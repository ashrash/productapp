import Types from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case Types.TOGGLE_MODAL: {
      const open = action.payload;
      return {
        ...state,
        modal: open,
      };
    }
    case Types.SET_PRODUCT_DATA: {
      const data = action.payload;
      return {
        ...state,
        data,
      };
    }
    case Types.SET_ERROR: {
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
