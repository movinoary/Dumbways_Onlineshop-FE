import React from 'react'

export default function Button(props) {
    const {cName, title} = props

  return (
    <button className={cName}>{title}</button>
  )
}

Button.defaultProps = {
    cName: 'sub-button',
    title : 'tombol'
    
}
