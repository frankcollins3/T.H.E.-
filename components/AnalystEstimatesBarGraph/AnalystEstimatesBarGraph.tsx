import { BarChart, CartesianGrid, YAxis, XAxis, Bar } from 'recharts';
import {useEffect, useState} from "react";

  // @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';

  import {     
    SET_ANALYST_BARCHART_DATA, SET_ANALYST_CURRENT_COMPANY, SET_ANALYST_CURRENT_INDEX, SET_ANALYST_PAGINATION_INDEX,
   } from 'redux/stocks/stocksSlice';



// components and styling
import { Carousel } from 'react-responsive-carousel';
import {
  Card, Container
  //  Carousel
 } from "react-bootstrap"
import styles from "./AnalystEstimatesBarGraph.module.scss"

// utility
import {useStocks} from "Contexts/StocksContext"
import { randomValueFromArray } from "utility/utilityValues"
import {useImage} from "Contexts/Img"
import estimateBucket from "utility/analystData"

export default function AnalystEstimatesBarGraph(props:any) {
    const analystData = props.analystData;
    return <RENDER suppressHydrationWarning={true} analystData={analystData}/>
}

// have to pack:                currentAmount, analystAmount into array

function RENDER(props:any) {

    // local state for dynamic component because global state will affect every single one which we want them isolated. // can manage globally isolated state with a:       barChartDataBin:[] = [] and select indexes corresponding to the element being clicked or engaged.
    // this will also make Math.random() easier because logic won't be cacheing or w.e it does to often retrieve same random value.

    const { setCompanyLogoFunc } = useStocks()
    const [barCharData, setBarCharData] = useState()
    const [showRationale, setShowRationale] = useState(false);
    const [companyLogo, setCompanyLogo] = useState('');

    const analystData:any = props?.analystData;
    const estimate:string|number = analystData?.estimate;
    const relativity = analystData?.relativity;
    const company = relativity?.company
    // const currentPPS = relativity?.
    let percentageVariance: any = Math.round((((relativity?.current - analystData?.estimate) / analystData?.estimate) * 100) * 10) / 10;


    const isEstimateGreaterThanCurrent = analystData?.estimate > analystData?.relativity.current 
    const isCurrentGreaterThanEstimate = analystData?.estimate > analystData?.relativity.current
    
    const dispatch = useDispatch()
  const { hlocView, appleLogo , bofaLogo, citibankLogo, goldmanSachsLogo, morganStanleyLogo, jpMorganLogo, moelisLogo, lazardLogo, evercoreLogo, estimateInfoIcon, star } = useImage()
    
    const imageArray:string[] = [bofaLogo, citibankLogo, goldmanSachsLogo, morganStanleyLogo, jpMorganLogo, moelisLogo, lazardLogo, evercoreLogo ];

    const ANALYST_CURRENT_INDEX = useSelector((state:RootState) => state.stocks.ANALYST_CURRENT_INDEX)
    const ANALYST_CURRENT_COMPANY = useSelector((state:RootState) => state.stocks.ANALYST_CURRENT_COMPANY)
    const ANALYST_BARCHART_DATA = useSelector((state:RootState) => state.stocks.ANALYST_BARCHART_DATA)
    const COMPANY_ICON_BIN = useSelector((state:RootState) => state.stocks.COMPANY_ICON_BIN)
    const ANALYST_PAGINATION_INDEX = useSelector((state:RootState) => state.stocks.ANALYST_PAGINATION_INDEX)

    useEffect( () => {
      console.log("company", company)
      imageArray.forEach((mapitem) => {
        console.log('mapitem', mapitem)

        // if (company === 'Bank of America' && mapitem === '/img/bofaLogo.png') {
        //   setCompanyLogo(mapitem) 
        // }
        
        // setCompanyLogoFunc(company, mapitem, setCompanyLogo)
        // if (company === 'Bank of America' && mapitem === '/img/bofaLogo.png') setCompanyLogo(mapitem) 
        // if (company === 'Citibank' && mapitem === 'img/citibankLogo.png') setCompanyLogo(mapitem) 
        // if (company === 'Goldman Sachs' && mapitem === 'img/goldmanSachsLogo.png') setCompanyLogo(mapitem) 
        // if (company === 'Morgan Stanley' && mapitem === 'img/morganStanleyLogo.png') setCompanyLogo(mapitem) 
        // if (company === 'JP Morgan' && mapitem === 'img/chaseLogo.png') setCompanyLogo(mapitem) 
        // if (company === 'Moelis' && mapitem === 'img/moelisLogo.png') setCompanyLogo(mapitem) 
        // if (company === 'Lazard' && mapitem === 'img/lazardLogo.png') setCompanyLogo(mapitem) 
        // if (company === 'Evercore' && mapitem === 'img/evercoreLogo.png') setCompanyLogo(mapitem)         
      })
    }, [])


    const test = () => {
        console.log('analystData', analystData)
        console.log('estimate', estimate)
        console.log('relativity', relativity)
    }



    const estimateInfoClick = () => {
      setShowRationale(!showRationale)
      // dispatch(SET_ANALYST_PAGINATION_INDEX(ANALYST_PAGINATION_INDEX + 1))
    }

    return (

      <Card onClick={test}>
      <Card.Body>

        <div className={styles.cardTitleRow}>
        <Card.Title id={styles.analystHeaderText}> {analystData?.relativity?.company} </Card.Title>
        <img onClick={estimateInfoClick} id={styles.estimateInfoIcon} src={estimateInfoIcon}/>

        </div>

        {
          showRationale
          ?        
          <Card.Title id={styles.analystRationaleText}> {analystData?.rationale} </Card.Title>
          :
          <div className="card" suppressHydrationWarning={true} id={styles.barGraphCont}>                
          <div id={styles.cardImgTop} className="card-img-top">
                  <BarChart 
                  barGap={20} width={250} height={250} data={[analystData]}>
                  <CartesianGrid strokeDasharray="20 20" />            
                  <YAxis/>            
                  <Bar dataKey="relativity.current" fill={ isEstimateGreaterThanCurrent ? "#ed1c24" : "forestgreen" } />
                  <Bar dataKey="estimate" fill={isCurrentGreaterThanEstimate ? "forestgreen" : "#ed1c24"} />                    
                  </BarChart>      
                  </div>                            
          </div>
        }

        {
          !showRationale &&
      <div className={styles.cardTitleRow}>
      <img id={styles.estimateInfoIcon} src={appleLogo}/>

      <img id={styles.estimateInfoIcon} 
          src={
            company === "Bank of America" ? bofaLogo :
            company === "Citibank" ? citibankLogo :
            company === "Goldman Sachs" ? goldmanSachsLogo :
            company === "Morgan Stanley" ? morganStanleyLogo :
            company === "JP Morgan" ? jpMorganLogo :
            company === "Moelis" ? moelisLogo :
            company === "Lazard" ? lazardLogo :
            company === "Evercore" ? evercoreLogo : hlocView            
          }
          />

        <Card.Title        
        style={{ color: isEstimateGreaterThanCurrent ? "#ed1c24" : "forestgreen" }}
         id={styles.analystHeaderText}> {percentageVariance} 
         </Card.Title> 

         {/* lol < 10 only and the negative numbers pop up.  */}
{/* realizing while typing this that this isnt' the way to determine accuracy but obviously fair bit past time just showing proof of idea. */}
         { percentageVariance < 10 && percentageVariance > 0 && <img id={styles.estimateInfoIcon} src={star}/> }               
      </div>
        }
      </Card.Body>
      </Card>            


    )
}

{/*         git issue #13       copy-paste this code if hydration error pops up. this code once worked then caused hydratino errors. their <LineChart/> never caused one such error. */}
        {/* <BarChart width={730} height={250} data={[analystData]}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />        
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart> */}

            {/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}