import { Router } from "express";
import {
  getIndexes,
  getTopGainers,
  getTopLosers,
  getMostActive,
  getSpotlight,
  getNews
} from "../services/stocksService";

const router = Router();

router.get("/indexes", async (req, res) => {
  try {
    res.json({ indexes: await getIndexes() });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/gainers", async (req, res) => {
  try {
    res.json({ gainers: await getTopGainers() });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/losers", async (req, res) => {
  try {
    res.json({ losers: await getTopLosers() });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/active", async (req, res) => {
  try {
    res.json({ active: await getMostActive() });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/spotlight", async (req, res) => {
  try {
    res.json({ spotlight: await getSpotlight() });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/news", async (req, res) => {
  try {
    res.json({ news: await getNews() });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;