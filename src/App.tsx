import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ToggleMenuBtn from './admin/components/MenuBtn';
import ToggleMenu from './admin/components/ToggleMenu';
import Header from './admin/components/Header';
import Products from './admin/Products';
import Main from './main/Main';
import ToggleThemeBtn from './admin/components/ToggleThemeBtn';
import ProductsCreate from './admin/ProductsCreate';
import ProductsEdit from './admin/ProductsEdit';

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
          <Route path='/admin/products/create' element={<ProductsCreate />} />
          <Route path='/admin/products/:id/edit' element={<ProductsEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
