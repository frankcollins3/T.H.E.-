// @reduxjs/toolkit global state management
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from 'redux/store/rootReducer';
import { 
  TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
  TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V
 } from 'redux/stocks/stocksSlice';

// components and styling.
import Container from 'react-bootstrap/Container';
import styles from "./CandlestickChartCheckboxes.module.scss"
// import {TestHeader} from "styles/styledComponents/chartCheckbox"

export default function CandlestickChartCheckboxes() {
    return <RENDER/>
}

function RENDER() {

    const dispatch = useDispatch()

    // if layout goes for multiple charts needs 
    const CANDLESTICK_CHART_VIEW_MULTI = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_VIEW_MULTI);
    const CANDLESTICK_CHART_SINGLE_SELECTION = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SINGLE_SELECTION);
    const CANDLESTICK_CHART_MULTI_SELECTION = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SELECTION);

    const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O);
    const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H);
    const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L);
    const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C);

    const checkboxClick = (target:any) => {
        let id:string = target?.id
        console.log('id', id)
        if (id === "chbx3") {
            dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O())
        }
    }

    return (
        <Container id={styles.cont}>            

        <Container id={styles.subCont1}>
        <button className={styles.singleMultiChartViewBtn}>single</button>        

        </Container>
        {/* could just make same classes and have differentiated inline styling to handle {align-self}  */}
        <Container id={styles.subCont2}>   

        
        <input onChange={checkboxClick} id="chbx3"  className={styles.chbx} type="checkbox"/>
        <label id={styles.ohlc1} className={styles.label} htmlFor="chbx3"></label>

        <input id="chbx4" className={styles.chbx2} type="checkbox"/>
        <label  className={styles.label2} htmlFor="chbx4"></label>

        <input id="chbx5" className={styles.chbx3} type="checkbox"/>
        <label className={styles.label3} htmlFor="chbx5"></label>

        <input id="chbx6" className={styles.chbx4} type="checkbox"/>
        <label className={styles.label4} htmlFor="chbx6"></label>
        </Container>

        </Container>
    )
}
