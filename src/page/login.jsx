import React, { useEffect, useState } from 'react'
import Logo from '../assets/image/logo.jpg'
import * as Components from '../components/index'
import { useNavigate } from 'react-router-dom'

function LoginPage(props){
  const {login} = props
  const {register} = props
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLogin: false,
    admin: {
        email: '',
        password: ''
    }
})


useEffect(() => {
  if (state.admin.email) {
      console.log("Berhasil Login")
      console.log(state)
      navigate('/admin')
  }
} )


const handleOnSubmit = (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  setState({
      isLogin: true,
      admin: {
          email,
          password
      }
  })
}

  return(
    <>
    {state.isLogin ? <></>:
      <div className='home-container'>
        <div className='home-left'>
          <img src={Logo} alt="logo" />
          <h1>Easy, Fast and Reliable</h1>
          <p>Go Shopping for merchandisem just go to dumb merch shoping. The biggest merchandise in indonesia</p>
          <div className='home-button'>
            <button className='sub-button orange' onClick={login} >Login</button>
            <button className='sub-button black' onClick={register} >Register</button>
          </div>
        </div>
        <form className='home-right-login' onSubmit={handleOnSubmit}>
          <h3>Login</h3>
          <div className='home-form'>
            <input className='sub-input' id='email' name='email' type='email' placeholder='Email' />
            <input className='sub-input' id='password' name='password' type='password' placeholder='Password' />
          </div>
            <Components.Button cName='sub-button orange' title='Login' />
        </form>
      </div>
    }
    </>
  )
}


export default LoginPage