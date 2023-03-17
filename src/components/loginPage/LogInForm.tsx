import { useState } from "react"
import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";

import { redirect } from "react-router-dom";
import Booking from "../../models/Booking";
import './LogInForm.css'

interface ILogInForm {
    onSubmitHandler(name: string): void
    text: string
    isCustomer: boolean
    display: boolean
}

const LogInForm = (props: ILogInForm) => {
    //const navigation = useNavigation();

    let navigation = useNavigate();

    const [name, setName] = useState('');

    console.log('Filtered in form');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmitHandler(name);
    }

    return (
        <div className='login-section-wrapper'>

            <div className="login-section-background-image"></div>
            {/* <div className="bg-image"></div> */}

            <form action="" className='login-form' onSubmit={submitHandler}>

                <div style={{ display: props.display ? 'block' : 'none' }}>
                    <h2>Enter your name: </h2>
                    <label className="login-lable" htmlFor="name"></label>
                    <input type="text"
                        id="name"
                        className="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='login-form-h1'>
                    <h2 style={{ display: props.display ? 'none' : 'block' }}>Hello,</h2>
                    <h1 style={{ fontSize: props.display ? 16 : 46 }}>{props.text}</h1>
                </div>

                <div style={{ display: props.display ? 'block' : 'none' }}>
                    <button className="login-section-button" type="submit" >Log in</button>
                </div>

                <div className="logged-in-buttons" style={{ display: !props.display ? 'flex' : 'none' }}>
                    {/* {props.isCustomer && <Link to={"/login/customer"} state={name}><button className="login-section-button btn" type="button">My Account</button></Link>}
                    {!props.isCustomer && <Link to={"/login/cleaner"} state={name}><button className="login-section-button btn" type="button">My Account</button></Link>} */}
                {props.isCustomer && <button className="login-section-button btn" 
                                             type="button"
                                             onClick={() => navigation(`/login/customer/${name}`)}>My Account</button>}
                {!props.isCustomer && <button className="login-section-button btn" 
                                             type="button"
                                             onClick={() => navigation(`/login/cleaner/${name}`)}>My Account</button>}
                
                </div>

            </form>

            {/* <p style={{ visibility: props.filtered.length !== 0 ?  'hidden' : 'visible'  }}> */}
        </div>
    )
}
export default LogInForm