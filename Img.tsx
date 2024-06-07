import React, { createContext, useContext, ReactNode, useState } from "react";

// type the state which will be read-only 'string'
type imgContextType = {
    singleCheckbox: string;
    multiCheckbox: string;
    hlocView: string;
    calendar: string;
    ADazure: string;
}

// define values which will remain static
const imgDefaults: imgContextType = {
    singleCheckbox: 'img/singleCheckbox.png',
    multiCheckbox: 'img/multiCheckbox.png',
    hlocView: 'img/hlocView.png',
    calendar: 'img/calendar.png',
    ADazure: 'img/Adazure.png',
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

    const value = {
        singleCheckbox,
        multiCheckbox,
        hlocView,
        calendar,
        ADazure
    };

    return (
        <>
            <ImgContext.Provider value={value}>
                {children}
            </ImgContext.Provider>
        </>
    );
}
