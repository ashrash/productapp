import ProductService from '../services/product.service';
import { logger } from '../lib/logger';

class ProductController {
  constructor() {
    this.productService = new ProductService();
    this.getAllProducts = this.getAllProducts.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.editProductById = this.editProductById.bind(this);
    this.deleteProductById = this.deleteProductById.bind(this);
  }

  async getAllProducts(req, res) {
    try {
      logger.info('getAllProducts fetch started');
      const result = await this.productService.findAllProducts();
      const { status, body } = result;
      res.status(status).json(body || '');
    } catch (e) {
      logger.error(`Exception in: getAllProducts : ${JSON.stringify(e)}`);
      res.status(500).json(e);
    }
  }

  async saveProduct(req, res) {
    try {
      logger.info('saveProduct fetch started');
      const { name, price } = req.body;
      const result = await this.productService.saveProduct({ name, price });
      const { status, body } = result;
      res.status(status).json(body || '');
    } catch (e) {
      logger.error(`Exception in: saveProduct : ${JSON.stringify(e)}`);
      res.status(500).json(e);
    }
  }

  async editProductById(req, res) {
    try {
      logger.info('editProductById fetch started');
      const { _id } = req.params;
      const { name, price } = req.body;
      const result = await this.productService.editProduct(_id, { name, price });
      const { status, body } = result;
      res.status(status).json(body || '');
    } catch (e) {
      logger.error(`Exception in: editProductById : ${JSON.stringify(e)}`);
      res.status(500).json(e);
    }
  }

  async deleteProductById(req, res) {
    try {
      logger.info('deleteProductById fetch started');
      const { _id } = req.params;
      const result = await this.productService.deleteProduct(_id);
      const { status, body } = result;
      res.status(status).json(body || '');
    } catch (e) {
      logger.error(`Exception in: deleteProductById : ${JSON.stringify(e)}`);
      res.status(500).json(e);
    }
  }
}

export default ProductController;
