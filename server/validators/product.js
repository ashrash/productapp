import { body, param } from 'express-validator';

function createProduct() {
  return [
    body('name')
      .exists(),
    body('price')
      .exists(),
  ];
}

function editProduct() {
  return [
    body('name')
      .exists(),
    body('price')
      .exists(),
    param('_id').exists(),
  ];
}

function deleteProduct() {
  return [
    param('_id').exists(),
  ];
}

export default {
  createProduct,
  editProduct,
  deleteProduct,
};
