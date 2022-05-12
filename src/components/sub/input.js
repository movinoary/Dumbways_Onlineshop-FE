import React from 'react'

export default function Input(porps) {
  return (
    <input type={porps.type} className='sub-input' placeholder={porps.placeholder}/> 
  )
}
