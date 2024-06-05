import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APPLEcompanyINTERFACE } from 'Interface/InterfaceTypes';

interface StocksSliceState {
  APPLE: APPLEcompanyINTERFACE;

  // toggles, determines to which of the below state options a user's selection applies: CANDLESTICK_CHART_SINGLE_SELECTION | CANDLESTICK__MULTI_SELECTION
  CANDLESTICK_CHART_VIEW_MULTI: boolean;

  // selection being: OHLCV.      multi selection splits between showing as 2 lines on linechart:   Open,Close | High,Low
  CANDLESTICK_CHART_SINGLE_SELECTION: string;   // 'o, h, l, c, v' candlestick
  CANDLESTICK_CHART_MULTI_SELECTION: string; // 'oc', 'hl',  || 'all'

}

const initialState: StocksSliceState = {    
  APPLE:{
      keyRatios: {
          id: 0,
          marketCap: 0,
          sharesOutstanding: 0,
          peRatio: 0,
          psRatio: 0,
          pbRatio: 0,
          pegRatio: 0,
          currentRatio: 0,
          debtEquityRatio: 0,
          EPS: 0
        },
        candleStick: { 
            id: 0,
            date: "01-01-0001",
            open: 0,
            high: 0,
            low: 0,
            close: 0,
            volume: 0,            
        },
        tradeTicker: { 
            id: 0,
            time: "00:00",
            quantity: 0,
            price: 0,
        }   
    },

    // CANDLESTICK_CHART_VIEW_MULTI
  CANDLESTICK_CHART_VIEW_MULTI: false,
  CANDLESTICK_CHART_SINGLE_SELECTION: '',
  CANDLESTICK_CHART_MULTI_SELECTION: '',
}
                                        
const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: { 

    SET_APPLE: (state, action) => { state.APPLE = action.payload },
    
    SET_APPLE_KEY_RATIOS: (state, action) => { state.APPLE.keyRatios = action.payload },    
    SET_APPLE_CANDLESTICK: (state, action) => { state.APPLE.candleStick = action.payload },    
    SET_APPLE_TICKER: (state, action) => { state.APPLE.tradeTicker = action.payload },    

    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI: (state) => { state.CANDLESTICK_CHART_VIEW_MULTI = !state.CANDLESTICK_CHART_VIEW_MULTI },    
    
    SET_CANDLESTICK_CHART_SINGLE_SELECTION: (state, action) => { state.CANDLESTICK_CHART_SINGLE_SELECTION = action.payload },
    SET_CANDLESTICK_CHART_MULTI_SELECTION: (state, action) => { state.CANDLESTICK_CHART_MULTI_SELECTION = action.payload },
    // when multi view is selected single view will reset and vice versa. 

  },
});

export const 
{ 
    SET_APPLE, SET_APPLE_KEY_RATIOS, SET_APPLE_CANDLESTICK, SET_APPLE_TICKER,        
    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI, 
    SET_CANDLESTICK_CHART_SINGLE_SELECTION, SET_CANDLESTICK_CHART_MULTI_SELECTION

} = stocksSlice.actions;

export default stocksSlice.reducer;
export type StocksState = StocksSliceState;
