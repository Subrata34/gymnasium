import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <ul className='nav-bar'>
                <li> <Link style={{textDecoration:"none"}} to ="/home"> Home</Link> </li>
                <li> <Link style={{textDecoration:"none"}} to ="/about"> About</Link> </li>
                <li> <Link style={{textDecoration:"none"}} to ="/package">Package</Link> </li>
                <li> <Link style={{textDecoration:"none"}} to ="/team"> Our Team</Link> </li>
                <li> <Link style={{textDecoration:"none"}} to ="/register"> Register</Link> </li>
                <li> <Link style={{textDecoration:"none"}} to ="/login"> Login</Link> </li>
            </ul>
        </div>
    )
}

export default Header
