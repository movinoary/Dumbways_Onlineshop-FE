import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/logo.jpg'

const NavUser = () => {
  return (
    <div className='nav'>
        <div className='nav-left'>
            <Link to='/user'>
                <img src={Logo} alt='logo' />
            </Link>
        </div>
        <div className='nav-right'>
            <ul>
                <Link className='txt-dec' to='/user/complain'>
                    <li>Complain</li>
                </Link>
                <Link className='txt-dec' to='/user/profile'>
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

const NavAdmin = () => {
    return (
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
                  <Link className='txt-dec' to='/'>
                      <li>Logout</li>
                  </Link>
              </ul>
          </div>
      </div>
    )
  }

export {NavUser, NavAdmin}