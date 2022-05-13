import React from 'react'
import * as Components from '../components/index'
import {DataUser} from '../data/user'

const Profile = () => {
  return (
    <>
    {DataUser.map((item,index) => {
      return (
      <div className='profile-container' key={index}>
        <div className='profile-desc'> 
          <h3>My Profile</h3>
          <div className='profile-desc-row'>
            <div className='profile-desc-img'>
              <img src={item.image} alt="profile" />
            </div>
            <div className='profile-desc-full'>
              <Components.Paragraf title='Name' desc={item.name}/>
              <Components.Paragraf title='Email' desc={item.email}/>
              <Components.Paragraf title='Phone' desc={item.phone}/>
              <Components.Paragraf title='Gander' desc={item.gander}/>
              <Components.Paragraf title='Address' desc={item.address}/>
            </div>
          </div>
        </div>
        <div className='profile-transaction'>
          <h3>My Transaction</h3>
          <Components.CardTransaction 
            image={item.transaction.image}
            title={item.transaction.title}
            day={item.transaction.day}
            date={item.transaction.date}
            price={item.transaction.price}
            subtotal={item.transaction.total}
          />
        </div>
      </div>
      )
    })}
    </>
  )
}

export default Profile