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
  CLEAR_CANDLESTICK_CHART_FILTER
 } from 'redux/stocks/stocksSlice';

//  containers and styling
import Navbar from "components/Navbar"
import Container from 'react-bootstrap/Container';
import DynamicLineChart from "components/DynamicLineChart"
import KeyRatios from "components/KeyRatios"
import AnalystEstimatesBarGraph from "components/AnalystEstimatesBarGraph"
import Calendar from "react-calendar"
import CandlestickChartCheckboxes from "components/CandlestickChartCheckboxes";
import styles from "styles/Intro.module.scss"

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
  const { ADazure, ADventure, check } = useImage();

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
  const CANDLESTICK_CHART_SHOW_KEYRATIOS = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_KEYRATIOS);
  const CANDLESTICK_CHART_SHOW_ANALYST_INFO = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_ANALYST_INFO);

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
  
  const LeftToolBar = () => (
    <div className={styles.leftToolbar}>
      <p> h</p>
      <p> h</p>
      <p> h</p>
      <p> h</p>
      <p> h</p>
    </div>
  );
  
  const GoodMorningHeader = () => (
    <header className={styles.goodMorningHeader}>
      <h1>Good afternoon, Acme Inc. 👋</h1>
      <p>Here is what’s happening with your projects today:</p>
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
      <p>Sales: {sales}</p>
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
            <SplitBetweenSubHeader />
            <div className={styles.boxesContainer}>
              <AnalystEstimatesBarGraph analystData={estimateBucket[0]}/> 
              {/* <SmallBox title="Acme Plus" sales="$24,780" change={49} chart={<div>Chart 1</div>} /> */}
              <SmallBox title="Acme Advanced" sales="$17,489" change={-14} chart={<div>Chart 2</div>} />
              <SmallBox title="Acme Professional" sales="$9,962" change={29} chart={<div>Chart 3</div>} />
            </div>
            <div className={styles.chartsContainer}>
              <DynamicLineChart/>
              <BiggerChart title="Real Time Value" value="$52.23" change={4} />
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
