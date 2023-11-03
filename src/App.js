import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import AddProduct from './components/AddProduct';
import { ProductProvider } from './context/ProductContext';
import { UserProvider } from './context/UserContext';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="signup" element={<SignUp />} />
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="contact" element={<Contact />} />
              <Route path="products/:id" element={<SingleProduct />} />
            </Route>
          </Routes>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
