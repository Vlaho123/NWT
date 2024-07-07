import React from 'react';
import { BrowserRouter as Router, Switch,  Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import {Navbar, Footer} from './components';
import GlobalStyle from './globalStyles';

import Services from './pages/Services/Services';

import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
        
      
    </Router>
  );
}

export default App;
