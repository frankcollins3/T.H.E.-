    // @reduxjs/toolkit global state management
    import {useSelector, useDispatch} from 'react-redux'
    import { RootState } from 'redux/store/rootReducer';
    import { 
    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
    SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC
    } from 'redux/stocks/stocksSlice';

    // components and styling.
    import Container from 'react-bootstrap/Container';
    import styles from "./CandlestickChartCheckboxes.module.scss"
    // import {TestHeader} from "styles/styledComponents/chartCheckbox"

    // utility
    import {useImage} from "Contexts/Img"
    import {useStocks} from "Contexts/StocksContext"

    export default function CandlestickChartCheckboxes() {
        return <RENDER/>
    }

    function RENDER() {

        const dispatch = useDispatch()
        const { resetOHLCV } = useStocks();
        const { singleCheckbox, multiCheckbox } = useImage();

        // if layout goes for multiple charts needs 
        const CANDLESTICK_CHART_VIEW_MULTI = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_VIEW_MULTI);
        
        const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O);
        const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H);
        const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L);
        const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C);
        const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V);

        const CANDLESTICK_CHART_LAST_SELECTED_OHLC = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_LAST_SELECTED_OHLC);

        const checkboxClick = (event:any) => {
            const target = event?.target;
            const id:string = event?.target?.id
            if (!id) {
                return;
            }

            if (CANDLESTICK_CHART_VIEW_MULTI === false) {
                resetOHLCV()
            }

            console.log('id', id)

            // if volume is on but we click another line besides volume than close volume
            if (CANDLESTICK_CHART_MULTI_SHOW_V === true) {
                if (id !== "chbx5") {
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V())
                }
            }

            if (id === "chbx1") {
                console.log("atleast were over here");
                // if (CANDLESTICK_CHART_MULTI_SHOW_O === false) {
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("o"))
                // }
            }
            else if (id === "chbx2") {
                // console.log("bx4 lets gooo!!!!!");
                // if (CANDLESTICK_CHART_MULTI_SHOW_H === false) {
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("h"))
                // }
            }
            else if (id === "chbx3") {
                // console.log("chbx5 of course");
                // if (CANDLESTICK_CHART_MULTI_SHOW_C === false) {
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("l"))
                // }
            // }
            }
            if (id === "chbx4") {
                // if (CANDLESTICK_CHART_MULTI_SHOW_L === false) {
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("c"))
                // }
            }
            if (id === "chbx5") {
                    resetOHLCV();
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("v"))
            }
        }
        
        const singleMultiViewToggle = () => {

            // think this is a race condition but technically not because the redux state always wins by this point and this triggers
            // problem: if you are on single view with a check clicked, now click to multi view it should just keep that check
            // at present: CHART_VIEW_MULTI === false but if you click this function resetOHLCV() invokes even though it shouldn't.
            //          single view with single checkbox go to click to multi and it resets which it sholudn't
            if (CANDLESTICK_CHART_VIEW_MULTI === true) {
                resetOHLCV()
            }

            if (CANDLESTICK_CHART_LAST_SELECTED_OHLC === "o") {
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O())
            }
            else if (CANDLESTICK_CHART_LAST_SELECTED_OHLC === "h") {
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H())
            }
            else if (CANDLESTICK_CHART_LAST_SELECTED_OHLC === "l") {
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L())
            }
            else if (CANDLESTICK_CHART_LAST_SELECTED_OHLC === "c") {
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C())
            }
            else if (CANDLESTICK_CHART_LAST_SELECTED_OHLC === "v") {
                resetOHLCV()
                dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V())
            }
            dispatch(TOGGLE_CANDLESTICK_CHART_VIEW_MULTI())
        }

        return (
            <Container id={styles.cont}>            


            <Container id={styles.subCont1}>
            <p className={styles.checkboxText}> View </p>
            <img onClick={singleMultiViewToggle} className={styles.singleMultiChartViewBtn} src={CANDLESTICK_CHART_VIEW_MULTI == true ? multiCheckbox : singleCheckbox}/>
            {/* <button onClick={singleMultiViewToggle}>  </button> */}
            </Container>

            {/* could just make same classes and have differentiated inline styling to handle {align-self}  */}
            <Container id={styles.subCont2}>   

            
            <input checked={CANDLESTICK_CHART_MULTI_SHOW_O === true && true} onChange={checkboxClick} id="chbx1"  className={styles.chbx1} type="checkbox"/>
            <label className={styles.label1} htmlFor="chbx1"></label>

            <input checked={CANDLESTICK_CHART_MULTI_SHOW_H === true && true} onChange={checkboxClick} id="chbx2" className={styles.chbx2} type="checkbox"/>
            <label className={styles.label2} htmlFor="chbx2"></label>

            <input checked={CANDLESTICK_CHART_MULTI_SHOW_L === true && true} onChange={checkboxClick} id="chbx3" className={styles.chbx3} type="checkbox"/>
            <label className={styles.label3} htmlFor="chbx3"></label>

            <input checked={CANDLESTICK_CHART_MULTI_SHOW_C === true && true} onChange={checkboxClick} id="chbx4" className={styles.chbx4} type="checkbox"/>
            <label className={styles.label4} htmlFor="chbx4"></label>

            <input checked={CANDLESTICK_CHART_MULTI_SHOW_V === true && true} onChange={checkboxClick} id="chbx5" className={styles.chbx5} type="checkbox"/>
            <label className={styles.label5} htmlFor="chbx5"></label>

            </Container>

            </Container>
        )
    }
