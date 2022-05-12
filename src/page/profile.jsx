import React from 'react'
import * as Components from '../components/index'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-desc'>
        <h3>My Profile</h3>
        <div className='profile-desc-row'>
          <div className='profile-desc-img'>
            <img src="https://i.pinimg.com/564x/fd/9a/6b/fd9a6baa8f49b9dfdc19eb62025f25cf.jpg" alt="profile" />
          </div>
          <div className='profile-desc-full'>
            <Components.Paragraf title='Name' desc='Choi Ji-su'/>
            <Components.Paragraf title='Email' desc='Lia@mail.com'/>
            <Components.Paragraf title='Phone' desc='081212233445'/>
            <Components.Paragraf title='Gander' desc='Female'/>
            <Components.Paragraf title='Address' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
          </div>
        </div>
      </div>
      <div className='profile-transaction'>
        <h3>My Transaction</h3>
        <Components.CardTransaction />
      </div>
    </div>
  )
}

export default Profile