import React from 'react'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import CountingProvider from './store/CountingProvider'

const App = () => {
  return (
    <CountingProvider>
        <div className='w-[80%] mx-auto min-h-[100vh]'>
          <Nav/>
          <Main/>
        </div> 
    </CountingProvider>
        
  )
}

export default App