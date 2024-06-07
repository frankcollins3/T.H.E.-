  import axios from 'axios';
  import $ from 'jquery'
  import React, { useEffect, useState } from 'react'
  // recharts needs client component which I'm using mac-mojave defaults to <client> opposed to newly @14+? <server-component/> defaults
  import { Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

  // @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  import { 
    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
    SET_CANDLESTICK_CHART_CURR_DATA,
    SET_CANDLESTICK_CHART_FILTER_START_DATE, 
    SET_CANDLESTICK_CHART_FILTER_END_DATE,
    TOGGLE_CANDLESTICK_CHART_SHOW_FILTER,
    CLEAR_CANDLESTICK_CHART_FILTER
   } from 'redux/stocks/stocksSlice';
  
  //  containers and styling
  import Container from 'react-bootstrap/Container';
  import DynamicLineChart from "components/DynamicLineChart"
  import Calendar from "react-calendar"
  import CandlestickChartCheckboxes from "components/CandlestickChartCheckboxes";
  import styles from "styles/Intro.module.scss"

  // utils
  import month from "utility/candlestickData"
  import {useImage} from "Contexts/Img"
  import { useStocks } from 'Contexts/StocksContext';
  import { isParamValidLocale } from 'utility/utilityValues';
  import season from "utility/candlestickData"
  // import { UserArray } from 'Interface/InterfaceTypes';
                      
  export default function Main ( props:any ) {  

    const dispatch = useDispatch();
    const { filterCandlestickData } = useStocks();
    const { ADazure } = useImage();

    const CANDLESTICK_CHART_TODAYS_DATE = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_TODAYS_DATE)
    const CANDLESTICK_CHART_SINGLE_SELECTION = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_SINGLE_SELECTION)
    const CANDLESTICK_CHART_MULTI_SELECTION = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SELECTION)
    const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O)
    const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H)
    const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L)
    const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C)
    const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V)

    const CANDLESTICK_CHART_FILTER_START_DATE = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_FILTER_START_DATE)
    const CANDLESTICK_CHART_FILTER_END_DATE = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_FILTER_END_DATE)

    const CANDLESTICK_CHART_CURR_DATA = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_CURR_DATA);
    const CANDLESTICK_CHART_SHOW_FILTER = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_FILTER);

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

    const renderLineChart = (
      <LineChart id="candlestickChart" width={730} height={430} data={CANDLESTICK_CHART_CURR_DATA}
      // <LineChart id="candlestickChart" width={730} height={430} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
      <CartesianGrid strokeDasharray="20 20" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />

      { CANDLESTICK_CHART_MULTI_SHOW_O === true && <Line className="line" type="monotone" dataKey="open" stroke="goldenrod" /> }
      { CANDLESTICK_CHART_MULTI_SHOW_H === true && <Line type="monotone" dataKey="high" stroke="#33af52" /> }

      { CANDLESTICK_CHART_MULTI_SHOW_L === true && <Line className="line" type="monotone" dataKey="low" stroke="#ed1c24" /> }
      { CANDLESTICK_CHART_MULTI_SHOW_C === true && <Line className="line" type="monotone" dataKey="close" stroke="rebeccapurple" /> }      
      { CANDLESTICK_CHART_MULTI_SHOW_V === true && <Line className="line" type="monotone" dataKey="volume" stroke="maroon" /> }        
      </LineChart>
    )

    const monthButton = () => {
      // if no data corresponds to the other months don't allow clicking for other months/years.
      // .some() boolean checker 
    }

    
    const clickDay = (value:any, event:any) => {
      // const clickDay = (locale:any, date:any) => {
        // for formatDay() props to bypass extra formatting logic:        // const clickDay = (date:any) => {
      
        const formattedDate = `${value.getMonth() + 1}-${value.getDate()}-${value.getFullYear()}`;
        console.log('formattedDate', formattedDate)

        // .some() returns T|F if condition validates that the {season.date}       True:  | False: Date 
        const doesDataExistForDate = season.some(candlestickData => candlestickData?.date === formattedDate)
        
        if (!doesDataExistForDate) {
          return;
// UX -> assuming user clicks too far back in time (not forward) set state() to show the first available day in data. 
//      DATA_START_DATE || DATA_END_DATE -> might not need these but can probably neat stuff with them.
        }

        // if start date doesn't exist:       SET_START_DATE() 
        if (CANDLESTICK_CHART_FILTER_START_DATE === '') {
          dispatch(SET_CANDLESTICK_CHART_FILTER_START_DATE(formattedDate))
          // tautological & explicitly declaring based on
        } 
        else if (CANDLESTICK_CHART_FILTER_START_DATE?.length > 1 && CANDLESTICK_CHART_FILTER_END_DATE === '') {          

          console.log("else block!!!");
          dispatch(SET_CANDLESTICK_CHART_FILTER_END_DATE(formattedDate))   
          filterCandlestickData(CANDLESTICK_CHART_FILTER_START_DATE, formattedDate)
          // could shorten to:         if (CANDLESTICK_START_DATE)
        }        
        else if (CANDLESTICK_CHART_FILTER_START_DATE?.length > 1 && CANDLESTICK_CHART_FILTER_END_DATE?.length > 1) {        
          dispatch(CLEAR_CANDLESTICK_CHART_FILTER())
          dispatch(SET_CANDLESTICK_CHART_FILTER_START_DATE(formattedDate))
        } else {
          // recursion probably not needed as I believe above blocks cover every possible case. 
          // clickDay()
        }

        // submit button free!!!!! 
      }
        
      const test = () => {
        // let reactCalendarJQ = $('.react-calendar')
        // let childrenOfTime = reactCalendarJQ.children()
        // if (!childrenOfTime[1]) {
        //   return;
        // }
        // let viewContainer = childrenOfTime[1]
        // let containerChildren = $(viewContainer).children()
        // if (!containerChildren[0]) {
        //   return;
        // }
        // console.log('reactCalendarJQ', reactCalendarJQ)
        // console.log('childrenOfTime', childrenOfTime)
        // console.log('viewContainer', viewContainer)
        // console.log('containerChildren', containerChildren)
        // const daysOfMonth = $(containerChildren[0]).children()
        // console.log('daysOfMonth', daysOfMonth)

        let childrenOfTime = $('.react-calendar__month-view__days').children()
        // console.log('childrenOfTime', childrenOfTime)
        // console.log('type', typeof childrenOfTime)
        // console.log('length', childrenOfTime?.length)

        $(childrenOfTime).each((index, day) => {
        // children found! for the filter: this element targeting is how to highlight the days between & including: start date, end date        

        // if (index < 20) {
          console.log('day', day)
          console.log('textContent', day.textContent)
        // }

          if (day?.textContent === CANDLESTICK_CHART_FILTER_START_DATE) {
              console.log("we are in this block here now!");
              $(day).css('color', 'orange')
          }

        })

        // console.log('start date', CANDLESTICK_CHART_FILTER_START_DATE)
        // console.log('end date', CANDLESTICK_CHART_FILTER_END_DATE)
      }

    useEffect( () => { 
      dispatch(SET_CANDLESTICK_CHART_CURR_DATA(season)) }, 
    [])

      return (
        
        <Container
         style={{ marginLeft: CANDLESTICK_CHART_SHOW_FILTER === false ? '-60px' : '0px' }}
         id="MainIntro">      
        {/* <Container id="introMain">       */}

        {/* <div className="ghost"> empty </div> */}

        {/* {renderLineChart} */}
        <Container id={styles.chartCheckBoxAndToggleCalendarRow}>

        {
          CANDLESTICK_CHART_SHOW_FILTER === true &&
            <Calendar
            onClickDay={(value:any, event:any) => clickDay(value, event)}
            // formatDay={(locale:any, date:any) => clickDay(locale, date)}
            />
        }
        
        <Container id={styles.chartCheckboxCont}>

        <DynamicLineChart/>
        <CandlestickChartCheckboxes/>

        </Container>

        </Container>

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
