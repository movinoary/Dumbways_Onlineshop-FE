import React from 'react'
import Logo from '../../assets/image/Logo2.jpg'

const CardTransaction = (props) => {
  const {image, title, day, date, price, subtotal} = props

  return (
    <div className='card-trans'>
        <img src={image} alt="transaction" />
        <div className='card-trans-desc'>
            <h2>{title}</h2>
            <h4><span>{day}</span>, {date}</h4>
            <p>Price Rp.{price}</p>
            <h3>Sub Total: Rp.{subtotal}</h3>
        </div>
        <div className='card-trans-logo'>
            <img src={Logo} alt="logo" />
        </div>
    </div>
  )
}

export default CardTransaction