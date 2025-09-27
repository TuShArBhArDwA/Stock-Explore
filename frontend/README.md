# Stock Explore Frontend

Frontend of the **Stock Explore App**, built with **Expo React Native** and **React Navigation**.  
It consumes the backend API (Express + Yahoo Finance) and renders the stock market data in a modern, card-based UI.  

---

## Features

- **Market Snapshot**: Card view for indexes (S&P 500, NASDAQ, Dow Jones).  
- **Stock Lists**: Tabbed view — *Top Gainers, Losers, Active* sorted by % change or volume.  
- **Spotlight**: Card with stock logo, ticker, name, and description (e.g., NVDA).  
- **News Feed**: Clickable headlines (open in browser), formatted timestamps, “View More” button.  
- **Profile Icon** in header (placeholder).  
- Clean and modern UI: cards, dividers, and red/green colors for positive/negative values.  

---

## Project Structure

```plaintext
frontend/
├── .vscode/                  # Editor configuration (extensions, settings)
├── app/                      # Expo Router navigation (Home, Explore tabs, layouts)
│   ├── (tabs)/
│   │   ├── _layout.tsx       # Layout wrapper for tab navigation
│   │   ├── explore.tsx       # Tab entry for Explore (renders ExploreScreen)
│   │   └── index.tsx         # Tab entry for Home
│   ├── _layout.tsx           # Root layout for Expo Router
│   └── modal.tsx             # Example modal screen
├── assets/images/            # Static images & icons (profile icon, splash, etc.)
├── components/               # Reusable UI components
│   ├── MarketSnapshot.tsx    # Renders indexes
│   ├── StockList.tsx         # Tabs: Gainers / Losers / Active
│   ├── SpotlightCard.tsx     # Spotlight feature stock card
│   ├── NewsList.tsx          # Financial news list with clickable headlines
│   └── (themed + ui)         # Extra components (parallax view, text, etc.)
├── constants/                # Theme and constant configs
│   └── theme.ts
├── hooks/                    # Custom React hooks (color scheme, theming)
├── screens/                  # Page-level screens
│   └── ExploreScreen.tsx     # Explore page (main UI with sections)
├── scripts/                  # Utility scripts (reset project, etc.)
├── services/                 # API layer
│   └── api.ts                # Fetch functions for backend endpoints
├── .gitignore                # Ignore node_modules, build, env files
├── README.md                 # Documentation for frontend
├── app.json                  # Expo project config
├── app.tsx                   # App entry point
├── eslint.config.js          # ESLint config
├── expo-env.d.ts             # Expo type declarations
├── package.json              # NPM dependencies
└── package-lock.json         # Package version lock file
```

---

## Installation & Running

### 1. Clone Repository
```bash
git clone https://github.com/TuShArBhArDwA/Stock-Explore.git
cd Stock-Explore/frontend
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start Expo Project
```bash
npx expo start
```
- Press `w` → run in browser (Expo Web).
- Or scan the QR code in the terminal with the **Expo Go** app on your phone.

---

## Backend Dependency
This frontend fetches from the backend running locally:

```text
http://localhost:4000
```
If you deploy the backend (e.g., on `Render/Heroku`), update BASE_URL in `frontend/services/api.ts`:

```TypeScript
// frontend/services/api.ts
const BASE_URL = "https://your-deployed-backend.onrender.com";
```

---

## Screenshots

> *"Home tab (simple welcome screen)."*

> *"Explore tab (with Market Snapshot, Gainers, Spotlight, News)."*

---

## Notes
- The frontend is intentionally modular (reusable components like `MarketSnapshot`, `StockList`).
- It uses **React Navigation’s Bottom Tabs** → Home and Explore tabs.
- Backend is the single source of truth — frontend **never touches Yahoo Finance directly**.
---

## Future Improvements
- Add **mini charts** (e.g., sparkline price graphs) in Gainers/Losers list.
- Add **pull-to-refresh** for live reloading.
- Add **dark mode** using React Native’s Appearance API.
- Add a fake “profile/settings” page on Home tab for polish.
