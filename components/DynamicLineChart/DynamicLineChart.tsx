import { Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {useEffect} from "react";

  // @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  import { 
    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
    SET_CANDLESTICK_CHART_CURR_DATA
   } from 'redux/stocks/stocksSlice';

// utilities
import season from "utility/candlestickData"    

export default function DynamicLineChart() {
    return <RENDER/>
}

function RENDER() {
    const dispatch = useDispatch()

    useEffect( () => {      
      // set all data as state for calendar first then allow calendar to filter, limited by date.
        dispatch(SET_CANDLESTICK_CHART_CURR_DATA(season))
        // if (CANDLESTICK_CHART_CURR_DATA[1] === null || CANDLESTICK_CHART_CURR_DATA[1] === undefined) {
      // }      
      }, [])

    const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O)
    const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H)
    const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L)
    const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C)
    const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector( (state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V)

    const CANDLESTICK_CHART_CURR_DATA = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_CURR_DATA);
    // want multiple graphs? CANDLESTICK_CHART_CURR_DATA_BIN -> change state by setting all in bin to false then set index to true
    const CANDLESTICK_CHART_CURR_DATA_BIN = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_CURR_DATA_BIN);

    const renderLineChart = (
                                          // styling props for multiple graphs
        <LineChart 
        // CANDLESTICK_CHART_COMPANY_LOGO --> set className="" based on COMPANY_LOGO state. will change backgrounds of company state (if dynamic)
        id="candlestickChart"

        // letting the user drag how big they'd want the char to be and if you could put that in the user settings but no time. 
        width={600} height={600} data={CANDLESTICK_CHART_CURR_DATA}
        // <LineChart id="candlestickChart" width={730} height={430} data={CANDLESTICK_CHART_CURR_DATA}
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

    return (
        <>
        {renderLineChart}
        </>
    )
}

