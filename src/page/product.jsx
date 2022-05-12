import React from 'react'
import * as Components from '../components/index'


const Product = () => {
  return (
    <div className='product-container'>
      <div className='product-title'>
        <h3>Product</h3>
      </div>
      <div className='product-list'>
        <Components.CardProduct />
        <Components.CardProduct />
        <Components.CardProduct />
        <Components.CardProduct />
        <Components.CardProduct />
      </div>
    </div>
  )
}

export default Product