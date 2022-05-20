import React, { useState } from 'react'
import Logo from '../assets/image/logo.jpg'
import * as Components from '../components/index'
import { useNavigate } from 'react-router-dom'


function RegisterPage(props){
  const {login} = props
  const {register} = props
  const navigate = useNavigate()

  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    // setState here
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    //print state value with console.log here
    console.log(state);
    navigate('/user')
  }

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
      <form className='home-right-register' onSubmit={handleOnSubmit}>
        <h3>Register</h3>
        <div className='home-form'>
          <input 
            className='sub-input' 
            onChange={handleOnChange} 
            name='fullname' 
            value={state.fullname} 
            type='text' 
            placeholder='Name' 
          />
          <input 
            className='sub-input' 
            onChange={handleOnChange} 
            name='email' 
            value={state.email} 
            type='email' 
            placeholder='Email' 
          />
          <input 
            className='sub-input' 
            onChange={handleOnChange} 
            name='password' 
            value={state.password} 
            type='password' 
            placeholder='Password' 
          />
        </div>
          <Components.Button cName='sub-button orange' title='Register' />
      </form>
    </div>
  )
}



export default RegisterPage