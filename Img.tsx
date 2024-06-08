import React, { createContext, useContext, ReactNode, useState } from "react";

// type the state which will be read-only 'string'
type imgContextType = {
    singleCheckbox: string;
    multiCheckbox: string;
    hlocView: string;
    calendar: string;
    ADazure: string;
    appleLogo: string;
    keyIcon: string;
    commonwealth: string;

    bofaLogo: string;
    citibankLogo: string;
    goldmanSachsLogo: string;
    morganStanleyLogo: string;
    jpMorganLogo: string;
    moelisLogo: string;
    lazardLogo: string;
    evercoreLogo: string;
}

// define values which will remain static
const imgDefaults: imgContextType = {
    singleCheckbox: 'img/singleCheckbox.png',
    multiCheckbox: 'img/multiCheckbox.png',
    hlocView: 'img/hlocView.png',
    calendar: 'img/calendar.png',
    ADazure: 'img/Adazure.png',
    appleLogo: 'img/appleLogo.png',
    keyIcon: 'img/key.png',
    commonwealth: 'img/commonwealth.png',

    bofaLogo: 'img/bofaLogo.png',
    citibankLogo: 'img/citibankLogo.png',
    goldmanSachsLogo: 'img/goldmanSachsLogo.png',
    morganStanleyLogo: 'img/morganStanleyLogo.png',
    jpMorganLogo: 'img/jpMorganLogo.png',
    moelisLogo: 'img/moelisLogo.png',
    lazardLogo: 'img/lazardLogo.png',
    evercoreLogo: 'img/evercoreLogo.png',
};

// createContext
const ImgContext = createContext<imgContextType>(imgDefaults);


export function useImage() {
    return useContext(ImgContext);
}

type Props = {
    children: ReactNode;
};

export function ImgProvider({ children }: Props) {    
    const [singleCheckbox, setsingleCheckbox] = useState<string>(`img/singleCheckbox.png`);      
    const [multiCheckbox, setmultiCheckbox] = useState<string>(`img/multiCheckbox.png`);      
    const [hlocView, sethlocView] = useState<string>(`img/hlocView.png`);      
    const [calendar, setCalendar] = useState<string>(`img/calendar.png`);      
    const [ADazure, setAdazure] = useState<string>(`img/ADazure.png`);      
    const [appleLogo, setappleLogo] = useState<string>(`img/appleLogo.png`);      
    const [keyIcon, setkeyIcon] = useState<string>(`img/key.png`);      
    const [commonwealth, setcommonwealth] = useState<string>(`img/commonwealth.png`);  

    const [bofaLogo, setbofaLogo] = useState<string>(`img/bofaLogo.png`);      
    const [citibankLogo, setcitibankLogo] = useState<string>(`img/citibankLogo.png`);      
    const [goldmanSachsLogo, setgoldmanSachsLogo] = useState<string>(`img/goldmanSachsLogo.png`);      
    const [morganStanleyLogo, setmorganStanleyLogo] = useState<string>(`img/morganStanleyLogo.png`);      
    const [jpMorganLogo, setjpMorganLogo] = useState<string>(`img/jpMorganLogo.png`);      
    const [moelisLogo, setMoelisLogo] = useState<string>(`img/moelisLogo.png`);      
    const [lazardLogo, setlazardLogo] = useState<string>(`img/lazardLogo.png`);      
    const [evercoreLogo, setevercoreLogo] = useState<string>(`img/evercoreLogo.png`);      

    const value = {
        singleCheckbox,
        multiCheckbox,
        hlocView,
        calendar,
        ADazure,
        appleLogo,
        keyIcon,
        commonwealth,

        bofaLogo,
        citibankLogo,
        goldmanSachsLogo,
        morganStanleyLogo,
        jpMorganLogo,
        moelisLogo,
        lazardLogo,
        evercoreLogo        
    };
    // bofa, moelis, citibank, goldman sachs, morgan stanley, jpmorgan, lazard, evercore, moelis, 

    return (
        <>
            <ImgContext.Provider value={value}>
                {children}
            </ImgContext.Provider>
        </>
    );
}
