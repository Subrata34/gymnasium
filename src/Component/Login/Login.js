import React  from 'react'
import { Button } from 'react-bootstrap-v5';

const Login = () => {
    
    return (
        <div>
            <h1>Please Login </h1>
            <form action="" >
            <label htmlFor="" style={{fontWeight:"bold",fontSize:"20px"}}>Email Address :</label>
            <br />
            <input  style={{textDecoration:"none",width:"300px",borderRadius:"15px"}} type="email" name="email" id="email" />
            <br />
            <label htmlFor="" style={{fontWeight:"bold",fontSize:"20px"}}>Password :</label>
            <br />
            <input  style={{textDecoration:"none",width:"300px",borderRadius:"15px"}} type="password" name="password" id="password"  />
            <br />
            
            <Button variant="success" style={{textDecoration:"none",width:"300px",margin:"15px",borderRadius:"15px"}}>Login</Button>
            

            </form>
          
        </div>
    )
}

export default Login
