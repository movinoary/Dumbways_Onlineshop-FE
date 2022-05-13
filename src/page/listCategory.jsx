import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Components from '../components/index'

const ListCategory = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()

    const editClick = () => {
        navigate("/admin/list-category/1")
      }

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
                        <tr>
                            <td>1</td>
                            <td>Mouse</td>
                            <td className='td-button'>
                                <button className='sub-button green mar-but' onClick={editClick}> edit </button>
                                <button className='sub-button orange mar-but' onClick={deleteButton}> delete </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </>
  )
}

export default ListCategory