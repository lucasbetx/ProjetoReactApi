import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPost from '../src/Components/endpoints/UserPost';
import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import LoginForm from './Components/Login/LoginForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="userpost" element={<UserPost />} />
          <Route path="loginform" element={<LoginForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
