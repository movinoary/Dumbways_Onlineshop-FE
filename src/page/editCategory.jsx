import React from 'react'
import { useParams } from 'react-router-dom'
import * as Components from '../components/index'
import { DataProduct } from '../data/product'

const EditCategory = () => {
  const {title} = useParams()
  
  return (
    <>
    {DataProduct.filter((product) => product.title === title).map((product) => (
      <div className='product-container' key={product}>
          <div className='product-title'>
              <h3>List Category</h3>
              <Components.Input type='text' placeholder={product.category}/>
              <Components.Button cName='sub-button green' title='edit'/>
          </div>
      </div>
    ))}
    </>
  )
}

export default EditCategory