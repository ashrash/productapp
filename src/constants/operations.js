const EDIT = 'Edit product data';
const ADD = 'Add New Product';
const DELETE = 'Delete Product';

const modalConfig = {
  [EDIT]: { onSubmit: 'editProduct', text: 'Update', color: 'primary' },
  [ADD]: { onSubmit: 'addProduct', text: 'Save', color: 'success' },
  [DELETE]: { onSubmit: 'deleteProduct', text: 'Delete', color: 'error' },
};

export default {
  EDIT,
  ADD,
  DELETE,
  modalConfig,
};
