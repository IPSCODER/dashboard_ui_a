import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Theme = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
    {/* Sidebar */}
    <Sidebar/>
    <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className='w-full flex mx-auto flex-grow p-2 sm:pl-4 transition-all flex-col justify-start items-center bg-gray-100 border'>
        <Outlet/>
      </main>
    </div>
  </div>
  )
}

export default Theme