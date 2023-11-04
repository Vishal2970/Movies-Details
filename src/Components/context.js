import React, { useContext } from "react";

const AppContext=React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value="Vishal">{children}</AppContext.Provider>
}


// for globally declairation
const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};