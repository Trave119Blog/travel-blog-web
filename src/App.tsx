import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'     element = {<div>Start page</div>}/> 
        <Route path='/test' element = {<div>test</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
