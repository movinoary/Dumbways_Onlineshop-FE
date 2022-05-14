import React from 'react'
import { Link } from 'react-router-dom'

const CardAccount = (props) => {
  return (
    <div className='card-account'>
      <Link to='/user/profile'>
        <img src={props.image} alt="profile" />
      </Link>
        <div className='card-account-name'>
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default CardAccount