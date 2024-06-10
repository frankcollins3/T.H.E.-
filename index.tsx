import axios from 'axios';
import $ from 'jquery'
import {useEffect, useState} from "react"
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
  CLEAR_CANDLESTICK_CHART_FILTER,
  TOGGLE_CANDLESTICK_CHART_CALENDAR_TODAY_CLICKED
 } from 'redux/stocks/stocksSlice';

//  containers and styling
import Navbar from "components/Navbar"
import Carousel from "react-bootstrap/Carousel"
import Container from 'react-bootstrap/Container';
import DynamicLineChart from "components/DynamicLineChart"
import KeyRatios from "components/KeyRatios"
import AnalystEstimatesBarGraph from "components/AnalystEstimatesBarGraph"
import Calendar from "react-calendar"
import CandlestickChartCheckboxes from "components/CandlestickChartCheckboxes";
import StatsBar from "components/StatsBar"
import styles from "styles/Intro.module.scss";

// utils
import month from "utility/candlestickData"
import {useImage} from "Contexts/Img"
import { useStocks } from 'Contexts/StocksContext';
import { isParamValidLocale } from 'utility/utilityValues';
import season from "utility/candlestickData"
import estimateBucket from "utility/analystData"
// import { UserArray } from 'Interface/InterfaceTypes';
                    
export default function Main ( props:any ) {  

  const dispatch = useDispatch();
  const { filterCandlestickData } = useStocks();
  const { ADazure, ADventure, check, bofaLogo, citibankLogo,  } = useImage();

  const CANDLESTICK_CHART_TODAYS_DATE = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_TODAYS_DATE)
  const CANDLESTICK_CHART_SINGLE_SELECTION = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_SINGLE_SELECTION)
  const CANDLESTICK_CHART_MULTI_SELECTION = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SELECTION)
  const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O)
  const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H)
  const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L)
  const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C)
  const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V)
  const CANDLESTICK_CHART_CALENDAR_TODAY_CLICKED = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_CALENDAR_TODAY_CLICKED)

  const CANDLESTICK_CHART_FILTER_START_DATE = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_FILTER_START_DATE)
  const CANDLESTICK_CHART_FILTER_END_DATE = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_FILTER_END_DATE)

  const CANDLESTICK_CHART_CURR_DATA = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_CURR_DATA);
  const CANDLESTICK_CHART_SHOW_FILTER = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_FILTER);
  const CANDLESTICK_CHART_SHOW_KEYRATIOS = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_KEYRATIOS);
  const CANDLESTICK_CHART_SHOW_ANALYST_INFO = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_ANALYST_INFO);

  useEffect(() => {
    // alphaAdvantage ohlcv data getter 
    const ohlcvDataSetter = async() => {
      // const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=demo';
      let predata = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=112J7XA238VFAQQM')
          
      const data = predata?.data
      console.log('predata', predata)

      let time_series_data = data['Time Series (5min)']
      console.log('time_series_data', time_series_data)


    }
    ohlcvDataSetter();

  }, [CANDLESTICK_CHART_CALENDAR_TODAY_CLICKED])

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

      const date = new Date()
      const today = date.getDate()
      console.log('today', today)

      if (value.getDate() === today) {
        console.log("today is today man");
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

  const clickNavLi = (event:any) => {
        console.log('event.target', event?.target)
        const target = event?.target || null;
        
        if (!target) {
            return;
        }
        // target established
        const attributes = event.target.attributes;
        const style = attributes[1]

        let JQfontweight = $(event.target).css('font-weight')
        if (parseInt(JQfontweight) === 400) {
            $(event.target).css('font-weight', 'bolder');
        } else {
            $(event.target).css('font-weight', '');
        }

        // if ($(event.target).css('font-weight', 'bolder')[0] === true) {
        //     $(event.target).css('font-weight', '');
        // } else if ($(event.target).css('font-weight', 'bolder')[0] === false){
        //     $(event.target).css('font-weight', 'bolder')
        // }

        // if (event.target) {
        //     const attributes = event.target.attributes
        //     const style = attributes[1]
        //     if (style) {
        //         if (style.nodeValue.includes('bolder')) {
        //             $()
        //         } else {
        //             console.log("it does not include bolder");
        //         } 
        //     } else {
        //         console.log("there is no styling");
        //     }
        //     console.log('event', event)
        // }
    }

  const Navbar = () => (
    <nav className={styles.navbar}>
    </nav>
  );
  

  const GoodMorningHeader = () => (
    <header className={styles.goodMorningHeader}>
      <h1> Apple (aapl) </h1>
      <h1> other half </h1>
      {/* <p>Here is what’s happening with your projects today:</p> */}
      {/* dow, sp, nasdaq table  */}
    </header>
  );
  
  const SplitBetweenSubHeader = () => (
    <div className={styles.splitBetweenSubheader}>
      <div className={styles.subheaderLeft}>
        <button className={styles.filterBtn}>Filter</button>
        <span className={styles.dateRange}>Jun 2, 2024 - Jun 8, 2024</span>
      </div>
      <div className={styles.subheaderRight}>
        <button className={styles.addViewBtn}>+ Add View</button>
      </div>
    </div>
  );
  
  const SmallBox = ({ title, sales, change, chart }) => (
    <div className={styles.smallBox}>
      <h2>{title}</h2>
      <p>Sales: {sales} </p>
      <span className={change >= 0 ? styles.positive : styles.negative}>
        {change >= 0 ? `+${change}%` : `${change}%`}
      </span>
      <div className={styles.chart}>
        {/* Chart goes here */}
        {chart}
      </div>
    </div>
  );
  
  const BiggerChart = ({ title, value, change }) => (
    <div className={styles.biggerChart}>
      <h2>{title}</h2>
      <p>Value: {value}</p>
      <span className={change >= 0 ? styles.positive : styles.negative}>
        {change >= 0 ? `+${change}%` : `${change}%`}
      </span>
      <div className="chart">
        {/* Bigger chart goes here */}
      </div>
    </div>
  );

    return (      

        <div suppressHydrationWarning={true} className={styles.app}>
          {/* sticky navbar with a button that lets you go to the keys part or charts part.  */}
          <Navbar />
          <main>
            <GoodMorningHeader />
            <StatsBar />

            <div className={styles.boxesContainer}>

              <AnalystEstimatesBarGraph analystData={estimateBucket[4]}/> 
              <AnalystEstimatesBarGraph analystData={estimateBucket[5]}/>
              <AnalystEstimatesBarGraph analystData={estimateBucket[8]}/> 

              {/* <AnalystEstimatesBarGraph analystData={estimateBucket[ANALYST_INDEX + 1] && estimateBucket[ANALYST_index + 1]}/>  */}

            {/* <button onClick={} id={styles.moreEstimatesBtn}> </button> */}
              

              {/* <SmallBox title="Acme Plus" sales="$24,780" change={49} chart={<div>Chart 1</div>} /> */}
              {/* <SmallBox title="Acme Advanced" sales="$17,489" change={-14} chart={<div>Chart 2</div>} /> */}
              {/* <SmallBox title="Acme Professional" sales="$9,962" change={29} chart={<div>Chart 3</div>} /> */}

            </div>
            <div className={styles.chartsContainer}>
              <Container id={styles.chartCheckboxContainer}>
              <DynamicLineChart/>
              <CandlestickChartCheckboxes/>
              </Container>
              <Container id={styles.rightSideCont}>
              {/* { CANDLESTICK_CHART_SHOW_FILTER === true && <p style={{ textAlign: 'center' }}> hey </p> } */}
                  {
                    CANDLESTICK_CHART_SHOW_KEYRATIOS === true
                    ? <KeyRatios/>
                    :
                    CANDLESTICK_CHART_SHOW_FILTER === true ?
                    <Calendar
                    onClickDay={(value:any, event:any) => clickDay(value, event)} 
                    />
                    :
                    <img id={styles.ADazure2} src={ADazure}/>
                  }
              {/* { CANDLESTICK_CHART_SHOW_FILTER === true && <p style={{ textAlign: 'center' }}> hey </p> } */}
              </Container>
            </div>
          </main>
          <footer className={styles.footer}>
            <p>yes</p>
            <p>go</p>
            <p>footer</p>
            <p>around</p>
          </footer>
        </div>
      
    )

  }    
