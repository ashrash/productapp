import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    required: true,
    type: Schema.Types.String,
  },
  price: {
    required: true,
    type: Schema.Types.String,
  },
  createdDate: Schema.Types.Date,
});

const Products = mongoose.model('Products', productSchema);

export default Products;
