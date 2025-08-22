const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

// Default Route
app.get("/", (req, res) => {
  res.send("Pharmacy API running...");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// MongoDB Connection
async function connectDb() {
  try {
    console.log("Connecting to MongoDB...");
    console.log("Using URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");

    // Start the server only after DB connects
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  }
}

// Call the function
connectDb();
