import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import productValidators from '../validators/product';

class ProductRoute {
  constructor() {
    this.route = '/product';
    this.router = Router();
    this.productController = new ProductController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.route}/all`, this.productController.getAllProducts);
    this.router.post(`${this.route}/`, productValidators.createProduct(), validationMiddleware(), this.productController.saveProduct);
    this.router.put(`${this.route}/:_id`, productValidators.editProduct(), validationMiddleware(), this.productController.editProductById);
    this.router.delete(`${this.route}/:_id`, productValidators.deleteProduct(), validationMiddleware(), this.productController.deleteProductById);
  }
}

export default ProductRoute;
