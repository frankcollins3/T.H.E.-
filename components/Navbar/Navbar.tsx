import $ from 'jquery'

// @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  import { 
    TOGGLE_CANDLESTICK_CHART_VIEW_MULTI,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_O, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_H, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_C, TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_L,
    TOGGLE_CANDLESTICK_CHART_MULTI_SHOW_V,
    SET_CANDLESTICK_CHART_CURR_DATA
   } from 'redux/stocks/stocksSlice';

//    components and styling
   import {useImage} from "Contexts/Img"
   import Container from "react-bootstrap/Container"
   import styles from "./Navbar.module.scss"

export default function Navbar() {
    return <RENDER/>
}

function RENDER() {
    const { check } = useImage()

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
        
    // click on the navbar and the rouke follows...
    return (
        <Container className={styles.navbar}>   
            <img id={styles.checkLogo} className={styles.navImg} src={check}/>
            {/* what do you check for today? ${username} */}
            {/* can go grok style and say:              what do you check for today mate? */}
            <input id={styles.navbarInput} type="text"/>
            <Container className={styles.rightSideCont}>
                <li onClick={clickNavLi} id={styles.tipsText}> Services </li>
                <Container className={styles.navbarTextColumns}>
                <p onClick={clickNavLi} className="ghost"> yerr </p>
                <li onClick={clickNavLi} id={styles.tipsText}> puppeteer </li>
                <p style={{ fontSize: '12px' }}> rouke-roof </p>
                </Container>
                <li onClick={clickNavLi} id={styles.tipsText}> commonwealth </li>
                <li onClick={clickNavLi} id={styles.tipsText}> Home </li>
                <li style={{ fontWeight: 'bolder' }} onClick={clickNavLi} id={styles.tipsText}> blk-wh-SQ.png </li>
            </Container>
        </Container>
    )
}