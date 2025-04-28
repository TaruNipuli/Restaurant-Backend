import express from "express";
import cors from "cors";
import api from "./api/index.js";

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/v1", api);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to our restaurant");
});

export default app;
