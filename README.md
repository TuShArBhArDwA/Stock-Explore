# Stock Explore App

A **Stock Market Explore/Discovery Application** built with:  
- **Frontend** → Expo React Native + React Navigation (modern UI, modular components).  
- **Backend** → Node.js + Express + TypeScript (proxy API with live Yahoo Finance data).  

The app provides a **Market Snapshot**, **Top Gainers/Losers/Active**, a **Spotlight stock card**, and **Live News**.  

---

## Repository Structure

```plaintext
Stock-Explore/
├── frontend/ # Expo React Native app (UI)
├── backend/ # Express + TypeScript backend (API)
├── LICENSE
├── .gitignore
└── README.md # This file
```

- [Frontend README](./frontend/README.md)  
- [Backend README](./backend/README.md)  

---

## Features

- **Market Snapshot** → S&P 500, NASDAQ-100, Dow Jones indexes.  
- **Stock Lists** → Tabs: Top Gainers, Top Losers, Active (red/green % values).  
- **Spotlight Stock** → Logo, company name, description (e.g., NVDA).  
- **Latest News** → Headline links (open in browser), timestamps, “View More” option.  
- **Profile Icon** in header (placeholder).  
- **Modern UI** with cards, dividers, and shadowed spotlight section.  

---

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/TuShArBhArDwA/Stock-Explore.git
cd Stock-Explore
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```
Runs on: `http://localhost:4000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npx expo start
```
- Press `w` → run in browser (Expo Web).
- Or scan the QR code in the terminal with the **Expo Go** app on your phone.

## Environment Variables
Create a `.env` file inside `/backend`:
```env
PORT=4000
```

> *"Currently Yahoo Finance `yahoo-finance2` requires no API key.
If switching to Alpha Vantage or Finnhub, you would add those keys here."*

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

## Demo Screenshots

### Explore tab
<img width="1918" height="900" alt="image" src="https://github.com/user-attachments/assets/f9da4f51-1a1e-496a-bb3b-3b73df169c11" />

### Home tab
<img width="1918" height="971" alt="image" src="https://github.com/user-attachments/assets/16f043f3-d317-4bed-9188-aafa12a9b7be" />

---

## Architecture

```text
Frontend (Expo React Native)
        ↓ fetches from
Backend (Express + TypeScript, localhost:4000)
        ↓ proxies requests to
Yahoo Finance API (npm: yahoo-finance2)
```

- **Frontend** is modular → `ExploreScreen` renders child components:
`MarketSnapshot`, `StockList`, `SpotlightCard`, `NewsList`.
- **Backend** securely fetches data from Yahoo Finance (indexes, gainers, losers, etc.).
- **Communication**: frontend → REST calls → backend → Yahoo Finance → clean JSON results.
- This ensures **security & consistency** (no API logic in frontend, no keys exposed).


---

## Difficulties & Learnings
### Difficulties
- Setting up communication between Expo frontend & backend (localhost vs IP issues).
- Yahoo Finance API sometimes returned null / missing fields (added fallbacks in backend).
- Handling timestamp conversions (Unix seconds → JS milliseconds).
- Designing a tabbed stock list UI that switches Gainers/Losers/Active smoothly.
  
### Learnings
- How to build a proxy backend to hide upstream APIs.
- Efficient use of modular React Native components (MarketSnapshot, Spotlight, etc).
- Handling asynchronous fetches with proper loading states.
- Improved understanding of finance data structures (Indexes, % changes, volumes).

---

## Future Improvements
- Add sparkline mini charts for indexes & stocks.
- Implement pull-to-refresh.

---

## License
This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.


