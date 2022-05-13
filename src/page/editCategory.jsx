import React from 'react'
import * as Components from '../components/index'

const EditCategory = () => {
  return (
    <div className='product-container'>
        <div className='product-title'>
            <h3>List Category</h3>
            <Components.Input type='text'/>
            <Components.Button cName='sub-button green' title='edit'/>
        </div>
    </div>
  )
}

export default EditCategory