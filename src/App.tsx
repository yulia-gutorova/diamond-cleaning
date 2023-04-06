import './App.css';

import React, { useState } from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomePage        from './components/homePage/HomePage';
import LoginPage       from './components/logInPage/LogInPage';
import NavigationMenu  from './components/common/components/NavigationMenu';
import CustomerAccount from './components/customerAccount/CustomersAccount';
import CleanerAccount  from './components/cleanerAccount/CleanerAccount';
import Footer          from './components/common/components/Footer';

function App() {

  //-----------------------------------------------------------------------
  const [login, setLogin] = useState(false);
  const [loginText, setLoginText] = useState('Log in');
  const [load, setLoad] = useState('/login');


  //-----------------------------------------------------------------------
  const loginButtonTextHandler = (login: boolean) => {
    if (login) {
      setLoginText('Log out');
      setLoad('/');
    };
    if (!login) {
      setLoginText('Log in');
      setLoad('/login');
    };
  }

  //-----------------------------------------------------------------------
  const onScrollToElementClickHandler = (el: string) => {
    setLogin(false);
    setLoginText('Log in');
    setLoad('/login');

    let selector: string = '#' + el;

    //-----------------------------------------------------------------------
    async function waitForElement(selector: string, timeout = 15000) {
      const start = Date.now();

      while (Date.now() - start < timeout) {
        const el = document.querySelector(selector);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
          return el!;
        }
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      return null;
    }

    waitForElement(selector);
  }  

  //-----------------------------------------------------------------------
  return (
    <div className="App">
      <BrowserRouter>
          <NavigationMenu  onScrollToElementClickHandler={onScrollToElementClickHandler}
                           loginText={loginText}
                           login={login}
                           load={load}></NavigationMenu>
          <Routes>
            <Route path='/' 
                   element={<HomePage loginButtonTextHandler={loginButtonTextHandler}/>} />
            <Route path='/login' 
                   element={<LoginPage loginButtonTextHandler={loginButtonTextHandler}/>} />
            <Route path='/login/customer/:name' 
                   element={<CustomerAccount loginButtonTextHandler={loginButtonTextHandler}/>} />
            <Route path='/login/cleaner/:name' 
                   element={<CleanerAccount loginButtonTextHandler={loginButtonTextHandler}/>} />
            <Route path='*' 
                   element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
          <Footer onScrollToElementClickHandler={onScrollToElementClickHandler}></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
