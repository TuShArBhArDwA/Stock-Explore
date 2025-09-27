import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import stocksRouter from "./routes/stocks";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Stock Explore Backend API is running!",
    availableEndpoints: [
      "/indexes",
      "/gainers",
      "/losers",
      "/active",
      "/spotlight",
      "/news"
    ],
  });
});

app.use("/", stocksRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});