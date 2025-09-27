import yahooFinance from "yahoo-finance2";

/**
 * Live Indexes (S&P 500, Nasdaq 100)
 */
export async function getIndexes() {
  const symbols = ["^GSPC", "^NDX"]; // S&P 500 & NASDAQ
  const quotes = await yahooFinance.quote(symbols);

  return quotes.map((q: any) => ({
    name: q.shortName ?? q.symbol,
    value: q.regularMarketPrice ?? 0,
    changePercent: q.regularMarketChangePercent ?? 0,
  }));
}

const WATCHLIST = ["AAPL", "TSLA", "MSFT", "AMZN", "GOOG", "NVDA", "META", "NFLX"];

/**
 * Top Gainers (sorted by 1D % change)
 */
export async function getTopGainers() {
  const quotes: any = await yahooFinance.quote(WATCHLIST);
  return quotes
    .filter((q: any) => q.regularMarketChangePercent != null)
    .sort((a: any, b: any) => b.regularMarketChangePercent - a.regularMarketChangePercent)
    .slice(0, 5)
    .map((q: any) => ({
      ticker: q.symbol,
      exchange: q.fullExchangeName ?? "NASDAQ",
      price: q.regularMarketPrice ?? 0,
      changePercent: q.regularMarketChangePercent ?? 0,
    }));
}

/**
 * Top Losers (sorted ascending by 1D % change)
 */
export async function getTopLosers() {
  const quotes: any = await yahooFinance.quote(WATCHLIST);
  return quotes
    .filter((q: any) => q.regularMarketChangePercent != null)
    .sort((a: any, b: any) => a.regularMarketChangePercent - b.regularMarketChangePercent)
    .slice(0, 5)
    .map((q: any) => ({
      ticker: q.symbol,
      exchange: q.fullExchangeName ?? "NASDAQ",
      price: q.regularMarketPrice ?? 0,
      changePercent: q.regularMarketChangePercent ?? 0,
    }));
}

/**
 * Most Active (by daily trading volume)
 */
export async function getMostActive() {
  const quotes: any = await yahooFinance.quote(WATCHLIST);
  return quotes
    .filter((q: any) => q.regularMarketVolume != null)
    .sort((a: any, b: any) => b.regularMarketVolume - a.regularMarketVolume)
    .slice(0, 5)
    .map((q: any) => ({
      ticker: q.symbol,
      exchange: q.fullExchangeName ?? "NASDAQ",
      price: q.regularMarketPrice ?? 0,
      changePercent: q.regularMarketChangePercent ?? 0,
    }));
}

/**
 * Spotlight stock (example: NVDA)
 */
export async function getSpotlight() {
  const q: any = await yahooFinance.quote("NVDA");
  return {
    ticker: q.symbol,
    companyName: q.shortName,
    logoUrl: `https://logo.clearbit.com/nvidia.com`, // free logo API
    description: `${q.shortName} current price ${q.regularMarketPrice}, change ${q.regularMarketChangePercent}%`,
  };
}

/**
 * Latest Market News
 */
export async function getNews() {
  const res: any = await yahooFinance.search("stock market");
  return res.news.slice(0, 5).map((n: any) => ({
    headline: n.title,
    source: n.publisher,
    timestamp: new Date(n.providerPublishTime * 1000).toISOString(), 
    url: n.link,
  }));
}