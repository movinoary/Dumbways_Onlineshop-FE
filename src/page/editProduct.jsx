import React from 'react'
import * as Components from '../components/index'

const EditProduct = () => {


  return (
    <div className='product-container'>
    <div className='product-title'>
        <h3>Edit product</h3>
        <div className='td-button'>
            <button className='sub-button orange mar-but' style={{width: '200px'}}>Input Image</button>
            <label>Mosue.jpg</label>
        </div>
        <Components.Input type='text' placeholder='mouse'/>
        <Components.Input type='text' placeholder='Lorem ipsum dolor sit amet.'/>
        <Components.Input type='text' placeholder='500.000'/>
        <Components.Input type='text' placeholder='150'/>
        <Components.Button cName='sub-button green' title='save'/>
    </div>
</div>
  )
}

export default EditProduct