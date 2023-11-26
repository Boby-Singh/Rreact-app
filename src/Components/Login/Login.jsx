import React, { useState } from 'react'
import { Outlet, Link, Navigate, json, useNavigate } from "react-router-dom";
import './Login.css'
import axios from 'axios';
// import Validation from './LoginValidation';

const Login = () => {
    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const [error, setError] = useState({})
    const [Backenderror, setBackenderror] = useState([]);
    const handleinput = (e)=>{
        setValues(prev => ({...prev, [e.target.name]:[e.target.value]}))
    }
    const navigator = useNavigate();
    const handlesubmit = (e)=>{
          e.preventDefault();
        //   setError(Validation (values));
          if(error.email==="" && error.password===""){
              axios.post("http://localhost:5173/Login",values)
              .then(res => console.log(res))
              .catch(err => console.log(err))
          }
    }

    // const handlesubmit = (e) =>{
    //    e.preventDefault();
    //    const formatdata = ({Email:Email, password:password});
    //    axios.post({url:'http://localhost:3001/Login', json:formatdata})
    //    .then(res => {
    //     if(res.data.errors){
    //         setBackenderror(res.data.errors);
    //     }
    //     else{
    //         setBackenderror([]);
    //         if(res.data == "success"){
    //             Navigate("/Home");
    //         }else{
    //             alert("No Record Exist");
    //         }
    //     }
    //    })
    //    .catch(err => console.log(err.message))
    // }
  return (

    <div className="log-container">
        <div className="login">
        <h1>Login if you are Aready Register</h1>
        <form onSubmit={handlesubmit}>
        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email"   placeholder='Enter email'  value={values.email} onChange={handleinput}/><br />
            {/* {error.email && <span className='text-danger'>{error.email}</span>} */}
        </div>
        <div>
            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password"   placeholder='Enter password' value={values.password} onChange={handleinput}/><br />
            {/* {error.password && <span className='text-danger'>{error.password}</span>} */}
        </div>
        <div >
            <button type='submit' className="log-btn">Login</button>
        </div>
        <p>If you have not an Account then Register</p>
        <Link to="/RegisterPage">
            <button type='submit' className="Reg-btn">Register</button>
        </Link>
        </form>
        </div>
    </div>
  )
}

export default Login