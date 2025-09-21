import React, { useState, useEffect } from 'react';
import { fetchMarketData } from '../../services/coingecko';
import CoinRow from './CoinRow';
import SkeletonTable from '../Skeletons/SkeletonTable';

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMarketData().then(data => {
      setCoins(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <SkeletonTable />;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coin => (
            <CoinRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
