import React, { useState } from 'react'
import * as Page from './index'

const Home = () => {
  const [isRegister, setRegister] = useState(false);

  return (
    <div>
      {isRegister ? (
        <Page.RegisterPage login={() => setRegister(!isRegister)} />
      ) : (
        <Page.LoginPage register={() => setRegister(!isRegister)} />
      )}
    </div>
  )
}

export default Home