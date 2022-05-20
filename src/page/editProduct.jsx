import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as Components from '../components/index'
import { DataProduct } from '../data/product'

const EditProduct = () => {
  const {title} = useParams()
    const navigate = useNavigate()
  
  const [state, setState] = useState({
    title : '',
    desc : '',
    price : '',
    qty: '',
  })

  useEffect(() => {
    if (state.category) {
        console.log("After Update")
      }
    },[state] )
    
  const handleOnChange = (e) => {
    // setState here
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    //print state value with console.log here
    console.log(state);
    navigate('/admin/list-product')
  }

  return (
    <div className='product-container'>
      <div className='product-title'>
        <h3>Edit product</h3>
        {DataProduct.filter((product) => product.title === title).map((product) => (
          <form key={product} onSubmit={handleOnSubmit}>
            <input type='file' className='input-file'/>
            <input 
              onChange={handleOnChange} 
              className='sub-input' 
              name='title' 
              type='text' 
              placeholder={product.title}
              value={state.title}
            />
            <textarea 
              onChange={handleOnChange} 
              className='sub-input' 
              id="description" 
              name='desc'
              rows="3" 
              placeholder={product.description}
              value={state.desc}
            ></textarea>
            <input 
              onChange={handleOnChange} 
              className='sub-input' 
              name='price' 
              type='text' 
              placeholder={product.price}
              value={state.price}
            />
            <input 
              onChange={handleOnChange} 
              className='sub-input' 
              name='qty' 
              type='text' 
              placeholder={product.qty}
              value={state.qty}
            />
            <Components.Button cName='sub-button green' title='save'/>
          </form>
        ))}
      </div>
    </div>
  )
}

export default EditProduct