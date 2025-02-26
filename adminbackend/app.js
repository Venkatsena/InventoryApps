const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config()
const employeeRoutes = require("./routes/emp");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const employeeAuthRoutes = require("./routes/empAuthRoutes");
const appliedProductRoutes = require("./routes/appliedRoute");
const inventtoryRoue=require("./routes/inventoryroute")
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {



    
useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

//  routes
app.use("/api/employees", employeeRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/inventoryManager", inventtoryRoue);
app.use("/api/employees", employeeAuthRoutes);
app.use('/api/appliedProducts', appliedProductRoutes);



app.listen(3003, () => console.log(`Admin backend running on port 3003}`));
