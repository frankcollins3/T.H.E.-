import React, { createContext, useContext, ReactNode, useState } from "react";
import axios from 'axios'

// redux
// @reduxjs/toolkit:
import {RootState} from "redux/store/rootReducer"
import {useSelector, useDispatch} from "react-redux"
import { APPLEcompanyINTERFACE } from "Interface/InterfaceTypes";

// utility

// wishlist:        npm i puppeter (web scraper + more) -> writes to this list with user/AI determined stock tickers as object params 


type StocksTypes = {
    getAllDomainCookies: () => any;   
    
    APPLE: APPLEcompanyINTERFACE
    // keyRatios, tickers, candlesticks,

} 
    
// "Market Cap": "$2,500,000,000,000",
// "Shares Outstanding": "16,000,000,000",
// "P/E Ratio": "30",
// "P/S Ratio": "8",
// "P/B Ratio": "10",
// "PEG Ratio": "1.5",
// "Current Ratio": "2.5",
// "Debt to Equity Ratio": "0.4",
// "EPS": "$5.60"


const StocksDefaults = {
    getAllDomainCookies: () => {},

// stock data maybe empty to reflect: chatGPT | AI | docker-flask-data | hard-coded data might be the determining data. leave empty setState()
    APPLE: {
        keyRatios: {
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
        candleStick: { },
        tradeTicker: { }
    }
}

const StocksContext = createContext<StocksTypes>(StocksDefaults)

export function useStocks() {
    return useContext(StocksContext)
}

type Props = { children: ReactNode }

export function StockProvider({children}:Props) {

    const dispatch = useDispatch()
    const CURRENT_USER = useSelector((state:RootState) => state.currentUser.CURRENT_USER)
    
    // this function returns the array of all cookies.     .split('; ') provides immediate usage of these array items.
    function getAllDomainCookies() {
        if (typeof window === 'undefined') return [];
        
        let cookieArray = document.cookie.split('; ');
        if (cookieArray === null || cookieArray === undefined || cookieArray?.length <= 0) {
            return  
        }
        return cookieArray;                
    }
        

    // const puppeteerGetKeyRatios = () => { }
    // const setKeyRatios = () => {}

    // const returnHardCodedKeyRatios = () => { }

    const value = {
        getAllDomainCookies,
    }

    return (
        <StocksContext.Provider value={value}>
            {children}
        </StocksContext.Provider>
    )
}
