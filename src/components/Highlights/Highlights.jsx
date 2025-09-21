import React, { useEffect, useState } from 'react';
import { fetchTrendingCoins, fetchMarketData } from '../../services/coingecko';

const Highlights = () => {
  const [trending, setTrending] = useState([]);
  const [topGainers, setTopGainers] = useState([]);

  useEffect(() => {
    fetchTrendingCoins().then(data => setTrending(data));
    fetchMarketData().then(data => {
      const sorted = [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
      setTopGainers(sorted.slice(0, 5));
    });
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-1">Top Gainers</h3>
          <ul>
            {topGainers.map(coin => (
              <li key={coin.id}>{coin.name} ({coin.symbol.toUpperCase()}): {coin.price_change_percentage_24h.toFixed(2)}%</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-1">Trending Coins</h3>
          <ul>
            {trending.map(item => (
              <li key={item.item.id}>{item.item.name} ({item.item.symbol.toUpperCase()})</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
