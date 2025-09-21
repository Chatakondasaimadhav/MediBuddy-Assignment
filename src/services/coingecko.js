const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchMarketData = async () => {
  const res = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`);
  return res.json();
};

export const fetchTrendingCoins = async () => {
  const res = await fetch(`${BASE_URL}/search/trending`);
  const data = await res.json();
  return data.coins;
};
