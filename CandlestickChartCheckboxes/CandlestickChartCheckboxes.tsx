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

export default function CandlestickChartCheckboxes() {
    return <RENDER/>
}

function RENDER() {
    return (
        <Container id={styles.cont}>            

        <Container id={styles.subCont1}>
        <pre className={styles.checkboxText}> ^ </pre>     
        <input type="checkbox"/>       
        <pre className={styles.checkboxText}> ^ </pre>     
        <input type="checkbox"/>       

        </Container>
{/* could just make same classes and have differentiated inline styling to handle {align-self} but for readability different classes */}
        <Container id={styles.subCont2}>   
        
        <Container className={styles.innerSubCont}>
        <pre className={styles.checkboxText}> O: </pre>     
        <input type="checkbox"/>       
        </Container>
        <pre className={styles.checkboxText}> H: </pre>     
        <input type="checkbox"/>       
        <pre className={styles.checkboxText}> L: </pre>     
        <input type="checkbox"/>       
        <pre className={styles.checkboxText}> C: </pre>     
        <input type="checkbox"/>       
        </Container>

        </Container>
    )
}