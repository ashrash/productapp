import Types from './types';

const addProductAction = (payload) => ({
  type: Types.ADD_PRODUCT,
  payload,
});

const editProductAction = (payload) => ({
  type: Types.EDIT_PRODUCT,
  payload,
});

const deleteProductAction = (payload) => ({
  type: Types.DELETE_PRODUCT,
  payload,
});

const getAllProductsAction = () => ({
  type: Types.FETCH_ALL_PRODUCTS,
});

const toggleModal = (payload) => ({
  type: Types.TOGGLE_MODAL,
  payload,
});

export default {
  toggleModal,
  addProductAction,
  editProductAction,
  deleteProductAction,
  getAllProductsAction,
};
