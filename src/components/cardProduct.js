import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = (props) => {
  const {image, title, price, stock, path} = props

  return (
    <div className='card-product'>
        <Link className='txt-dec' to={`product/${path}` }>
        <img src={image} alt="product" />
        <div className='card-desc'>
            <h4>{title}</h4>
            <p>Rp.{price}</p>
            <p>Stock : {stock}</p>
        </div>
        </Link>
    </div>
  )
}

CardProduct.defaultProps = {
  image : 'https://www.bhinneka.com/_next/image?url=https%3A%2F%2Fstatic.bmdstatic.com%2Fpk%2Fproduct%2Fmedium%2F5af92f60623e6.jpg&w=1080&q=75',
  title : 'Sades',
  price : '500.000',
  stock : '600' 
}

export default CardProduct