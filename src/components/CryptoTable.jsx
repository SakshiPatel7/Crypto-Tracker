import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from '../features/cryptoSlice';
import './CryptoTable.css';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const { cryptos, loading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData());
  
    const interval = setInterval(() => {
      dispatch(simulateUpdate());
    }, 2000); // updates every 2 seconds
  
    return () => clearInterval(interval);
  }, [dispatch]);
  

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="loader animate-spin rounded-full border-t-2 border-b-2 border-blue-500 h-12 w-12"></div>
        <p className="mt-4 text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="table-container">
      <h1 className="table-title">💹 Crypto Price Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.length > 0 ? (
            cryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td>
                  <img
                    src={crypto.image || '/default-image.png'}
                    alt={crypto.name}
                    className="crypto-logo"
                  />
                </td>
                <td>{crypto.name}</td>
                <td>{crypto.symbol.toUpperCase()}</td>
                <td className="price">
                  ${crypto.current_price?.toFixed(2) || 'N/A'}
                </td>
                <td
                  className={`${
                    crypto.price_change_percentage_1h_in_currency > 0
                      ? 'positive'
                      : crypto.price_change_percentage_1h_in_currency < 0
                      ? 'negative'
                      : 'neutral'
                  }`}
                >
                  {crypto.price_change_percentage_1h_in_currency != null
                    ? crypto.price_change_percentage_1h_in_currency.toFixed(2)
                    : 'N/A'}
                  %
                </td>
                <td
                  className={`${
                    crypto.price_change_percentage_24h > 0
                      ? 'positive'
                      : crypto.price_change_percentage_24h < 0
                      ? 'negative'
                      : 'neutral'
                  }`}
                >
                  {crypto.price_change_percentage_24h != null
                    ? crypto.price_change_percentage_24h.toFixed(2)
                    : 'N/A'}
                  %
                </td>
                <td
                  className={`${
                    crypto.price_change_percentage_7d_in_currency > 0
                      ? 'positive'
                      : crypto.price_change_percentage_7d_in_currency < 0
                      ? 'negative'
                      : 'neutral'
                  }`}
                >
                  {crypto.price_change_percentage_7d_in_currency != null
                    ? crypto.price_change_percentage_7d_in_currency.toFixed(2)
                    : 'N/A'}
                  %
                </td>
                <td>
                  {crypto.market_cap
                    ? `$${crypto.market_cap.toLocaleString()}`
                    : 'N/A'}
                </td>
                <td>
                  {crypto.total_volume
                    ? `$${crypto.total_volume.toLocaleString()}`
                    : 'N/A'}
                </td>
                <td>
                  {crypto.circulating_supply
                    ? crypto.circulating_supply.toLocaleString()
                    : 'N/A'}
                </td>
                <td>
                  {crypto.max_supply ? crypto.max_supply : 'N/A'}
                </td>
                <td>
                  <a
                    href={`https://www.coingecko.com/en/coins/${crypto.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chart-link"
                  >
                    📈 View Chart
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12" className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
