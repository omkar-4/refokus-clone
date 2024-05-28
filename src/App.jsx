import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'

function App() {
  return (
    <>
    <main className='h-screen w-full bg-[#000000] text-white'>
    <Navbar />
    <Work/>
    {/* <div className="pagetry w-full h-[400%] bg-[#000]"></div> */}
    </main>
    </>
  )
}

export default App