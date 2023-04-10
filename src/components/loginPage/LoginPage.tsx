import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'

import Member from 'src/models/Member';

import LogInForm from 'src/components/logInPage/components/LogInForm'

import { ILogInPage } from 'src/components/logInPage/interfaces';
import { addData, fetchData } from 'src/components/logInPage/api';

interface INameContext {
  text: string
  setText: Dispatch<SetStateAction<string>>
}

export const NameContext = createContext<INameContext>({
  text: "",
  setText: () => { }
});

const LogInPage = (props: ILogInPage) => {

  //-------------------------------------------------------------------
  const [members, setMembers] = useState<Member[]>([]);
  const [isCustomer, setIsCustomer] = useState(false);
  const [display, setDisplay] = useState(true)
  const [text, setText] = useState('');
  const [login, setLogin] = useState(false);
  const [newCustomer, setNewCustomer] = useState(true);

  //-------------------------------------------------------------------
  useEffect(() => {
    (
      async function () {
        let res: Member[] = await fetchData() as Member[];
        setMembers(res);
      }
    )()
  }, []);


  //-------------------------------------------------------------------
  const onSubmitHandler = (name: string) => {
    const filtered = members.filter((value) => value.name === name);

    if (filtered.length !== 0) {
      setText(name);
      setDisplay(false);
      setIsCustomer(filtered[0].isCustomer);
      setLogin(true);
      setNewCustomer(true); 
    };
    if (filtered.length === 0) {
      setText('Would you like to became our new customer?');
      setDisplay(true);
      setLogin(false);
      setNewCustomer(false);
    };
  }

  const onAddNewCustomerHandler = async (name: string) => {
    setText(name);
    setDisplay(false);
    setIsCustomer(true);
    setLogin(true);
    setNewCustomer(true);

    props.loginButtonTextHandler(login);
    let res = await addData(name);
  }

  //-------------------------------------------------------------------
  props.loginButtonTextHandler(login);

  //-------------------------------------------------------------------
  return (
    <>
      <NameContext.Provider value={{ text, setText }}>
        <LogInForm onSubmitHandler={onSubmitHandler}
          onAddNewCustomerHandler={onAddNewCustomerHandler}
          display={display}
          newCustomer={newCustomer}
          isCustomer={isCustomer} ></LogInForm>
      </NameContext.Provider>
    </>
  )
}

export default LogInPage

