import React from 'react'
import { useParams } from 'react-router-dom'
import * as Components from '../components/index'
import * as Page from '../page/index'
import { DataProduct } from '../data/product'

const DetailProduct = () => {
  const {title} = useParams()

  return (
    <>
    {DataProduct.filter((product) => product.title === title).map((product) => (
      <div className='detailproduct-container' key={product}>
          <div className='detailproduct-img'>
              <img src={product.image} alt="detail product" />
          </div>
          <div className='detailproduct-desc'>
            <h1 className='detailproduct-desc-title'>{product.title}</h1>
            <p className='detailproduct-desc-stock'>Stock : {product.qty}</p>
            <pre className='detailproduct-desc-desc'>{product.description}</pre>
            <h3 className='detailproduct-desc-price'>Rp.{product.price}</h3>
            <Components.Button cName='sub-button orange' title='Buy'/>
          </div>
      </div>
    ))}
    <Page.Compare />
    </>
  )
}

export default DetailProduct