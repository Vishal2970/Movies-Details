import React, { useContext, useEffect , useState } from "react";


// const API_URL='http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=love';

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=love`;


const AppContext=React.createContext();

const AppProvider = ({children}) => {

    const [isLoading, setIsLoading]=useState(true);
    const [isError, setIsError] = useState({show:"false", msg:""});
    const [movie, setMovie]=useState([])

    const getMovie = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
            }else{
                setIsError({
                    show:true,
                    msg:data.error
                })
            }

        } catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getMovie(API_URL);
    },[]);


    return <AppContext.Provider value={{isLoading,isError,movie}}>{children}</AppContext.Provider>
}


// for globally declairation
const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};