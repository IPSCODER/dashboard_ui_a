import React, { useState } from 'react'
import { bagIcon, chartIcon, homeIcon, logoIcon, logoutIcon, notepadIcon, walletIcon } from '../../assets/svgs/svgs'
import { Link } from 'react-router-dom'
import useOutsideClick from '../../hooks/useOutsideClick';
import { useDispatch, useSelector } from 'react-redux';
import { drawer } from '../../store/userSlice';

const Sidebar = () => {

  const isOpen = useSelector(state => state?.user?.drawerIsOpen)

  const dispatch = useDispatch()



  const closeDropdown = () => dispatch(drawer(false));

  const dropdownRef = useOutsideClick(closeDropdown);


  return (
    <aside ref={dropdownRef} className={`w-16 flex flex-col h-full items-center transition-all bg-primary-600 fixed top-0 left-0 z-50 sm:relative ${isOpen ? "translate-x-0" : "-translate-x-16"} sm:translate-x-0`} >
      <Link className='h-16 w-full flex items-center justify-center' >{logoIcon}</Link>
      <ul className='flex flex-col gap-2 w-full items-center justify-center' >
        <li className='w-full h-10' >
          <Link className='w-full h-full flex items-center justify-center border-l-2' >
          {homeIcon}
          </Link>
        </li>
        <li className=' w-full h-10' >
          <Link className='w-full h-full flex items-center justify-center' >{chartIcon}</Link>
        </li>
        <li className=' w-full h-10' >
          <Link className='w-full h-full flex items-center justify-center' >
          {notepadIcon}
          </Link>
        </li>
        <li className=' w-full h-10' >
          <Link className='w-full h-full flex items-center justify-center' >
          {walletIcon}
          </Link>
        </li>
        <li className=' w-full h-10' >
          <Link className='w-full h-full flex items-center justify-center' >
          {bagIcon}
          </Link>
        </li>
      </ul>
      <Link className='mt-auto sticky bottom-0  w-full h-10 flex items-center justify-center' >
        <span>{logoutIcon}</span>
      </Link>
    </aside>
  )
}

export default Sidebar