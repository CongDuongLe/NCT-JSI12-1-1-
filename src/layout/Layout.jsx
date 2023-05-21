import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-1 flex-col h-screen w-screen bg-slate-100 '>
        <Navbar/>
        <div className='h-screen w-screen overflow-auto'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout