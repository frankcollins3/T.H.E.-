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

        <input id="chbx1" className={styles.chbx} type="checkbox"/>
        <label className={styles.label} htmlFor="chbx1"></label>

        {/* <input id="chbx2" className={styles.chbx} type="checkbox"/>
        <label className={styles.label} htmlFor="chbx2"></label> */}
        
        {/* <Container className={styles.innerSubCont}>
        <pre className={styles.checkboxText}> ^ </pre>     
        <input type="checkbox"/>       
        </Container>
        
        <Container className={styles.innerSubCont}>
        <pre className={styles.checkboxText}> ^ </pre>     
        <input type="checkbox"/>       
    </Container> */}

        </Container>
        {/* could just make same classes and have differentiated inline styling to handle {align-self}  */}
        <Container id={styles.subCont2}>   

        <input id="chbx3"  className={styles.chbx} type="checkbox"/>
        <label className={styles.label} htmlFor="chbx3"></label>

        <input id="chbx4" className={styles.chbx} type="checkbox"/>
        <label  className={styles.label} htmlFor="chbx4"></label>

        <input id="chbx5" className={styles.chbx} type="checkbox"/>
        <label className={styles.label} htmlFor="chbx5"></label>

        <input id="chbx5" className={styles.chbx} type="checkbox"/>
        <label className={styles.label} htmlFor="chbx5"></label>

        {/* <input type="checkbox"/> */}

        {/* <Container className={styles.innerSubCont}>
        <pre className={styles.checkboxText}> O: </pre>     
        <input type="checkbox"/>       
        </Container>

        <Container className={styles.innerSubCont}>
        <pre className={styles.checkboxText}> H: </pre>     
        <input type="checkbox"/>       
        </Container>

        <Container className={styles.innerSubCont}>            
        <pre className={styles.checkboxText}> L: </pre>     
        <input type="checkbox"/>       
        </Container>

        
        <Container className={styles.innerSubCont}>
        <pre > C: </pre>     
        <input type="checkbox"/>       
        </Container> */}


        </Container>

        </Container>
    )
}
