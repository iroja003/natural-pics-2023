import React from 'react';
// Routes , Route
import {Routes, Route} from 'react-router-dom';
// react- boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Menu from './Components/Menu';
import Footer from './Components/Footer';
// Pages
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Notfound from './Pages/Notfound'

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/Favorites' element= {<Favorites />}/>
          <Route path='*' element= {<Notfound />}/>
      </Routes>    
      <Footer />
    </>
  );
}

//
export default App
