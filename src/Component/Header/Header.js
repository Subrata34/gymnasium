import React from 'react'
import { Button } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom'
import useFirebase from '../Hooks/useFirebase'


import './Header.css'

const Header = () => {
    const{user,logOut}=useFirebase();
    return (
        
        <div className='nav '>
            
            <ul className='list'>
                 <Link style={{textDecoration:"none"}} className='items' to ="/home"><li>Home</li></Link>
                 <Link style={{textDecoration:"none"}} className='items' to ="/about"> <li>About</li> </Link>
                 <Link style={{textDecoration:"none"}} className='items' to ="/package"><li>Package</li></Link> 
                 <Link style={{textDecoration:"none"}} className='items' to ="/team">  <li>Our Team</li></Link> 
                 <Link style={{textDecoration:"none"}} className='items' to ="/register"> <li>Register</li></Link> 
                 <Link style={{textDecoration:"none"}} className='items' to ="/login"> <li>Login</li> </Link> 
                <span>{user.displayName}</span>
                <img src={user.photoURL} alt="" />
                {user?.email &&  <Button onClick={logOut}>Log out</Button>}
            </ul>
            
        </div>
    
    )
}

export default Header
