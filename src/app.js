import express from "express";
import api from "./api/index.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files from uploads folder
app.use("/uploads", express.static("uploads"));

// API routes
app.use("/api/v1", api);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to our restaurant");
});

export default app;
