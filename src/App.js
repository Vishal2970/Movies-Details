import React from 'react';
import Home from './Components/Home';
import {Routes, Route} from "react-router-dom";
import SingleMovie from './Components/SingleMovie';
import Error from './Components/Error';
// import '\src\App.css'
import './App.css'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App
