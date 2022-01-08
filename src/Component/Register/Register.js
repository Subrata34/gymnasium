import React from 'react'
import { Button } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

const Register = () => {
    return (
        <div>
            <Header></Header>
        <h1>Please Registration </h1>
        <form action="" >
            <label htmlFor="" style={{fontWeight:"bold",fontSize:"20px"}}>Email Address :</label>
            <br />
            <input  style={{textDecoration:"none",width:"300px",borderRadius:"15px"}} type="email" name="email" id="email" />
            <br />
            <label htmlFor="" style={{fontWeight:"bold",fontSize:"20px"}}>Password :</label>
            <br />
            <input  style={{textDecoration:"none",width:"300px",borderRadius:"15px"}} type="password" name="password" id="password"  />
            <br />
            <label htmlFor="" style={{fontWeight:"bold",fontSize:"20px"}}>Retype Password :</label>
            <br />
            <input  style={{textDecoration:"none",width:"300px",borderRadius:"15px"}} type="password2" name="password2" id="password2"  />
            <br />
            
            <Button variant="success" style={{textDecoration:"none",width:"300px",margin:"15px",borderRadius:"15px"}}>Register</Button>
            

            </form>
            <Link to="/login">Already Register ?</Link>
        </div>
    )
}

export default Register
