import React, { useState } from 'react';
import './App.css';

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
    console.log('loginButtonTestHandler in app.tsx');
    console.log('login');
    console.log(login);

    if (login) {
      setLoginText('Log out');
      setLoad('/');
    };
    if (!login) {
      setLoginText('Log in');
      setLoad('/login');
    };

    console.log('loginText');
    console.log(loginText);
  }

/*   const onScrollToElementClickHandler = (el: string) => {
    let element = document.querySelector('.' + el);
    console.log('Element');
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  } */

  //-----------------------------------------------------------------------
  const onLogOutClickHandler = () => {
    console.log('onLogOutClickHandler in app');
    setLogin(false);
    setLoginText('Log in');
    setLoad('/login');
  }

  //-----------------------------------------------------------------------
  const onScrollToElementClickHandler = (el: string) => {
    setLogin(false);
    setLoginText('Log in');
    setLoad('/login');
    console.log('scrollToElementClickHandler in app');
    console.log('El');
    console.log(el);

    let selector: string = '#' + el;
    console.log('Selector');
    console.log(selector);

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
            <Route path='/' element={<HomePage onLogOutClickHandler={onLogOutClickHandler}/>} />
            <Route path='/login' element={<LoginPage loginButtonTextHandler={loginButtonTextHandler}/>} />
            <Route path='/login/customer/:name' element={<CustomerAccount />} />
            <Route path='/login/cleaner/:name' element={<CleanerAccount />} />
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
          <Footer onScrollToElementClickHandler={onScrollToElementClickHandler}></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
