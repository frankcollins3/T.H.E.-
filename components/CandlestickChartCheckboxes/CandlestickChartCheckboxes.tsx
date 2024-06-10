    // @reduxjs/toolkit global state management
    import {useSelector, useDispatch} from 'react-redux'
    import { RootState } from 'redux/store/rootReducer';
    import { 
    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
    SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC,
    SET_CANDLESTICK_CHART_CURR_DATA,
    TOGGLE_CANDLESTICK_CHART_SHOW_FILTER, TOGGLE_CANDLESTICK_CHART_SHOW_ANALYST_INFO, TOGGLE_CANDLESTICK_CHART_SHOW_KEYRATIOS
    } from 'redux/stocks/stocksSlice';

    // components and styling.
    import Container from 'react-bootstrap/Container';
    import styles from "./CandlestickChartCheckboxes.module.scss"
    // import {TestHeader} from "styles/styledComponents/chartCheckbox"


    // utility
    import { splitDateSetObject } from 'utility/utilityValues';
    import { dayMonthYearINTERFACE } from 'Interface/InterfaceTypes';
    import {useImage} from "Contexts/Img"
    import {useStocks} from "Contexts/StocksContext"
    import season from "utility/candlestickData"

    export default function CandlestickChartCheckboxes() {
        return <RENDER/>
    }

    function RENDER() {

        const dispatch = useDispatch()
        const { resetOHLCV, setOHLCsetLastSelectedOHLC, filterCandlestickData, checkboxCheckIdToggle } = useStocks();
        const { singleCheckbox, multiCheckbox, calendar, keyIcon, commonwealth } = useImage();

        // if layout goes for multiple charts needs 
        const CANDLESTICK_CHART_VIEW_MULTI = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_VIEW_MULTI);
        
        const CANDLESTICK_CHART_MULTI_SHOW_O = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_O);
        const CANDLESTICK_CHART_MULTI_SHOW_H = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_H);
        const CANDLESTICK_CHART_MULTI_SHOW_L = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_L);
        const CANDLESTICK_CHART_MULTI_SHOW_C = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_C);
        const CANDLESTICK_CHART_MULTI_SHOW_V = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_MULTI_SHOW_V);

        const CANDLESTICK_CHART_LAST_SELECTED_OHLC = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_LAST_SELECTED_OHLC);
        const CANDLESTICK_CHART_CURR_DATA = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_CURR_DATA);

        const CANDLESTICK_CHART_SHOW_FILTER = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_FILTER);
        const CANDLESTICK_CHART_SHOW_KEYRATIOS = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_KEYRATIOS);
        const CANDLESTICK_CHART_SHOW_ANALYST_INFO = useSelector((state:RootState) => state.stocks.CANDLESTICK_CHART_SHOW_ANALYST_INFO);

        const singleViewCheckboxClick = (event:any) => {
            const target = event?.target;
            const id:string = target?.id;
            console.log('hey how are you');

            if (CANDLESTICK_CHART_VIEW_MULTI === false || id !== "chbx5" && CANDLESTICK_CHART_MULTI_SHOW_V === true) {
                resetOHLCV();
            }

            checkboxCheckIdToggle(id)
            // if (id === "chbx1") {
            //     console.log("atleast were over here");
            //         // setOHLCsetLastSelectedOHLC('o')
            //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O())
            //         dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("o"))
            //     // }
            // }
            // else if (id === "chbx2") {
            //     // setOHLCsetLastSelectedOHLC('h')
            //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H())
            //         dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("h"))
            // }
            // else if (id === "chbx3") {
            //     // setOHLCsetLastSelectedOHLC('l')
            //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L())
            //         dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("l"))                
            // }
            // if (id === "chbx4") {
            //     // setOHLCsetLastSelectedOHLC('c')
            //         dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C())
            //         dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("c"))
            // }
                if (id === "chbx5") {
                    resetOHLCV()                    
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("v"))
            }
        }

        const multiViewCheckboxClick = (event:any) => {
            const target = event?.target;
            const id:string = target?.id
            // checkboxCheckIdToggle()

            if (id === "chbx1") {
                console.log("atleast were over here");
                    // setOHLCsetLastSelectedOHLC('o')
                    if (CANDLESTICK_CHART_MULTI_SHOW_V === true) { dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V()) }
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("o"))
                    // }
            }
            else if (id === "chbx2") {
                    // setOHLCsetLastSelectedOHLC('h')
                    if (CANDLESTICK_CHART_MULTI_SHOW_V === true) { dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V()) }
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("h"))
            }
            else if (id === "chbx3") {
                    // setOHLCsetLastSelectedOHLC('l')
                    if (CANDLESTICK_CHART_MULTI_SHOW_V === true) { dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V()) }
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("l"))                
            }
            if (id === "chbx4") {
                    // setOHLCsetLastSelectedOHLC('c')
                    if (CANDLESTICK_CHART_MULTI_SHOW_V === true) { dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V()) }
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C())
                    dispatch(SET_CANDLESTICK_CHART_LAST_SELECTED_OHLC("c"))
            }
            if (id === "chbx5") {
                    resetOHLCV()
                    dispatch(TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V())
            }   

        }

        
        
        const singleMultiViewToggle = () => {
            // think this is a race condition but technically not because the redux state always wins by this point and this triggers
            // problem: if you are on single view with a check clicked, now click to multi view it should just keep that check
            // at present: CHART_VIEW_MULTI === false but if you click this function resetOHLCV() invokes even though it shouldn't.
            //          single view with single checkbox go to click to multi and it resets which it sholudn't
            if (CANDLESTICK_CHART_VIEW_MULTI === true) {
                // resetOHLCV()
            }  else {

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
            }
            dispatch(TOGGLE_CANDLESTICK_CHART_VIEW_MULTI())
        }

        const calendarClick = () => {
            if (CANDLESTICK_CHART_SHOW_KEYRATIOS === true) dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_KEYRATIOS())
            if (CANDLESTICK_CHART_SHOW_ANALYST_INFO === true) dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_ANALYST_INFO())
            dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_FILTER())
        }

        const keyRatioClick = () => {
            // one at a time to show:        calendar, keyratios, or analyst_info so will need reset function.
            if (CANDLESTICK_CHART_SHOW_FILTER === true) dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_FILTER())
            if (CANDLESTICK_CHART_SHOW_ANALYST_INFO === true) dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_ANALYST_INFO())

            dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_KEYRATIOS())
        }

        const commonwealthClick = () => {
            if (CANDLESTICK_CHART_SHOW_FILTER === true) dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_FILTER())
            if (CANDLESTICK_CHART_SHOW_KEYRATIOS === true) dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_KEYRATIOS())
            dispatch(TOGGLE_CANDLESTICK_CHART_SHOW_ANALYST_INFO())
        }

        return (
            <Container id={styles.cont}>

            <Container id={styles.subCont1}>
            <p className={styles.checkboxText}> View </p>
            <img onClick={singleMultiViewToggle} className={styles.singleMultiChartViewBtn} src={CANDLESTICK_CHART_VIEW_MULTI == true ? multiCheckbox : singleCheckbox} />
            {/* <button onClick={singleMultiViewToggle}>  </button>  */}

            </Container>

            {/* could just make same classes and have differentiated inline styling to handle {align-self}  */}
            <Container id={styles.subCont2}>   

            
            {/* <input checked={CANDLESTICK_CHART_MULTI_SHOW_O === true && true} onChange={() => setOHLCsetLastSelectedOHLC('o')} id="chbx1"  className={styles.chbx1} type="checkbox"/> */}
            <input checked={CANDLESTICK_CHART_MULTI_SHOW_O === true && true} onChange={ CANDLESTICK_CHART_VIEW_MULTI === false ? singleViewCheckboxClick : multiViewCheckboxClick } id="chbx1"  className={styles.chbx1} type="checkbox"/>
            <label className={styles.label1} htmlFor="chbx1"></label>

            <input checked={CANDLESTICK_CHART_MULTI_SHOW_H === true && true} onChange={CANDLESTICK_CHART_VIEW_MULTI === false ? singleViewCheckboxClick : multiViewCheckboxClick} id="chbx2" className={styles.chbx2} type="checkbox"/>
            <label className={styles.label2} htmlFor="chbx2"></label>

            <input checked={CANDLESTICK_CHART_MULTI_SHOW_L === true && true} onChange={CANDLESTICK_CHART_VIEW_MULTI === false ? singleViewCheckboxClick : multiViewCheckboxClick} id="chbx3" className={styles.chbx3} type="checkbox"/>
            <label className={styles.label3} htmlFor="chbx3"></label>

            <input checked={CANDLESTICK_CHART_MULTI_SHOW_C === true && true} onChange={CANDLESTICK_CHART_VIEW_MULTI === false ? singleViewCheckboxClick : multiViewCheckboxClick} id="chbx4" className={styles.chbx4} type="checkbox"/>
            <label className={styles.label4} htmlFor="chbx4"></label>

            <input checked={CANDLESTICK_CHART_MULTI_SHOW_V === true && true} onChange={CANDLESTICK_CHART_VIEW_MULTI === false ? singleViewCheckboxClick : multiViewCheckboxClick} id="chbx5" className={styles.chbx5} type="checkbox"/>
            <label className={styles.label5} htmlFor="chbx5"></label>

            {/* <button onClick={() => filterCandlestickData('5-1-2024', '6-2-2024')}> date </button> */}
            {/* <button onClick={filterCandlestickData}> date </button> */}
            {/* <button onClick={test}> test </button> */}
            <img onClick={calendarClick} src={calendar} className={styles.otherIcons}/>
            <img onClick={keyRatioClick} src={keyIcon} className={styles.otherIcons}/>
            {/* <img onClick={commonwealthClick} src={commonwealth} className={styles.otherIcons}/> */}

            </Container>

            </Container>
        )
    }