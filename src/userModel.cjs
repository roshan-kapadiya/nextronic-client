const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pname: String,
  pimg: String,
  description: String,
  price: Number,
});

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  city: String,
  profile: String,
});

const cartSchema = new mongoose.Schema({
  order_date: { type: Date, default: Date.now },
  pid: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  uid: { type: mongoose.Schema.Types.ObjectId, ref: "Register" },
});

const Product = mongoose.model("Product", productSchema, "products");
const Register = mongoose.model("Register", registerSchema, "registers");
const Cart = mongoose.model("Cart", cartSchema, "carts");

module.exports = { Product, Register, Cart };
