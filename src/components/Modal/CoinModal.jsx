import React, { useEffect, useState } from 'react';
import ModalWrapper from './ModalWrapper';

const CoinModal = ({ coinId, onClose }) => {
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await res.json();
      setCoin(data);
    };
    fetchCoinDetails();
  }, [coinId]);

  if (!coin) return null;

  return (
    <ModalWrapper onClose={onClose}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <img src={coin.image.small} alt={coin.name} />
          <h2 className="text-xl font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h2>
        </div>
        <p dangerouslySetInnerHTML={{ __html: coin.description.en.split('. ')[0] + '.' }} />
        <p>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
        <p>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
        <p>24h Change: {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
      </div>
    </ModalWrapper>
  );
};

export default CoinModal;
