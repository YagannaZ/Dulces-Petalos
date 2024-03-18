import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import Header from './Header.tsx';
import Detalle from './Detalle.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detalle" element={<Detalle/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
