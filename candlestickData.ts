import { candlestickINTERFACE, candlestickARRAYTYPE } from "Interface/InterfaceTypes";

// extensively a non-relational DB like mongo. OHLCV data. but especially if range from 7-52 weeks only JSON.stringify() data
// could allow web scraper functions or human reported data and wishlistingly allow AI to Object.deleteProperty() tickers display erroneous info

// const week1:candlestickARRAYTYPE = [
//     { id: null, open: 180, high: 185, low: 178, close: 183, volume: 75432100, date: '5-1-2024' },
//     { id: null, open: 182, high: 187, low: 180, close: 186, volume: 80230123, date: '5-2-2024' },
//     { id: null, open: 185, high: 190, low: 183, close: 188, volume: 82143210, date: '5-3-2024' },
//     { id: null, open: 188, high: 192, low: 186, close: 190, volume: 80421054, date: '5-4-2024' },
//     { id: null, open: 190, high: 195, low: 188, close: 192, volume: 82350123, date: '5-5-2024' }
//   ];

//   const week2:candlestickARRAYTYPE = [
//     { id: null, open: 192, high: 197, low: 190, close: 195, volume: 82312340, date: '5-8-2024' },
//     { id: null, open: 195, high: 200, low: 193, close: 198, volume: 83128342, date: '5-9-2024' },
//     { id: null, open: 198, high: 202, low: 196, close: 200, volume: 84100239, date: '5-10-2024' },
//     { id: null, open: 200, high: 205, low: 198, close: 203, volume: 85000123, date: '5-11-2024' },
//     { id: null, open: 203, high: 207, low: 201, close: 205, volume: 86012340, date: '5-12-2024' }
//   ];

//   const week3:candlestickARRAYTYPE = [
//     { id: null, open: 205, high: 210, low: 203, close: 208, volume: 87012340, date: '5-15-2024' },
//     { id: null, open: 208, high: 212, low: 206, close: 210, volume: 88100123, date: '5-16-2024' },
//     { id: null, open: 210, high: 215, low: 208, close: 213, volume: 89001234, date: '5-17-2024' },
//     { id: null, open: 213, high: 218, low: 211, close: 216, volume: 90123456, date: '5-18-2024' },
//     { id: null, open: 216, high: 220, low: 214, close: 219, volume: 91234567, date: '5-19-2024' }
//   ];

//   const week4:candlestickARRAYTYPE = [
//     { id: null, open: 219, high: 223, low: 217, close: 221, volume: 92345678, date: '5-22-2024' },
//     { id: null, open: 221, high: 225, low: 219, close: 223, volume: 93456789, date: '5-23-2024' },
//     { id: null, open: 223, high: 227, low: 221, close: 225, volume: 94567890, date: '5-24-2024' },
//     { id: null, open: 225, high: 230, low: 223, close: 228, volume: 95678901, date: '5-25-2024' },
//     { id: null, open: 228, high: 232, low: 226, close: 230, volume: 96789012, date: '5-26-2024' }
//   ];

//   const month:candlestickARRAYTYPE = [
//     ...week1,
//     ...week2,
//     ...week3,
//     ...week4,
//   ]

const week1:candlestickARRAYTYPE = [
  { id: null, open: 180, high: 185, low: 178, close: 183, volume: 75432100, date: '5-1-2024' },
  { id: null, open: 182, high: 187, low: 180, close: 186, volume: 80230123, date: '5-2-2024' },
  { id: null, open: 185, high: 190, low: 183, close: 188, volume: 82143210, date: '5-3-2024' },
  { id: null, open: 188, high: 192, low: 186, close: 190, volume: 80421054, date: '5-4-2024' },
  { id: null, open: 190, high: 195, low: 188, close: 192, volume: 82350123, date: '5-5-2024' }
];

const week2:candlestickARRAYTYPE = [
  { id: null, open: 192, high: 197, low: 190, close: 195, volume: 82312340, date: '5-8-2024' },
  { id: null, open: 195, high: 200, low: 193, close: 198, volume: 83128342, date: '5-9-2024' },
  { id: null, open: 198, high: 202, low: 196, close: 200, volume: 84100239, date: '5-10-2024' },
  { id: null, open: 200, high: 205, low: 198, close: 203, volume: 85000123, date: '5-11-2024' },
  { id: null, open: 203, high: 207, low: 201, close: 205, volume: 86012340, date: '5-12-2024' }
];

const week3:candlestickARRAYTYPE = [
  { id: null, open: 205, high: 210, low: 203, close: 208, volume: 87012340, date: '5-15-2024' },
  { id: null, open: 208, high: 212, low: 206, close: 210, volume: 88100123, date: '5-16-2024' },
  { id: null, open: 210, high: 215, low: 208, close: 213, volume: 89001234, date: '5-17-2024' },
  { id: null, open: 213, high: 218, low: 211, close: 216, volume: 90123456, date: '5-18-2024' },
  { id: null, open: 216, high: 220, low: 214, close: 219, volume: 91234567, date: '5-19-2024' }
];

const week4:candlestickARRAYTYPE = [
  { id: null, open: 219, high: 223, low: 217, close: 221, volume: 92345678, date: '5-22-2024' },
  { id: null, open: 221, high: 225, low: 219, close: 223, volume: 93456789, date: '5-23-2024' },
  { id: null, open: 223, high: 227, low: 221, close: 225, volume: 94567890, date: '5-24-2024' },
  { id: null, open: 225, high: 230, low: 223, close: 228, volume: 95678901, date: '5-25-2024' },
  { id: null, open: 228, high: 232, low: 226, close: 230, volume: 96789012, date: '5-26-2024' }
];

const month:candlestickARRAYTYPE = [
  ...week1,
  ...week2,
  ...week3,
  ...week4,
]

  
  export default month;
