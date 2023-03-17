import { useEffect, useState } from 'react'
import Booking from '../../models/Booking';
import Member from '../../models/Member';


import LogInForm from './LogInForm'


import './LogInPage.css'


export interface ILogInPage {
  loginButtonTextHandler: (login : boolean) => void

} 

const LogInPage = (props: ILogInPage) => {

  const[members, setMembers]= useState<Member[]>([]);
  const [isCustomer, setIsCustomer] = useState(false);
  const [display, setDisplay]  =  useState(true)
  const [text, setText] = useState('');
  const [login, setLogin] = useState(false);
     

  const fetchData =  () => {
    try
    {
        fetch('http://localhost:5001/members')
        .then(res => res.json())
        .then((data) => {
          console.log(data);  
          setMembers(data); 
          console.log(members);   
        })                
    }    
    catch(error)
    {
        console.log(error);
    }   
  }
     
  useEffect(() => {
    fetchData();
  }, []); 

  console.log('booking1');
  console.log(members);

 /*  const onSubmitHandler = (name :string) => {
    console.log('In onSubmitHandler');
    console.log(name);
    console.log('booking2')
    console.log(members);

    const filtered = members.filter((value) => value.name === name);

    if (filtered.length !== 0)
    {
      setText(filtered[0].name);
      setDisplay(false)

      if (filtered[0].isCustomer === true)
      {
          console.log('filtered[0].isCustomer')
          console.log(filtered[0].isCustomer)
          setIsCustomer(true)
      };

      if (filtered[0].isCustomer === false)
      {
        console.log('filtered[0].isCustomer')
        console.log(filtered[0].isCustomer)
        setIsCustomer(false)
      }; 
    
    };

    if (filtered.length === 0)
    {
      setText('Not exist');
      setDisplay(true)
    };
  } */

  //-------------------------------------------------------------------
  const onSubmitHandler = (name :string) => {
    
    const filtered = members.filter((value) => value.name === name);
    console.log('Filtered')
    console.log(filtered); 

    if (filtered.length !== 0)
    {
      console.log('inside filtered.length !== 0'); 
      setText(name);
      setDisplay(false);
      setIsCustomer(filtered[0].isCustomer);  
      setLogin(true);    
    };

    if (filtered.length === 0)
    {
      setText('Not exists');
      setDisplay(true);
      setLogin(false);
    };

  }

  //-------------------------------------------------------------------
  props.loginButtonTextHandler(login);

  console.log('isCustomer');
  console.log(isCustomer);  
    
  return (
      <>
          <LogInForm  onSubmitHandler={onSubmitHandler}
                      text={text}
                      display={display}
                      isCustomer={isCustomer} ></LogInForm>       
      </> 
  )
}

export default LogInPage

