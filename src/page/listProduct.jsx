import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as Components from '../components/index'
import { DataProduct } from '../data/product';

const ListProduct = () => {
    const [showModal, setShowModal] = useState(false);

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
                        <th>Product Name</th>
                        <th>Photo</th>
                        <th>Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {DataProduct.map((product, index) => {
                        return(
                        <tr key={index}>
                            <td className='td-no'>{index + 1}</td>
                            <td className='td-til'>{product.title}</td>
                            <td className='td-img'><img src={product.image} alt="product" /></td>
                            <td className='td-des'>{product.description}</td>
                            <td className='td-pri'>Rp.{product.price}</td>
                            <td className='td-qty'>{product.qty}</td>
                            <td className='td-button'>
                                <Link to={`/admin/edit-product/${product.title}`}>
                                    <button className='sub-button green mar-but'> edit </button>
                                </Link>
                                <button className='sub-button orange mar-but' onClick={deleteButton}> delete </button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
      </>
  )
}

export default ListProduct