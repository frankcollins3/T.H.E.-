import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import axios from 'axios';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store/rootReducer';
import { 
  TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, 
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, 
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, 
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
  SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC
} from 'redux/stocks/stocksSlice';

// Utility
import { nothing } from "utility/utilityValues";
import { APPLEcompanyINTERFACE } from "Interface/InterfaceTypes";

type StocksTypes = {  
    APPLE: APPLEcompanyINTERFACE;
    resetOHLCV: () => void;
    checkboxClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    singleMultiViewToggle: () => void;
    setOHLCsetLastSelected: () => void;
}

const StocksDefaults: StocksTypes = {
    APPLE: {
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
            date: "00:00",
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
    resetOHLCV: () => {},
    checkboxClick: () => {},
    singleMultiViewToggle: () => {},
    setOHLCsetLastSelected: () => {},
}

const StocksContext = createContext<StocksTypes>(StocksDefaults);

export function useStocks() {
    return useContext(StocksContext);
}

type Props = { children: ReactNode }

export function StocksProvider({ children }: Props) {
    const dispatch = useDispatch();

    const CANDLESTICK_CHART_VIEW_MULTI = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_VIEW_MULTI);
    const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O);
    const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H);
    const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L);
    const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C);
    const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V);
    const CANDLESTICK_CHART_LAST_SELECTED_OHLC = useSelector((state: RootState) => state.stocks.CANDLESTICK_CHART_LAST_SELECTED_OHLC);

    const APPLE = {
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

    const resetOHLCV = () => {
        console.log("this invokes")
        Promise.all([
            // CANDLESTICK_CHART_MULTI_SHOW_O 
            CANDLESTICK_CHART_MULTI_SHOW_O && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O()),
            CANDLESTICK_CHART_MULTI_SHOW_H && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H()),
            CANDLESTICK_CHART_MULTI_SHOW_L && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L()),
            CANDLESTICK_CHART_MULTI_SHOW_C && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C()),
            CANDLESTICK_CHART_MULTI_SHOW_V && dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V()),
        ]).then(() => {
            if (CANDLESTICK_CHART_VIEW_MULTI) {
                // resetOHLCV(); // Make sure this does not cause an infinite loop
            }
        });
    }

    const checkboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;

        if (!id) return;

        if (!CANDLESTICK_CHART_VIEW_MULTI) {
            resetOHLCV();
        }

        switch (id) {
            case "chbx1":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O());
                break;
            case "chbx4":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H());
                break;
            case "chbx5":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L());
                break;
            case "chbx6":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C());
                break;
            default:
                break;
        }
    }

    const singleMultiViewToggle = () => {
        if (CANDLESTICK_CHART_VIEW_MULTI) {
            resetOHLCV();
        }

        switch (CANDLESTICK_CHART_LAST_SELECTED_OHLC) {
            case "o":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O());
                break;
            case "h":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H());
                break;
            case "l":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L());
                break;
            case "c":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C());
                break;
            case "v":
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V());
                break;
            default:
                break;
        }

        dispatch(TOGGLE_CANDLESTICK_CHART_VIEW_MULTI());
    }

    const setOHLCsetLastSelected = (char:string) => {
        // state setting so void but have to return value. 
        if (char === 'o') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("o"))]) }
        if (char === 'h') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("h"))]) }
        if (char === 'l') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("l"))]) }
        if (char === 'c') { Promise.all([dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C()), dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("c"))]) }
        return CANDLESTICK_CHART_LAST_SELECTED_OHLC
    }

    // dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O())
    //                 dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("o"))
            
    const value = {        
        APPLE,
        resetOHLCV,
        checkboxClick,
        singleMultiViewToggle,
        setOHLCsetLastSelected
    }

    return (
        <StocksContext.Provider value={value}>
            {children}
        </StocksContext.Provider>
    );
}
