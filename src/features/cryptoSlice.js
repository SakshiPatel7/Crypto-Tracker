import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch crypto data
export const fetchCryptoData = createAsyncThunk('crypto/fetchData', async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      price_change_percentage: '1h,24h,7d', // ✅ Get all % data
    },
  });
  return response.data;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    cryptos: [],
    loading: false,
    error: null,
  },
  reducers: {
    simulateUpdate: (state) => {
      state.cryptos = state.cryptos.map((crypto) => {
        const priceFluctuation = (Math.random() - 0.5) * 100;
        const newPrice = crypto.current_price + priceFluctuation;

        const newChange24h = crypto.price_change_percentage_24h_in_currency
          ? crypto.price_change_percentage_24h_in_currency + (Math.random() - 0.5) * 2
          : (Math.random() - 0.5) * 2;

        const newVolume = crypto.total_volume + Math.floor((Math.random() - 0.5) * 1_000_000);

        return {
          ...crypto,
          current_price: newPrice,
          price_change_percentage_24h_in_currency: newChange24h,
          total_volume: newVolume,
          // ✅ Retain 1h and 7d if available
          price_change_percentage_1h_in_currency: crypto.price_change_percentage_1h_in_currency ?? 0,
          price_change_percentage_7d_in_currency: crypto.price_change_percentage_7d_in_currency ?? 0,
        };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.loading = false;
        state.cryptos = action.payload;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { simulateUpdate } = cryptoSlice.actions;
export default cryptoSlice.reducer;
