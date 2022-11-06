import Products from '../models/products';

class ProductService {
  constructor() {
    this.ProductsModel = Products;
    this.findProductBuyId = this.findProductBuyId.bind(this);
  }

  async findAllProducts() {
    const result = await this.ProductsModel.find({}).lean();
    if (result && result.length > 0) {
      return { status: 200, body: result };
    }
    return { status: 204 };
  }

  async saveProduct(request) {
    const product = new this.ProductsModel(request);
    const result = await product.save();
    if (result) {
      return { status: 201, body: result };
    }
    return { status: 500 };
  }

  async findProductBuyId(id) {
    const result = await this.ProductsModel.findById(id);
    if (result) {
      return result;
    }
    return null;
  }

  async editProduct(id, content) {
    const result = await this.findProductBuyId(id);
    if (result) {
      const updatedResult = await this.ProductsModel.findByIdAndUpdate(id, content);
      if (updatedResult) {
        return { status: 200, body: updatedResult };
      }
      return { status: 500, body: 'Update failed' };
    }
    return { status: 204 };
  }

  async deleteProduct(id) {
    const deletedProduct = await this.ProductsModel.findByIdAndDelete(id);
    if (deletedProduct) {
      return { status: 200, body: deletedProduct };
    }
    return { status: 204 };
  }
}

export default ProductService;
