# Stock Explore (Assignment)

## Overview
Stock Explore is a small Expo React Native app with a Node.js/Express TypeScript backend that proxies data from Financial Modeling Prep (FMP). The Explore page shows indexes, top gainers/losers/active stocks, a spotlight stock and news.

## Repo structure
- `/backend` - Express + TypeScript backend
- `/frontend` - Expo React Native app

## Setup

### 1) Backend
1. `cd backend`
2. Create `.env` from `.env.example` and add your FMP API key:
```bash
PORT=4000
FMP_API_KEY=YOUR_KEY_HERE
CACHE_TTL_SECONDS=30
```
3. Install dependencies:
```bash
npm install
```
4. Run in development:
```bash
npm run dev
```
or build & start in production:
```bash
or build & start in production:
```

### 2) Frontend
1. `cd frontend`
2. Install dependencies:
```bash
npm install
```
3. Edit `src/screens/ExploreScreen.tsx` and set `API_BASE` to your backend URL (for local development use `http://<YOUR_PC_IP>:4000/api` or Expo Tunnel).
4. Start the Expo app:
```bash
npm expo start
```
5. Open in Expo Go or emulator.

## Demo / Screenshots
- Capture screenshots or a screen recording of the Explore screen.
- Add them under `/frontend/screenshots`.

## Notes
- API keys are **not hardcoded**. They are stored in `.env` for the backend.
- The frontend communicates only with the backend, never directly with FMP.
- For production, secure the backend (rate limiting, CORS, caching).
- You can swap the data source (e.g., Finnhub, IEX Cloud) by updating backend routes.

## API used
Financial Modeling Prep – top gainers/losers/actives, company profile and news.  
Documentation: [https://site.financialmodelingprep.com/developer/docs](https://site.financialmodelingprep.com/developer/docs)

## License
This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.


