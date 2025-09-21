import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const useFetchCoins = ({ page = 1, perPage = 50, search = '', currency = 'usd' }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const url = `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`;
      const res = await fetch(url);
      const data = await res.json();
      setCoins(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch coins');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [page, perPage, currency]);

  return { coins, loading, error };
};
