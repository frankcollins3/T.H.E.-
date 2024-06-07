  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { candlestickINTERFACE, APPLEcompanyINTERFACE, candlestickARRAYTYPE } from 'Interface/InterfaceTypes';

  //                ../ probably better as candlestickChartSlice.ts but in case we extended this and wanted to keep same file like redux-connect.
  interface StocksSliceState {
    APPLE: APPLEcompanyINTERFACE;

    // toggles, determines to which of the below state options a user's selection applies: CANDLESTICK_CHART_SINGLE_SELECTION | CANDLESTICK__MULTI_SELECTION

    // change to string
    CANDLESTICK_CHART_VIEW_MULTI: boolean;
    CANDLESTICK_CHART_VIEW_HL_OC: boolean;

    // selection being: OHLCV.      multi selection splits between showing as 2 lines on linechart:   Open,Close | High,Low
    CANDLESTICK_CHART_SINGLE_SELECTION: string;   // 'o, h, l, c, v' candlestick
    CANDLESTICK_CHART_MULTI_SELECTION: string; // 'oc', 'hl',  || 'all'

    CANDLESTICK_CHART_MULTI_SHOW_O: boolean; 
    CANDLESTICK_CHART_MULTI_SHOW_H: boolean; 
    CANDLESTICK_CHART_MULTI_SHOW_L: boolean; 
    CANDLESTICK_CHART_MULTI_SHOW_C: boolean; 
    CANDLESTICK_CHART_MULTI_SHOW_V: boolean; 

    // changing UI from 2 L-chkbox to 1: single|multi.. if user checked multiple lines & toggles to single chart only:  keep last selected line
    CANDLESTICK_CHART_LAST_SELECTED_OHLC: string,
    CANDLESTICK_CHART_CURR_DATA: candlestickARRAYTYPE // array of single interfaces { O H L C V:number }
    
    // to show more than 1 charts done with dynamic component:          <Chart data={data}/>    // OHLCV data.
    CANDLESTICK_CHART_CURR_DATA_BIN: candlestickARRAYTYPE[] // array of those arrays to i.e -> compare apple against microsoft
    CANDLESTICK_CHART_TODAYS_DATE: any; 
    CANDLESTICK_CHART_FILTER_START_DATE: string;
    CANDLESTICK_CHART_FILTER_END_DATE: string; 
    CANDLESTICK_CHART_SHOW_FILTER: boolean;
    CANDLESTICK_CHART_COMPANY_LOGO: string;

    // CANDLESTICK_CHART_FILTER_ON: boolean
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
    CANDLESTICK_CHART_VIEW_HL_OC: false,
    CANDLESTICK_CHART_SINGLE_SELECTION: '',
    CANDLESTICK_CHART_MULTI_SELECTION: '',

    CANDLESTICK_CHART_MULTI_SHOW_O: false,
    CANDLESTICK_CHART_MULTI_SHOW_H: false,
    CANDLESTICK_CHART_MULTI_SHOW_L: false, 
    CANDLESTICK_CHART_MULTI_SHOW_C: false,
    
    // might be shown separately from OHLC, because it doesn't share the same info the other stocks represent.
    CANDLESTICK_CHART_MULTI_SHOW_V: false,
    CANDLESTICK_CHART_LAST_SELECTED_OHLC: '',
    CANDLESTICK_CHART_CURR_DATA: [{ id: null, open: 0, close: 0, high: 0, low: 0, volume: 0, date: '' }],
    CANDLESTICK_CHART_CURR_DATA_BIN: [],
    CANDLESTICK_CHART_TODAYS_DATE: new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }).replace(/\//g, '-'),
    CANDLESTICK_CHART_FILTER_START_DATE: '',
    CANDLESTICK_CHART_FILTER_END_DATE: '',
    CANDLESTICK_CHART_SHOW_FILTER: false,
    CANDLESTICK_CHART_COMPANY_LOGO: 'apple',    // defaults to apple.
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
      TOGGLE_CANDLESTICK_CHART_VIEW_HL_OC: (state) => { state.CANDLESTICK_CHART_VIEW_HL_OC = !state.CANDLESTICK_CHART_VIEW_HL_OC },    
      
      SET_CANDLESTICK_CHART_SINGLE_SELECTION: (state, action) => { state.CANDLESTICK_CHART_SINGLE_SELECTION = action.payload },
      SET_CANDLESTICK_CHART_MULTI_SELECTION: (state, action) => { state.CANDLESTICK_CHART_MULTI_SELECTION = action.payload },
      
      TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O: (state) => { state.CANDLESTICK_CHART_MULTI_SHOW_O = !state.CANDLESTICK_CHART_MULTI_SHOW_O },    
      TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H: (state) => { state.CANDLESTICK_CHART_MULTI_SHOW_H = !state.CANDLESTICK_CHART_MULTI_SHOW_H },    
      TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L: (state) => { state.CANDLESTICK_CHART_MULTI_SHOW_L = !state.CANDLESTICK_CHART_MULTI_SHOW_L },    
      TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C: (state) => { state.CANDLESTICK_CHART_MULTI_SHOW_C = !state.CANDLESTICK_CHART_MULTI_SHOW_C },    
      TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V: (state) => { state.CANDLESTICK_CHART_MULTI_SHOW_V = !state.CANDLESTICK_CHART_MULTI_SHOW_V },      
      SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC: (state, action) => { state.CANDLESTICK_CHART_LAST_SELECTED_OHLC = action.payload },
      SET_CANDLESTICK_CHART_CURR_DATA: (state, action) => { state.CANDLESTICK_CHART_CURR_DATA = action.payload },
      SET_CANDLESTICK_CHART_CURR_DATA_BIN: (state, action) => { state.CANDLESTICK_CHART_CURR_DATA_BIN = action.payload },
      // SET_CANDLESTICK_CHART_TODAYS_DATE: (state, action) => { state.CANDLESTICK_CHART_TODAYS_DATE = action.payload },
      SET_CANDLESTICK_CHART_FILTER_START_DATE: (state, action) => { state.CANDLESTICK_CHART_FILTER_START_DATE = action.payload },
      SET_CANDLESTICK_CHART_FILTER_END_DATE: (state, action) => { state.CANDLESTICK_CHART_FILTER_END_DATE = action.payload },
      CLEAR_CANDLESTICK_CHART_FILTER: (state) => { state.CANDLESTICK_CHART_FILTER_START_DATE = '', state.CANDLESTICK_CHART_FILTER_END_DATE = '' },      
      TOGGLE_CANDLESTICK_CHART_SHOW_FILTER: (state) => { state.CANDLESTICK_CHART_SHOW_FILTER = !state.CANDLESTICK_CHART_SHOW_FILTER },      
      SET_CANDLESTICK_CHART_COMPANY_LOGO: (state, action) => { state.CANDLESTICK_CHART_COMPANY_LOGO = action.payload },
    },
  });

  export const 
  { 
      SET_APPLE, SET_APPLE_KEY_RATIOS, SET_APPLE_CANDLESTICK, SET_APPLE_TICKER,        
      TOGGLE_CANDLESTICK_CHART_VIEW_MULTI, 
      SET_CANDLESTICK_CHART_SINGLE_SELECTION, SET_CANDLESTICK_CHART_MULTI_SELECTION,

      TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
      SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC, SET_CANDLESTICK_CHART_CURR_DATA, SET_CANDLESTICK_CHART_CURR_DATA_BIN,
      SET_CANDLESTICK_CHART_FILTER_START_DATE, SET_CANDLESTICK_CHART_FILTER_END_DATE, TOGGLE_CANDLESTICK_CHART_SHOW_FILTER,
      CLEAR_CANDLESTICK_CHART_FILTER,
      SET_CANDLESTICK_CHART_COMPANY_LOGO

// <DynamicLineChart would use that state as inline-styled <> element props to put company logo on calendar (not need as params since redux) 

      // SET_CANDLESTICK_CHART_TODAYS_DATE

  } = stocksSlice.actions;

  export default stocksSlice.reducer;
  export type StocksState = StocksSliceState;
