const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Register, Product, Cart } = require("./userModel.cjs");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = 4000;

// ---------------------- MULTER SETUP ----------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.toLowerCase());
  },
});
const upload = multer({ storage });

// ---------------------- DB CONNECTION ----------------------
mongoose
  .connect("mongodb://localhost:27017/dbProject")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// ---------------------- ROUTES ----------------------

// Get all products (with optional category filter)
app.get("/getProducts", async (req, res) => {
  try {
    const { category } = req.query;
    const products = category
      ? await Product.find({ category }).sort({ _id: -1 })
      : await Product.find().sort({ _id: -1 });
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// User signup
app.post("/signup", upload.single("profile"), async (req, res) => {
  const { name, email, password, gender, city } = req.body;
  const profile = req.file ? req.file.filename : null;

  try {
    const newClientUser = new Register({ name, email, password, gender, city, profile });
    await newClientUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// User login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Register.findOne({ email, password });
    if (user) res.json({ message: "Login successful", id: user._id });
    else res.status(401).json({ message: "Invalid email or password" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Search products
app.get("/searchProducts", async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.find({ pname: { $regex: query, $options: "i" } });
    res.json(products);
  } catch (err) {
    console.error("Error searching products:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get product details
app.get("/prodDetails/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found" });
  } catch (err) {
    console.error("Error fetching product details:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Add to cart
app.post("/addToCart", async (req, res) => {
  const { pid, uid } = req.body;
  try {
    const addtocart = new Cart({ order_date: Date.now(), pid, uid });
    await addtocart.save();
    res.status(200).json(addtocart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Check if item is in cart
app.get("/checkCart/:uid/:pid", async (req, res) => {
  const { uid, pid } = req.params;
  try {
    const item = await Cart.findOne({ uid, pid });
    res.json({ inCart: !!item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ inCart: false });
  }
});

// ---------------------- ORDERS ----------------------
// Get all orders with populated product and user info
app.get("/orders", async (req, res) => {
  try {
    const orders = await Cart.find()
      .populate("pid")   // populate product
      .populate("uid");  // populate user
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// Delete an order
app.delete("/Delorders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await Register.find().sort({ _id: -1 });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
