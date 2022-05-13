import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/logo.jpg'
import * as Components from '../components/index'

const NavUser = () => {
    const [showModal, setShowModal] = useState(false);

    const logoutButton = () => {
        setShowModal(prev => !prev);
    };
    
    
  return (
    <>
    <Components.CardLogout showModal={showModal} setShowModal={setShowModal}/>
    <div className='nav'>
        <div className='nav-left'>
            <Link to='/user'>
                <img src={Logo} alt='logo' />
            </Link>
        </div>
        <div className='nav-right'>
            <ul>
                <Link className='txt-dec' to='/user/compare'>
                    <li>Compare</li>
                </Link>
                <Link className='txt-dec' to='/user/complain'>
                    <li>Complain</li>
                </Link>
                <Link className='txt-dec' to='/user/profile'>
                    <li>Profile</li>
                </Link>
                <li onClick={logoutButton}>
                    Logout
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

const NavAdmin = () => {
    const [showModal, setShowModal] = useState(false);

    const logoutButton = () => {
        setShowModal(prev => !prev);
    };
    
    
    return (
        <>
        <Components.CardLogout showModal={showModal} setShowModal={setShowModal}/>
        <div className='nav'>
            <div className='nav-left'>
                <Link to='/admin'>
                    <img src={Logo} alt='logo' />
                </Link>
            </div>
            <div className='nav-right'>
                <ul>
                    <Link className='txt-dec' to='/admin/complain'>
                        <li>Complain</li>
                    </Link>
                    <Link className='txt-dec' to='/admin/list-category'>
                        <li>Category</li>
                    </Link>
                    <Link className='txt-dec' to='/admin/list-product'>
                        <li>Product</li>
                    </Link>
                    <li onClick={logoutButton}>
                        Logout
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
  }

export {NavUser, NavAdmin}