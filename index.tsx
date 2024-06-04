// will update with rest of react code later this is first example 

  import axios from 'axios';
  import React, { useEffect, useState } from 'react'
  // recharts needs client component which I'm using mac-mojave defaults to <client> opposed to newly @14+? <server-component/> defaults
  import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

  // @reduxjs/toolkit global state management
  import {useSelector, useDispatch} from 'react-redux'
  import { RootState } from 'redux/store/rootReducer';
  // import { SET_ALL_USERS, SET_ALL_USERNAMES, SET_ALL_EMAILS, SET_LOCALE } from 'redux/allOrAny/allOrAnySlice';
  
  import Container from 'react-bootstrap/Container';
  import IntroFooter from "components/Footer/IntroFooter"
  import LoginSignupForm from "components/LoginSignup/LoginSignupForm"


  // utils
  import {useImage} from "Contexts/Img"
  import { isParamValidLocale } from 'utility/utilityValues';
  import { UserArray } from 'Interface/InterfaceTypes';
                      
  export default function Main ( props:any ) {  

    const INTRO_ANIMATION_DONE = useSelector( (state:RootState) => state.intro.INTRO_ANIMATION_DONE)
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    
    // const data = [
    //   { value: 12, date: "2024-12-12"},
    //   { value: 25, date: "2024-12-11"},
    //   { value: 5, date: "2024-12-10"},
    // ]

    // const renderLineChart = (
    //   <LineChart id="chart" data={data} width={200}>
    //     <CartesianGrid />
    //     <XAxis dataKey="date" />
    //     <YAxis/>
    //     <Tooltip />
    //     <Line dataKey="value"/>
    //   </LineChart>        
    // )

    const data = [
      { y: 'amt', x: 'uv', uv: 400, pv: 2400, amt: 2400 },
      { y: 'amt', x: 'uv', uv: 200, pv: 1200, amt: 1200 },
      { y: 'amt', x: 'uv', uv: 250, pv: 800, amt: 1200 }
  ];

    const renderLineChart = (
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="amt" stroke="#cbcccc" />
        {/* <Line type="monotone" dataKey="amt" stroke="#dbcfdf" /> */}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );

    // const renderLineChart = (
    //   <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    //     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip />
    //   </LineChart>
    // );

    // 

    useEffect( () => {      

    }, [])

      return (
        
        <Container id="MainIntro">      
        {/* <Container id="introMain">       */}

        {/* <div className="ghost"> empty </div> */}

        {renderLineChart}

        {/* <ShowAppPhone/> */}

        {/* <AllOurs/> */}      

        {/* <IntroFooter/>  */}
        {/* { INTRO_ANIMATION_DONE === 4  && <IntroFooter/> } */}

        </Container>                   
      )
    }

    // const locales:string[] =  ['en', 'zh', 'hi', 'fr', 'ar', 'bn', 'ur', 'es', 'pt', 'ru', 'id', 'de']
    // const messages = (await import(`messages/${'zh'}/${'zh'}.json`)).default;
