// import { useState } from 'react'

import { Sidebar, ChatInput, Menu } from './components'

function App() {
  return (
    <div className='container'>
      <Menu />
      <Sidebar />
      <ChatInput />
    </div>
  )
}

export default App
