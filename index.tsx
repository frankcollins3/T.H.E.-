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

    // const INTRO_ANIMATION_DONE = useSelector( (state:RootState) => state.intro.INTRO_ANIMATION_DONE)

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
    
    //      utils.ts:         dayNames:string[] monthNames:string[]
    const data = [
      // { y: 'amt', x: 'uv', uv: 400, pv: 2400, amt: 2400 },
      // { y: 'amt', x: 'uv', uv: 200, pv: 1200, amt: 1200 },
      // { y: 'amt', x: 'uv', uv: 250, pv: 800, amt: 1200 },

// might denormalize date into these fields. --> UDPATE: not just date, time. and timeframe: week, month, year... UPDATE -> back to just date

      { o: 185, h: 199, l: 184, c: 186, volume: 85354356, date: '5-30-2024', },
      { o: 188, h: 202, l: 186, c: 186, volume: 83128240, date:  '5-31-2024', },
      { o: 185, h: 197, l: 184, c: 186, volume: 80247739, date: '6-0-2024', },
      { o: 186, h: 189, l: 186, c: 187, volume: 83128240, date:  '6-1-2024', },
      { o: 190, h: 201, l: 189, c: 200, volume: 83128240, date:  '6-2-2024', },
      { o: 190, h: 201, l: 189, c: 200, volume: 83128240, date:  '6-3-2024', },
      { o: 192, h: 202, l: 190, c: 202, volume: 83128240, date:  '6-4-2024', },

      // ohlcv on the y axis.  x axis will be doing the same thang
      // MVP -> 7 day data; 
  ];
  // possible algorithms like: the higher the volume the more short interest in stock. 

  

    // const renderLineChart = (
    //   <LineChart id="candlestickChart" width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>        
    //       {/* SHOW_KEY === "o" &&      */}
    //     <Line  type="monotone" dataKey="h" stroke="olivedrab" /> 
    //     {/* <Line  type="monotone" dataKey="c" stroke="goldenrod" /> */}
    //     {/* <Line  type="monotone" dataKey="l" stroke="indigo" /> */}
    //     {/* <Line  type="monotone" dataKey="c" stroke="lightorange" /> */}
    //     {/* <Line type="monotone" dataKey="volume" stroke="dodgerblue" />  */}

    //     {/* <Line type="monotone" dataKey="amt" stroke="#2F4F4F" /> */}
    //     {/* <Line type="monotone" dataKey="amt" stroke="#dbcfdf" /> */}
    //     <CartesianGrid stroke="moccasin" strokeDasharray="20 20" />
    //     <XAxis dataKey="date" />
    //     <YAxis dataKey="h"/>
    //     <Tooltip />
    //   </LineChart>
    // );

    const renderLineChart = (
      <LineChart id="candlestickChart" width={730} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="20 20" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="h" stroke="#33af52" />
      <Line type="monotone" dataKey="l" stroke="#ed1c24" />
      <Line type="monotone" dataKey="o" stroke="indigo" />
      <Line type="monotone" dataKey="c" stroke="hotpink" />

  {/* volume will be slighted separated */}
  {/* <Line type="monotone" dataKey="v" stroke="dodgerblue" /> */}
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
