# Stock Explore Backend

Backend service for the **Stock Explore App**, built with **Node.js, Express, and TypeScript**.  
It acts as a **proxy API** to fetch live market data from Yahoo Finance (via [`yahoo-finance2`](https://github.com/gadicc/node-yahoo-finance2)) and provides clean JSON endpoints for the frontend.

---

## Features

- **Indexes** → `/indexes` (S&P 500, NASDAQ 100 snapshot)
- **Top Gainers** → `/gainers`
- **Top Losers** → `/losers`
- **Most Active** → `/active`
- **Spotlight Stock** → `/spotlight` (e.g., NVDA)
- **Financial News** → `/news`

---

## Project Structure

backend/<br/>
├── src/<br/>
│ ├── index.ts # Entry point - Express app<br/>
│ ├── routes/<br/>
│ │ └── stocks.ts # Defines stock-related API routes<br/>
│ └── services/<br/>
│ └── stocksService.ts # Business logic - Yahoo Finance integration<br/>
├── .gitignore # Ignore node_modules, env files, etc.<br/>
├── package.json # NPM dependencies and scripts<br/>
├── package-lock.json<br/>
└── tsconfig.json # TypeScript compiler options<br/>


---

## Installation & Running

### 1. Clone Repository
```bash
git clone https://github.com/TuShArBhArDwA/Stock-Explore.git
cd Stock-Explore/backend
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Run Development Server
```bash
npm run dev
```
Server will start on: `http://localhost:4000`

## Environment Variables
Create a `.env` file in `backend/`:
```bash
PORT=4000
```
> *"(yahoo-finance2 does not require an API key. If switching to other APIs like Finnhub or Alpha Vantage, add those keys here.)"*

---

## API Endpoints

Base URL: `http://localhost:4000`

| Endpoint     | Description                                     |
|--------------|-------------------------------------------------|
| `/indexes`   | Get market indexes (S&P 500, NASDAQ 100, Dow Jones) |
| `/gainers`   | Get top gainers (based on WATCHLIST)            |
| `/losers`    | Get top losers (based on WATCHLIST)             |
| `/active`    | Get most actively traded stocks                 |
| `/spotlight` | Get spotlight stock (e.g., NVDA, AAPL, TSLA)    |
| `/news`      | Get latest finance news                         |

---

## Example Response (`/indexes`)

```json
{
  "indexes": [
    {
      "name": "S&P 500",
      "symbol": "^GSPC",
      "value": 6643.7,
      "changePercent": 0.59
    },
    {
      "name": "NASDAQ-100",
      "symbol": "^NDX",
      "value": 24503.85,
      "changePercent": 0.44
    }
  ]
}
```

---

## Notes
- All data is fetched live from Yahoo Finance via yahoo-finance2.
- API keys are not exposed to the frontend — only backend handles API access.
- Keeps the frontend lightweight & secure.
