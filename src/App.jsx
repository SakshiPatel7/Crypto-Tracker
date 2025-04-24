// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptoData, simulateUpdate } from './features/cryptoSlice';
import CryptoTable from './components/CryptoTable';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData());

    // Simulate real-time updates every 2 seconds
    const interval = setInterval(() => {
      dispatch(simulateUpdate());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>📊 Real-Time Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
