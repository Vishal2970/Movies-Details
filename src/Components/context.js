import React, { useContext, useEffect } from "react";


const API_URL='http://www.omdbapi.com/?apikey=5905a8d4&s=love';

const AppContext=React.createContext();

const AppProvider = ({children}) => {

    const getMovie = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

        } catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getMovie(API_URL);
    },[]);


    return <AppContext.Provider value="Vishal">{children}</AppContext.Provider>
}


// for globally declairation
const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};