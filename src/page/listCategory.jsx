import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Components from '../components/index'
import { DataProduct } from '../data/product';

const ListCategory = () => {
    const [showModal, setShowModal] = useState(false);

    const deleteButton = () => {
        setShowModal(prev => !prev);
    }; 


  return (
      <>
        <Components.CardDelete showModal={showModal} setShowModal={setShowModal}/>
        <div className='product-container'>
            <div className='product-title'>
            <h3>Edit Category</h3>
            </div>
            <div className='product-tabel'>
                <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <th>No</th>
                            <th>Category Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {DataProduct.map((product, index) => {
                            return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.category}</td>
                                <td className='td-button'>
                                    <button className='sub-button green mar-but'>
                                        <Link to={`/admin/edit-category/${product.title}`} className='txt-dec'>
                                        edit 
                                        </Link>
                                    </button>
                                    <button className='sub-button orange mar-but' onClick={deleteButton}> delete </button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
      </>
  )
}

export default ListCategory