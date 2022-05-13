import React from 'react'
import * as Components from '../components/index'
import { DataProduct } from '../data/product'


const Product = () => {
  return (
    <div className='product-container'>
      <div className='product-title'>
        <h3>Product</h3>
      </div>
      <div className='product-list'>
        {DataProduct.map((product,index) => {
          return (
            <Components.CardProduct 
              key={index}
              path={product.title}
              image={product.image}
              title={product.title}
              price={product.price}
              stock={product.qty}
            />
            )
          })}
        </div>
    </div>
  )
}

export default Product