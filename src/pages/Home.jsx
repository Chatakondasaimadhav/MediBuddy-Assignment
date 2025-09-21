import React from 'react';
import CoinTable from '../components/CoinTable/CoinTable';
import Highlights from '../components/Highlights/Highlights';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Crypto Dashboard</h1>
      <Highlights />
      <CoinTable />
    </div>
  );
};

export default Home;
