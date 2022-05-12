import React from 'react'
import { Link } from 'react-router-dom'

const CardAccount = () => {
  return (
    <div className='card-account'>
      <Link to='/profile'>
        <img src="https://i.pinimg.com/564x/fd/9a/6b/fd9a6baa8f49b9dfdc19eb62025f25cf.jpg" alt="profile" />
      </Link>
        <div className='card-account-name'>
          <h3>Lia</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, modi.</p>
        </div>
    </div>
  )
}

export default CardAccount