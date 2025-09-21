import React from 'react';

const CoinRow = ({ coin }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
      <td>{coin.market_cap_rank}</td>
      <td className="flex items-center gap-2">
        <img src={coin.image} alt={coin.name} className="w-6 h-6" />
        {coin.name} ({coin.symbol.toUpperCase()})
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td className={coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>${coin.market_cap.toLocaleString()}</td>
      <td>${coin.total_volume.toLocaleString()}</td>
    </tr>
  );
};

export default CoinRow;
