import React from 'react'
import { useParams } from 'react-router-dom'
import * as Components from '../components/index'
import { DataProduct } from '../data/product'

const EditProduct = () => {
  const {title} = useParams()

  return (
    <div className='product-container'>
      <div className='product-title'>
        <h3>Edit product</h3>
        {DataProduct.filter((product) => product.title === title).map((product) => (
          <form key={product}>
            <input type='file' className='input-file'/>
            <Components.Input type='text' placeholder={product.title}/>
            <textarea className='sub-input' id="description" rows="3" placeholder={product.description}></textarea>
            <Components.Input type='text' placeholder={product.price}/>
            <Components.Input type='text' placeholder={product.qty}/>
            <Components.Button cName='sub-button green' title='save'/>
          </form>
        ))}
      </div>
    </div>
  )
}

export default EditProduct