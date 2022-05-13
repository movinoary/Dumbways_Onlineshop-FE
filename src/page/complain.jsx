import React from 'react'
import * as Components from '../components/index'
import { DataUser } from '../data/user'

const Complain = () => {
  return (
    <div className='complain-container'>
      <div className='complain-akun'>
        <div className='complain-akun-profile'>
          {DataUser.map((user) => {
            return (
              <Components.CardAccount 
                key={user.id}
                image={user.image}
                name={user.name}
                desc={user.address}
              />
            )
          })}
        </div>
      </div>
      <div className='complain-chat'>
        <div className='complain-chat-bubble'>
        </div>
        <div className='complain-chat-input'>
          <Components.Input type='text' placeholder='Send Message'/>
        </div>
      </div>
    </div>
  )
}

export default Complain