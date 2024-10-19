import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

// App Config
const PORT = process.env.PORT || 3000;
const app = express();
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Api routes
app.get("/", (req, res) => res.send("API Working"));

// Listen
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
