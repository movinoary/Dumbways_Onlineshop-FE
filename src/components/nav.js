import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/logo.jpg'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-left'>
            <Link to='/product'>
                <img src={Logo} alt='logo' />
            </Link>
        </div>
        <div className='nav-right'>
            <ul>
                <Link className='txt-dec' to='/complain'>
                    <li>Complain</li>
                </Link>
                <Link className='txt-dec' to='/profile'>
                    <li>Profile</li>
                </Link>
                <Link className='txt-dec' to='/'>
                    <li>Logout</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav