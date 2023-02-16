import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Layout } from 'antd'
import Navbar from './Components/Navbar/Navbar';
import { routes } from './config';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path={routes['startPage']} element={<div>Start page</div>} />
          <Route path={routes['login']} element={<div>Sign In page</div>} />          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
