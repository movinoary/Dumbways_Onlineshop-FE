import React from 'react'

export default function Paragraf(props) {
  const {title, desc} = props

  return (
    <div className='paragraf-row'>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
  )
}

Paragraf.defaultProps = {
    title : 'Name',
    desc  : 'Lia'
}
