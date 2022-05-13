import React from 'react'

export default function Input(props) {
  return (
    <input type={props.type} className='sub-input' placeholder={props.placeholder} value={props.value}/> 
  )
}
