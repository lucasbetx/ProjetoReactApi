import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UseStorage } from './UseContext';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UseStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="user/*" element={<User />} />
          </Routes>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
