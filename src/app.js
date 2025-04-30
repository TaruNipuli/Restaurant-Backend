import express from "express";
import cors from "cors";
import api from "./api/index.js";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files from uploads folder
app.use('/uploads', express.static('uploads'));

// API routes
app.use("/api/v1", api);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to our restaurant");
});

export default app;
