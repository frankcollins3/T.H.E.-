// @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  import { 
    SET_KR_MKT_CAP, SET_KR_PE, SET_KR_PS, SET_KR_PB, SET_KR_PEG, SET_KR_CURRENT, SET_KR_DE, SET_KR_EPS,

    TOGGLE_KR_PE_IS_CLICKED, TOGGLE_KR_PS_IS_CLICKED, TOGGLE_KR_PB_IS_CLICKED, TOGGLE_KR_PEG_IS_CLICKED, TOGGLE_KR_CURRENT_IS_CLICKED,
    TOGGLE_KR_MKT_CAP_IS_CLICKED, TOGGLE_KR_DE_IS_CLICKED, TOGGLE_KR_EPS_IS_CLICKED, TOGGLE_KR_SHARES_IS_CLICKED
   } from 'redux/stocks/stocksSlice';

//  components and stylings
import Container from "react-bootstrap/Container"
import styles from "./KeyRatios.module.scss"

// utilities
import {useStocks} from "Contexts/StocksContext"
import { appleRatios } from 'utility/keyratiosData';
import { nothing } from 'utility/utilityValues';

export default function KeyRatios() {
    return <RENDER/>
}

const test = () => {
    console.log(appleRatios)
}

function RENDER() {

    const dispatch = useDispatch()
    const { textClick } = useStocks()

    const KR_SHARES = useSelector((state:RootState) => state.stocks.KR_SHARES);
    const KR_SHARES_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_SHARES_IS_CLICKED);
    const KR_MKT_CAP = useSelector((state:RootState) => state.stocks.KR_MKT_CAP);
    const KR_MKT_CAP_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_MKT_CAP_IS_CLICKED);
    const KR_PE = useSelector((state:RootState) => state.stocks.KR_PE);
    const KR_PE_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_PE_IS_CLICKED);
    const KR_PS = useSelector((state:RootState) => state.stocks.KR_PS);
    const KR_PS_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_PS_IS_CLICKED);
    const KR_PB = useSelector((state:RootState) => state.stocks.KR_PB);
    const KR_PB_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_PB_IS_CLICKED);
    const KR_PEG = useSelector((state:RootState) => state.stocks.KR_PEG);
    const KR_PEG_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_PEG_IS_CLICKED);
    const KR_CURRENT = useSelector((state:RootState) => state.stocks.KR_CURRENT);
    const KR_CURRENT_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_CURRENT_IS_CLICKED);
    const KR_DE = useSelector((state:RootState) => state.stocks.KR_DE);
    const KR_DE_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_DE_IS_CLICKED);
    const KR_EPS = useSelector((state:RootState) => state.stocks.KR_EPS);
    const KR_EPS_IS_CLICKED = useSelector((state:RootState) => state.stocks.KR_EPS_IS_CLICKED);




    return (
    <div className={styles.container}>
        <div className={styles.center}>
            {/* <p>hey</p> */}
        </div>
        <div className={styles.orbit}>
        {/* <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>MktCap</p>  */}

        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_MKT_CAP_IS_CLICKED === true ? KR_MKT_CAP : "MktCap"}</p> 
        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_SHARES_IS_CLICKED === true ? KR_SHARES : "Shares"}</p> 
        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_PE_IS_CLICKED === true ? KR_PE : "P/E"}</p> 
        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_PS_IS_CLICKED === true ? KR_PS : "P/S"}</p> 
        {/* <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>P/S</p>  */}
        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_PB_IS_CLICKED === true ? KR_PB : "P/B"}</p> 
        {/* <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>P/B</p>  */}
        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_PEG_IS_CLICKED === true ? KR_PEG : "PEG"}</p> 
        {/* <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>PEG</p>  */}
        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_CURRENT_IS_CLICKED === true ? KR_CURRENT : "Current"}</p> 
        {/* <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>Current</p> */}
        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_DE_IS_CLICKED === true ? KR_DE : "D/E"}</p> 
        {/* <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>D/E</p>  */}
        <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>{KR_EPS_IS_CLICKED === true ? KR_EPS : "EPS"}</p> 
        {/* <p onClick={(event:any) => textClick(event)} className={styles.ratioText}>EPS</p>  */}

        {/* <p className={styles.ratioText}>EPS</p> */}
  </div>
</div>
    )
}