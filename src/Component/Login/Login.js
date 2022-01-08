import React  from 'react'
import { Button } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const{signInUsingGoogle}=useFirebase();
    
    return (
        <div>
            <Header></Header>
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
            <Button variant="success" style={{textDecoration:"none",width:"300px",margin:"15px",borderRadius:"15px"}}
             onClick={signInUsingGoogle}
            
            >Google sgin in </Button>
            <br />
            <Button variant="success" style={{textDecoration:"none",width:"300px",margin:"15px",borderRadius:"15px"}}
             
            
            >Github Sign In </Button>
            <br />
            <Link to="/register">New User ?</Link>

          
        </div>
    )
}

export default Login
