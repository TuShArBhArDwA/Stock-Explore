const BASE_URL = "http://localhost:4000";

// ✅ works in Expo Web since ‘localhost’ resolves to your dev machine

export async function fetchIndexes() {
  const res = await fetch(`${BASE_URL}/indexes`);
  if (!res.ok) throw new Error("Failed to fetch indexes");
  return res.json();
}

export async function fetchTopGainers() {
  const res = await fetch(`${BASE_URL}/gainers`);
  if (!res.ok) throw new Error("Failed to fetch gainers");
  return res.json();
}


export async function fetchNews() {
  const res = await fetch(`${BASE_URL}/news`);
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}


export async function fetchLosers() {
  const res = await fetch(`${BASE_URL}/losers`);
  if (!res.ok) throw new Error("Failed to fetch losers");
  return res.json();
}

export async function fetchActive() {
  const res = await fetch(`${BASE_URL}/active`);
  if (!res.ok) throw new Error("Failed to fetch active");
  return res.json();
}

export async function fetchSpotlight() {
  const res = await fetch(`${BASE_URL}/spotlight`);
  if (!res.ok) throw new Error("Failed to fetch spotlight");
  return res.json();
}