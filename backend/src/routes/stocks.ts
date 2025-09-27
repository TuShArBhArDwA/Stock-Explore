import { Router } from "express";

const router = Router();

// ✅ Dummy Data for now
router.get("/indexes", (req, res) => {
  res.json({
    indexes: [
      { name: "S&P 500", symbol: "SPX", value: 4750.65, changePercent: -0.45 },
      { name: "NASDAQ 100", symbol: "NDX", value: 16500.34, changePercent: 0.32 },
    ],
  });
});

router.get("/gainers", (req, res) => {
  res.json({
    gainers: [
      { ticker: "TSLA", exchange: "NASDAQ", price: 255.12, changePercent: 4.75 },
      { ticker: "AAPL", exchange: "NASDAQ", price: 195.56, changePercent: 3.21 },
    ],
  });
});

router.get("/losers", (req, res) => {
  res.json({
    losers: [
      { ticker: "META", exchange: "NASDAQ", price: 300.45, changePercent: -5.62 },
      { ticker: "GOOG", exchange: "NASDAQ", price: 2800.34, changePercent: -2.34 },
    ],
  });
});

router.get("/active", (req, res) => {
  res.json({
    active: [
      { ticker: "AMZN", exchange: "NASDAQ", price: 135.56, changePercent: 1.23 },
      { ticker: "NFLX", exchange: "NASDAQ", price: 400.67, changePercent: -0.98 },
    ],
  });
});

router.get("/spotlight", (req, res) => {
  res.json({
    spotlight: {
      ticker: "NVDA",
      companyName: "NVIDIA Corporation",
      logoUrl: "https://logo.clearbit.com/nvidia.com",
      description: "NVIDIA is a leader in GPU technology, AI, and high-performance computing."
    },
  });
});

router.get("/news", (req, res) => {
  res.json({
    news: [
      {
        headline: "Stock Market Rises Amid Inflation Data",
        source: "Reuters",
        timestamp: "2025-09-27T10:30:00Z",
        url: "https://reuters.com/news/market"
      },
      {
        headline: "Tech Stocks Lead Market Gains",
        source: "Bloomberg",
        timestamp: "2025-09-27T09:15:00Z",
        url: "https://bloomberg.com/news/tech"
      }
    ]
  });
});

export default router;
