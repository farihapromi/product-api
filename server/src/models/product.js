const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    image: String,
    quantity: { type: Number, required: true, default: 0 },
    categories: [String],
    metadata: {
      isFeatured: { type: Boolean, default: false },
    },
    reviews: [reviewSchema],
    deleted: { type: Boolean, default: false },
    deletedAt: Date,
  },

  { timestamps: true }
);
const Product = mongoose.model('Product', productSchema);
exports.Product = Product;
