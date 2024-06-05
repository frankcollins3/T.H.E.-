// @redux-js/toolkit

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APPLEcompanyINTERFACE } from 'Interface/InterfaceTypes';

interface StocksSliceState {
  USERNAME_INPUT: string;     

  APPLE: APPLEcompanyINTERFACE
}

const initialState: StocksSliceState = {    
  USERNAME_INPUT: 'u name',

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
    }
}

                                        
const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: { 
    SET_USERNAME_INPUT_SIGNUP: (state, action) => { state.USERNAME_INPUT = action.payload },

    SET_APPLE: (state, action) => { state.APPLE = action.payload },    
  },
});

export const 
{ 
    SET_USERNAME_INPUT_SIGNUP,    
} = stocksSlice.actions;

export default stocksSlice.reducer;
export type StocksState = StocksSliceState;
