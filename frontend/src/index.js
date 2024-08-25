import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/Home';
import Produtos from './Pages/Produtos';
import NovosProdutos from './Pages/NovosProdutos'
import reportWebVitals from './reportWebVitals';
import {Routes, BrowserRouter, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/produtos' element={<Produtos/>}/>
            <Route path='/novosprodutos' element={<NovosProdutos/>}/>


        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
