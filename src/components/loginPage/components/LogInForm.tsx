import classes from 'src/components/logInPage/css/LogInForm.module.css'

import { useState }    from "react"
import { useNavigate } from "react-router-dom";

import { ILogInForm } from 'src/components/logInPage/interfaces';


const LogInForm = (props: ILogInForm) => {

    let navigation = useNavigate();

    //-------------------------------------------------------------------
    const [name, setName] = useState('');

    //-------------------------------------------------------------------
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmitHandler(name);
    }

    //-------------------------------------------------------------------
    return (
        <div className={classes.loginSectionWrapper}>

            <div className={classes.loginSectionBackgroundImage}></div>

            <form action="" className={classes.loginForm} onSubmit={submitHandler}>

                <div style={{ display: props.display ? 'block' : 'none' }}>
                    <h2>Enter your name: </h2>
                    <label className={classes.loginLable} htmlFor="name"></label>
                    <input type="text"
                        id="name"
                        className={classes.name}
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={classes.loginFormH1}>
                    <h2 style={{ display: props.display ? 'none' : 'block' }}>Hello,</h2>
                    <h1 style={{ fontSize: props.display ? 16 : 46 }}>{props.text}</h1>
                </div>

                <div style={{ display: props.display ? 'block' : 'none' }}>
                    <button className={classes.loginSectionButton} type="submit" >Log in</button>
                </div>

                <div className={classes.loggedInButtons} style={{ display: !props.display ? 'flex' : 'none' }}>

                    {props.isCustomer && <button className={classes.loginSectionButton}
                                                 type="button"
                                                 onClick={() => navigation(`/login/customer/${name}`)}>My Account</button>}
                    {!props.isCustomer && <button className={classes.loginSectionButton}
                                                  type="button"
                                                  onClick={() => navigation(`/login/cleaner/${name}`)}>My Account</button>}
                </div>

            </form>

        </div>
    )
}
export default LogInForm