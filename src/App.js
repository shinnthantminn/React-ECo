import React from 'react'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <div className='w-[80%] mx-auto min-h-[100vh]'>
      <Nav/>
      <Main/>
    </div>
  )
}

export default App