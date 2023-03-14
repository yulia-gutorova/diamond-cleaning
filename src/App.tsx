import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/logInPage/LogInPage';
import NavigationMenu from './components/homePage/NavigationMenu';
import CustomerAccount from './components/memberAccount/CustomersAccount';
import CleanerAccount from './components/memberAccount/CleanerAccount';
import Footer from './components/homePage/Footer';




function App() {

  const  onScrollToElementClickHandler =(el : string) =>{
    let element = document.querySelector('.' + el);
    console.log('Element');
    console.log(element);
    if (element) {
        element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
      }
  }

  return (
    <div className="App">
      
      <Router>
       <NavigationMenu onScrollToElementClickHandler={onScrollToElementClickHandler}></NavigationMenu> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/login/customer' element={<CustomerAccount/>} />
          <Route path='/login/cleaner' element={<CleanerAccount/>} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer onScrollToElementClickHandler={onScrollToElementClickHandler}></Footer>
      </Router>

    </div>
  );
}

export default App;
