import React, { useState } from 'react'
import Logo from '../assets/image/logo.jpg'
import * as Components from '../components/index'

function LoginPage(props){
  const {login} = props
  const {register} = props

  return(
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
    <form className='home-right-login'>
      <h3>Login</h3>
      <div className='home-form'>
        <Components.Input type='email' placeholder='Email' />
        <Components.Input type='password' placeholder='Password' />
      </div>
      <Components.Button cName='sub-button orange' title='Login' />
    </form>
  </div>
  )
}

function RegisterPage(props){
  const {login} = props
  const {register} = props

  return(
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
      <form className='home-right-register'>
        <h3>Register</h3>
        <div className='home-form'>
          <Components.Input type='text' placeholder='Name' />
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
        </div>
        <Components.Button cName='sub-button orange' title='Register' />
      </form>
    </div>
  )
}


const Home = () => {
  const [isRegister, setRegister] = useState(false);

  return (
    <div>
      {isRegister ? (
        <RegisterPage login={() => setRegister(!isRegister)} />
      ) : (
        <LoginPage register={() => setRegister(!isRegister)} />
      )}
    </div>
  )
}

export default Home