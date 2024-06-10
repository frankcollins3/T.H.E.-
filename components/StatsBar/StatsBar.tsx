import axios from 'axios';
import $ from 'jquery'
import {useEffect, useState} from "react"


// @reduxjs/toolkit global state management
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from 'redux/store/rootReducer';
import { 
  TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
 } from 'redux/stocks/stocksSlice';

//  containers and styling
import Container from 'react-bootstrap/Container';
import styles from "./StatsBar.module.scss"

// utils
import { DefaultApi } from 'finnhub-ts'
import finnhubClient from 'utility/finnhubStockData/FinnhubClient'



export default function StatsBar() {
    return <RENDER/>
}

function RENDER() {

    // const finnhub = require('finnhub');

    // const api_key = finnhub.ApiClient.instance.authentications['api_keycpj29l9r01qlu187k6ggcpj29l9r01qlu187k6h0'];
    // // api_key.apiKey = "cpj29l9r01qlu187k6ggcpj29l9r01qlu187k6h0"
    // const finnhubClient = new finnhub.DefaultApi()

    // finnhubClient.symbolSearch('AAPL', (error, data, response) => {
    // console.log(data)
    // });

    const test = async () => {
        // /institutional/ownership?symbol=TSLA&from=2022-09-01&to=2022-10-30
        const { symbolSearch, ownership, priceTarget, marketNews } = finnhubClient
        // const appleSymbol = await symbolSearch('AAPL')
        // const appleOwnership = await ownership('AAPL');
        // const applePriceTarget = await priceTarget('AAPL');
        // const appleNews = await marketNews('AAPL')


        var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';

        let predata = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=:D')
        console.log('predata', predata)


        // /quote?symbol=AAPL        
        // console.log('data', data)
        
        // const data = await finnhubClient.symbolSearch('AAPL', (data:any) => {
           

    }   


    return (
        // yahoo api finance
        <Container id={styles.cont}>
            <button onClick={test}>

            </button>
        </Container>

    )
}



//     const finnhubClient = new DefaultApi({
//     apiKey: 'YOUR-API-KEY',
//     isJsonMime: (input) => {
//       try {
//         JSON.parse(input)
//         return true
//       } catch (error) {}
//       return false
//     },
//   })

// companyEarnings('AAPL').then((res) => {
//     console.log(res.data)
//   })