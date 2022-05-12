import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = () => {
  return (
    <div className='card-product'>
        <Link className='txt-dec' to='/product/1'>
        <img src="https://www.bhinneka.com/_next/image?url=https%3A%2F%2Fstatic.bmdstatic.com%2Fpk%2Fproduct%2Fmedium%2F5af92f60623e6.jpg&w=1080&q=75" alt="product" />
        <div className='card-desc'>
            <h4>Mouse</h4>
            <p>Rp. 500.000</p>
            <p> Stock : 600</p>
        </div>
        </Link>
    </div>
  )
}

export default CardProduct