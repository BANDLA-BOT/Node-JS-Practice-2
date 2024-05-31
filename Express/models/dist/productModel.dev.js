"use strict";

var mongoose = require('mongoose'); //schema


var productSchema = mongoose.Schema({
  name: {
    tyep: String,
    require: [true, 'Please enter a product name']
  },
  quantity: {
    type: Number,
    required: true,
    "default": 1
  },
  price: {
    type: Number,
    required: true
  },
  images: {
    type: String,
    required: false
  }
}, {
  timestamps: true
}); //Model creation

var Product = mongoose.model('Product', productSchema);
module.exports = Product;
//# sourceMappingURL=productModel.dev.js.map
