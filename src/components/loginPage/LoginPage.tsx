import { useEffect, useState } from 'react'

import Member from 'src/models/Member';

import LogInForm from 'src/components/logInPage/components/LogInForm'

import { ILogInPage } from 'src/components/logInPage/interfaces';
import { fetchData } from 'src/components/logInPage/api';


const LogInPage = (props: ILogInPage) => {

  //-------------------------------------------------------------------
  const [members, setMembers]= useState<Member[]>([]);
  const [isCustomer, setIsCustomer] = useState(false);
  const [display, setDisplay]  =  useState(true)
  const [text, setText] = useState('');
  const [login, setLogin] = useState(false);
     
  //-------------------------------------------------------------------
  useEffect(() => {
    (
      async function() 
      {
      let res : Member[] = await fetchData() as Member[];
      setMembers(res);
      } 
    )() 
  }, []); 


  //-------------------------------------------------------------------
  const onSubmitHandler = (name :string) => {  
    const filtered = members.filter((value) => value.name === name);

    if (filtered.length !== 0)
    {
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
  
  //-------------------------------------------------------------------
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

