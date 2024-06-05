  import axios from 'axios';
  import React, { useEffect, useState } from 'react'
  // recharts needs client component which I'm using mac-mojave defaults to <client> opposed to newly @14+? <server-component/> defaults
  import { Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

  // @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  import { 
    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V
   } from 'redux/stocks/stocksSlice';
  
  import Container from 'react-bootstrap/Container';
  import CandlestickChartCheckboxes from "components/CandlestickChartCheckboxes";


  // utils
  import {useImage} from "Contexts/Img"
  import { isParamValidLocale } from 'utility/utilityValues';
  // import { UserArray } from 'Interface/InterfaceTypes';
                      
  export default function Main ( props:any ) {  

    const INTRO_ANIMATION_DONE = useSelector( (state:RootState) => state.intro.INTRO_ANIMATION_DONE)
    const CANDLESTICK_CHART_SINGLE_SELECTION = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_SINGLE_SELECTION)
    const CANDLESTICK_CHART_MULTI_SELECTION = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SELECTION)
    const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O)
    const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H)
    const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L)
    const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C)
    const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V)

    const apple = {
      "Market Cap": "$2,500,000,000,000",
      "Shares Outstanding": "16,000,000,000",
      "P/E Ratio": "30",
      "P/S Ratio": "8",
      "P/B Ratio": "10",
      "PEG Ratio": "1.5",
      "Current Ratio": "2.5",
      "Debt to Equity Ratio": "0.4",
      "EPS": "$5.60"
    }

    const data = [      

      { open: 185, high: 199, low: 184, close: 186, volume: 85354356, date: '5-30-2024', },
      { open: 188, high: 202, low: 186, close: 186, volume: 83128240, date:  '5-31-2024', },
      { open: 185, high: 197, low: 184, close: 186, volume: 80247739, date: '6-0-2024', },
      { open: 186, high: 189, low: 186, close: 187, volume: 83128240, date:  '6-1-2024', },
      { open: 190, high: 201, low: 189, close: 200, volume: 83128240, date:  '6-2-2024', },
      { open: 190, high: 201, low: 189, close: 200, volume: 83128240, date:  '6-3-2024', },
      { open: 192, high: 202, low: 190, close: 202, volume: 83128240, date:  '6-4-2024', },
  ];

    const renderLineChart = (
      <LineChart id="candlestickChart" width={730} height={430} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="20 20" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />

      { CANDLESTICK_CHART_MULTI_SHOW_O === true && <Line className="line" type="monotone" dataKey="open" stroke="#208075" /> }
      { CANDLESTICK_CHART_MULTI_SHOW_H === true && <Line type="monotone" dataKey="high" stroke="#33af52" /> }
      { CANDLESTICK_CHART_MULTI_SHOW_L === true && <Line type="monotone" dataKey="low" stroke="#ed1c24" /> }
      { CANDLESTICK_CHART_MULTI_SHOW_C === true && <Line type="monotone" dataKey="close" stroke="rgb(84, 207, 224)" /> }

      { CANDLESTICK_CHART_MULTI_SHOW_V === true && <Line type="monotone" dataKey="volume" stroke="rgb(84, 207, 224)" /> }
      {/* <Line type="monotone" dataKey="h" stroke="#33af52" /> */}
      {/* <Line type="monotone" dataKey="l" stroke="#ed1c24" /> */}
      {/* <Line type="monotone" dataKey="c" stroke="rgb(84, 207, 224)" /> */}

  {/* volume will be slighted separated */}
  {/* <Line type="monotone" dataKey="volume" stroke="rebeccapurple" /> */}
</LineChart>
    )


    useEffect( () => {      

    }, [])

      return (
        
        <Container id="MainIntro">      
        {/* <Container id="introMain">       */}

        {/* <div className="ghost"> empty </div> */}

        {renderLineChart}
        <CandlestickChartCheckboxes/>
        

        {/* <ShowAppPhone/> */}

        {/* <AllOurs/> */}      

        {/* <IntroFooter/>  */}
        {/* { INTRO_ANIMATION_DONE === 4  && <IntroFooter/> } */}

        </Container>                   
      )
    }

    // const locales:string[] =  ['en', 'zh', 'hi', 'fr', 'ar', 'bn', 'ur', 'es', 'pt', 'ru', 'id', 'de']
    // const messages = (await import(`messages/${'zh'}/${'zh'}.json`)).default;

  export async function getStaticProps(context) {    
    // let { locale } = context || 'en' ;    
    let locale = 'en'
    // let locale = context.locale || 'en'

    console.log('SERVER: locale', locale)    
    const isLocaleValid = isParamValidLocale(locale)
    if (!isLocaleValid) {
      console.log("guys were in the if block in the server... were fucked!")
      return {
        props: {
          messages: 'no messages', 
        }
      }
    }

    const messages = (await import(`messages/${locale}/${locale}.json`)).default;
    console.log('SERVER. lets look at messages: ', messages)
    return {
      props: {
        messages: messages ? messages : 'no messages'
      }
    }      
  }
