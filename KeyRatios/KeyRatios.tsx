// @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  import { 
   } from 'redux/stocks/stocksSlice';

//  components and stylings
import Container from "react-bootstrap/Container"
import styles from "./KeyRatios.module.scss"

export default function KeyRatios() {
    return <RENDER/>
}

function RENDER() {
    return (
    <div className={styles.container}>
        <div className={styles.center}>
            {/* current state */}
            <p>hey</p>
        </div>
        <div className={styles.orbit}>
        <p className={styles.hi}>MktCap</p>
        <p className={styles.hi}>outstanding</p>
        <p className={styles.hi}>PE</p>
        <p className={styles.hi}>PS</p>
        <p className={styles.hi}>PB</p>
        <p className={styles.hi}>PEG</p>
        <p className={styles.hi}>current</p>
        <p className={styles.hi}>debt-equity</p>
        <p className={styles.hi}>EPS</p>
  </div>
</div>
    )
}