# 🚀 **Crypto Tracker - Real-Time Price Tracker**

## 📝 **Overview**

This is a **Real-Time Crypto Price Tracker** built using **React** and **Redux Toolkit**. The application fetches and displays the latest cryptocurrency data, simulates live updates, and tracks various metrics like **Price**, **24h % Change**, **Market Cap**, and **Volume**.

## 🌟 **Features**

- ⏱ **Real-time updates** of cryptocurrency data.
- 📱 **Responsive UI** that works across devices.
- 📊 Displays **Price**, **24h %**, **Market Cap**, **24h Volume**, **7D Chart**.
- 🟢🔴 **Color-coded percentage changes** (green for positive, red for negative).
- ⚙️ Uses **Redux Toolkit** for state management.
- 🔄 **Simulated live updates** via **setInterval** for price and volume changes.

## 🧰 **Tech Stack**

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **State Management**: Redux Toolkit
- **API**: CoinGecko API (for fetching crypto data)
- **Bundler**: Vite (for faster development and builds)
- **UI Styling**: Tailwind CSS (for responsive and modern design)

## 🏗️ **Architecture**

- **React** components for UI
  - `CryptoTable`: Displays the list of cryptocurrencies in a table format.
  - Redux store and slice handle fetching and updating the crypto data.
- **Redux Toolkit** manages state and handles **live updates** of crypto data.
- The app simulates live updates (price and volume changes) using **setInterval**.

## 🔧 **Setup Instructions**

1. **Clone the repository**:

   
   git clone https://github.com/SakshiPatel7/Crypto-Tracker.git
   cd Crypto-Tracker
2. **Install dependencies**:

   ```bash
   npm install
3. **Run the app**:

   ```bash
   npm run dev
4. **Visit the app**:  

   Open your browser and go to `http://localhost:3000` to view the application running locally.

---

## 🎥 **Demo**

Here’s a demo of the app in action:

[Watch the Demo](https://drive.google.com/file/d/1slO96v3Kuhe_7SasqfbiJ_lOKWa9-IcM/view?usp=sharing)
