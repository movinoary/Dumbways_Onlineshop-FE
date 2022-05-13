import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Components from '../components/index'

const ListProduct = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()

    const editClick = () => {
      navigate("/admin/list-product/1")
    }


    const deleteButton = () => {
        setShowModal(prev => !prev);
    };


  return (
    <>
    <Components.CardDelete showModal={showModal} setShowModal={setShowModal}/>
        <div className='product-container'>
            <div className='product-title'>
            <h3>List Category</h3>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    <tr>
                        <td>1</td>
                        <td>Mouse.jpg</td>
                        <td>Mouse</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>500.000</td>
                        <td>150</td>
                        <td className='td-button'>
                            <button className='sub-button green mar-but' onClick={editClick}> edit </button>
                            <button className='sub-button orange mar-but' onClick={deleteButton}> delete </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </>
  )
}

export default ListProduct