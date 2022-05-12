import React from 'react'
import * as Components from '../components/index'

const Complain = () => {
  return (
    <div className='complain-container'>
      <div className='complain-akun'>
        <div className='complain-akun-profile'>
          <Components.CardAccount />
          <Components.CardAccount />
          <Components.CardAccount />
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