import React, { createContext, useContext, ReactNode, useState } from "react";
import axios from 'axios'

// redux
// @reduxjs/toolkit global state management
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from 'redux/store/rootReducer';
import { 
  TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V
 } from 'redux/stocks/stocksSlice';

 // utility
 import { nothing } from "utility/utilityValues";
 import { APPLEcompanyINTERFACE, tradeTickerINTERFACE } from "Interface/InterfaceTypes";
 

// wishlist:        npm i puppeter (web scraper + more) -> writes to this list with user/AI determined stock tickers as object params 


type StocksTypes = {
    getAllDomainCookies: () => any;   
    
    APPLE: APPLEcompanyINTERFACE;
    resetOHLCV: () => any;
    // keyRatios, tickers, candlesticks,

} 

// example dummy data for key ratios
// "Market Cap": "$2,500,000,000,000",
// "Shares Outstanding": "16,000,000,000",
// "P/E Ratio": "30",
// "P/S Ratio": "8",
// "P/B Ratio": "10",
// "PEG Ratio": "1.5",
// "Current Ratio": "2.5",
// "Debt to Equity Ratio": "0.4",
// "EPS": "$5.60"nnnnnnnlnnnnn


const StocksDefaults = {
    getAllDomainCookies: () => {},
// stock data maybe empty to reflect: chatGPT | AI | docker-flask-data | hard-coded data might be the determining data. leave empty setState()

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
}

const StocksContext = createContext<StocksTypes>(StocksDefaults)

export function useStocks() {
    return useContext(StocksContext)
}

type Props = { children: ReactNode }

export function StocksProvider({children}:Props) {

    const dispatch = useDispatch()
    // const CURRENT_USER = useSelector((state:RootState) => state.currentUser.CURRENT_USER)
    const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O)
    const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H)
    const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L)
    const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C)
    const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V)
    

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
    
    // this function returns the array of all cookies.     .split('; ') provides immediate usage of these array items.
    function getAllDomainCookies() {
        if (typeof window === 'undefined') return [];
        
        let cookieArray = document.cookie.split('; ');
        if (cookieArray === null || cookieArray === undefined || cookieArray?.length <= 0) {
            return  
        }
        return cookieArray;                
    }

    const resetOHLCV = () => {
        Promise.all([
            CANDLESTICK_CHART_MULTI_SHOW_O === true ? dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O()) : nothing(),
            CANDLESTICK_CHART_MULTI_SHOW_H === true ? dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H()) : nothing(),
            CANDLESTICK_CHART_MULTI_SHOW_L === true ? dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L()) : nothing(),
            CANDLESTICK_CHART_MULTI_SHOW_C === true ? dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C()) : nothing(),
        ])
        // const objectOHLCV:any = {
        // // const objectOHLVC:tradeTickerINTERFACE = {           // can't because these are populated with function and interface allows nums | null.
        //     o: dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O()),
        //     h: dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H()),
        //     l: dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L()),
        //     c: dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C()),
        //     V: dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V()),
        // }
        // if (CANDLESTICK_CHART_MULTI_SHOW_O === true) {
        //     objectOHLCV.o()
        // }
        // if (CANDLESTICK_CHART_MULTI_SHOW_H === true) {
        //     objectOHLCV.h()
        // }
        // if (CANDLESTICK_CHART_MULTI_SHOW_L === true) {
        //     objectOHLCV.l()
        // }
        // if (CANDLESTICK_CHART_MULTI_SHOW_C === true) {
        //     objectOHLCV.c()
        // }
        // if (CANDLESTICK_CHART_MULTI_SHOW_V === true) {
        //     objectOHLCV.v()
        // }

        // return "hey"
    }
            
    const value = {
        getAllDomainCookies,
        APPLE,
        resetOHLCV
    }

    return (
        <StocksContext.Provider value={value}>
            {children}
        </StocksContext.Provider>
    )
}
