import React from 'react'
import * as Components from '../components/index'

const DetailProduct = () => {
  return (
      <div className='detailproduct-container'>
          <div className='detailproduct-img'>
              <img src="https://www.bhinneka.com/_next/image?url=https%3A%2F%2Fstatic.bmdstatic.com%2Fpk%2Fproduct%2Fmedium%2F5af92f60623e6.jpg&w=1080&q=75" alt="detail product" />
          </div>
          <div className='detailproduct-desc'>
            <h1 className='detailproduct-desc-title'>Mouse</h1>
            <p className='detailproduct-desc-stock'>Stock : 500</p>
            <p className='detailproduct-desc-desc'>
                - Wireless
                - Plug and Play

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam explicabo cum rerum! Quam libero ratione possimus nesciunt et dicta similique, ipsam eligendi molestiae unde ipsa cupiditate, incidunt doloremque magnam doloribus natus excepturi perferendis! Alias ullam quos exercitationem? Quo repellendus quisquam aliquam temporibus inventore iure exercitationem molestias magnam illum perferendis?
                lorem1000
            </p>
            <h3 className='detailproduct-desc-price'>Rp. 300.000</h3>
            <Components.Button cName='sub-button orange' title='Buy'/>
          </div>
      </div>
  )
}

export default DetailProduct