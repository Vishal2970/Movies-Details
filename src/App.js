import React from 'react';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleMovie from './Components/SingleMovie';
import Error from './Components/Error';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
