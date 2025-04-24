const mockData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 30000,
    change1h: -0.5,
    change24h: 2.3,
    change7d: 5.6,
    marketCap: 580000000000,
    volume24h: 25000000000,
    circulatingSupply: '19M',
    maxSupply: '21M',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    chart: '/7dchart.svg'
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2000,
    change1h: 0.2,
    change24h: -1.1,
    change7d: 4.2,
    marketCap: 240000000000,
    volume24h: 12000000000,
    circulatingSupply: '118M',
    maxSupply: '∞',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    chart: '/7dchart.svg'
  },
  // Add 3 more similar entries for USDT, BNB, ADA or your choice
]

export default mockData
