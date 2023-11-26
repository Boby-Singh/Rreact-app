import React, { useState } from 'react'
import './Register.css'
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
// import RegisterValidation from './RegisterValidation';

const Register = () => {
    const [value, setValues] = useState({
        name:'',
        user_id:'',
        email:'',
        password:'',
        repassword:'',
        phone_number:'',
        Address:''
    });
    const [error, setError] = useState({})
    const handleinput = (e)=>{
       setValues(prev => ({...prev, [e.target.name]:[e.target.value]}))
    }
    const Navigate = useNavigate()
    const handlesubmit = (e)=>{
        e.preventDefault();
        // setError(RegisterValidation(value));
        if(error.name==="" && error.user_id==="" && error.email==="" && error.password==="" && error.repassword===""
        && error.phone_number==="" && error.Address===""){
            axios.post("http://localhost:5173/Register",value)
            .then(res => {navigator('/Login');})
            .catch(err => console.log(err))
        }
    }

    // const register = ()=>{
    //     const {Name,user_id,email,password, repassword, Address} = name
    //     if(Name && user_id && email && password && Address && (password && repassword)){
    //         alert("posted")
    //         // axios.post('http://localhost:5173/RegisterPage',name)
    //         // .then(res => console.log(res))
    //     }
    //     else{
    //         alert("invalied input")
    //     }
        
    // }
  return (
    <>
    <div className="Reg-container">
        <div className="instraction">
            <h2>Follow these instraction</h2>
            <ol>
                <li>Read these instraction carefully befoare Register youself</li>
            </ol>
        </div>
        <div className="Register">
            <h1>**Register** </h1>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="">Name:</label><br />
                    <input type="text" name="name"   placeholder='Enter Name' value={value.name} onChange={handleinput}/><br />
                    {/* {error.name && <span className='text-danger'>{error.name}</span>} */}
                </div>
                <div>
                    <label htmlFor="">User_id:</label><br />
                    <input type="number" name="user_id"   placeholder='Enter User_id' value={value.user_id} onChange={handleinput}/><br />
                    {/* {error.user_id && <span className='text-danger'>{error.user_id}</span>} */}
                </div>
                <div>
                    <label htmlFor="">email:</label><br />
                    <input type="emial" name="email"   placeholder='Enter email' value={value.email} onChange={handleinput}/><br />
                    {/* {error.email && <span className='text-danger'>{error.email}</span>} */}
                </div>
                <div>
                    <label htmlFor="">password:</label><br />
                    <input type="password" name="password"   placeholder='Enter password' value={value.password} onChange={handleinput}/><br />
                    {/* {error.password && <span className='text-danger'>{error.password}</span>} */}
                </div>
                <div>
                    <label htmlFor="">repassword:</label><br />
                    <input type="password" name="repassword"   placeholder='Enter repassword' value={value.repassword} onChange={handleinput}/><br />
                    {/* {error.repassword && <span className='text-danger'>{error.repassword}</span>} */}
                </div> 
                <div>
                    <label htmlFor="">Phone_number:</label><br />
                    <input type="number" name="phone_number"   placeholder='Enter Phone number' value={value.phone_number} onChange={handleinput}/><br />
                    {/* {error.phone_number && <span className='text-danger'>{error.phone_number}</span>} */}
                </div>
                <div>
                    <label htmlFor="">Address:</label><br />
                    <input type="text" name="Address"   placeholder='Enter Adress' value={value.Address} onChange={handleinput}/><br />
                    {/* {error.Address && <span className='text-danger'>{error.Address}</span>} */}
                </div>
                <div className='btn'>
                    <button type='submit' className="Reg-btn" >Register</button>
                </div>
                <p>If you have not a Account then Register</p>
                <div className='btnn'>
                <Link to="/Login">
                <button type='submit' className="log-btn">Login</button>
                </Link>
                </div> 
            </form>           
        </div>                
        </div>
    </>
  )
}

export default Register