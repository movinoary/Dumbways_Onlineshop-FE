import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as Components from '../components/index'
import { DataProduct } from '../data/product'

const EditCategory = () => {
  const {title} = useParams()
  const navigate = useNavigate()
  
  const [state, setState] = useState({
    category: "mouse",
  })

  useEffect(() => {
    console.log("Before update");
    console.log(state);
  })
    
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
    console.log("After Update");
    console.log(state);
    navigate('/admin/list-category')
  }
  
  return (
    <>
    {DataProduct.filter((product) => product.title === title).map((product) => (
      <div className='product-container' key={product}>
          <form className='product-title' onSubmit={handleOnSubmit}>
              <h3>List Category</h3>
              <input 
                className='sub-input' 
                onChange={handleOnChange} 
                name='category' 
                value={state.category} 
                type='text' 
                placeholder={product.category} 
              />
              <Components.Button cName='sub-button green' title='edit'/>
          </form>
      </div>
    ))}
    </>
  )
}

export default EditCategory