import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Layout } from 'antd'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<div>Start page</div>} />
          <Route path='/test' element={<div>test</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
