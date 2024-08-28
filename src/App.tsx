import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ToggleMenuBtn from './admin/components/MenuBtn';
import ToggleMenu from './admin/components/ToggleMenu';
import Header from './admin/components/Header';
import Products from './admin/Products';
import Main from './main/Main';
import ToggleThemeBtn from './admin/components/ToggleThemeBtn';

function App() {
  return (
    <div className="App">
      <ToggleMenuBtn />
      <Header />
      <ToggleMenu />
      <ToggleThemeBtn />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/admin/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
