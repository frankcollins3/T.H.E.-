import React, { createContext, useContext, ReactNode, useState } from "react";

// type the state which will be read-only 'string'
type imgContextType = {
    singleCheckbox: string;
    multiCheckbox: string;
}

// define values which will remain static
const imgDefaults: imgContextType = {
    singleCheckbox: 'img/singleCheckbox.png',
    multiCheckbox: 'img/multiCheckbox.png',
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
    const [singleCheckbox, setsingleCheckbox] = useState<string>(`dojo-img/singleCheckbox.png`);      
    const [multiCheckbox, setmultiCheckbox] = useState<string>(`dojo-img/multiCheckbox.png`);      

    const value = {
        singleCheckbox,
        multiCheckbox
    };

    return (
        <>
            <ImgContext.Provider value={value}>
                {children}
            </ImgContext.Provider>
        </>
    );
}
