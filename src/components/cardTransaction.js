import React from 'react'
import Logo from '../assets/image/Logo2.jpg'

const CardTransaction = () => {
  return (
    <div className='card-trans'>
        <img src="https://www.bhinneka.com/_next/image?url=https%3A%2F%2Fstatic.bmdstatic.com%2Fpk%2Fproduct%2Fmedium%2F5af92f60623e6.jpg&w=1080&q=75" alt="transaction" />
        <div className='card-trans-desc'>
            <h2>Mouse</h2>
            <h4><span>Saturday</span>, 14 Juli 2021 </h4>
            <p>Price: Rp.500.000</p>
            <h3>Sub Total: 500.000</h3>
        </div>
        <div className='card-trans-logo'>
            <img src={Logo} alt="logo" />
        </div>
    </div>
  )
}

export default CardTransaction