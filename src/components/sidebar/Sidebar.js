import React from 'react'
import { bagIcon, chartIcon, homeIcon, logoIcon, logoutIcon, notepadIcon, walletIcon } from '../../assets/svgs/svgs'
import { Link, NavLink } from 'react-router-dom'
import useOutsideClick from '../../hooks/useOutsideClick';
import { useDispatch, useSelector } from 'react-redux';
import { drawer } from '../../store/userSlice';

const Sidebar = () => {

  const isOpen = useSelector(state => state?.user?.drawerIsOpen);
  const dispatch = useDispatch();

  const closeDropdown = () => dispatch(drawer(false));
  const dropdownRef = useOutsideClick(closeDropdown);

  return (
    <aside ref={dropdownRef} className={`w-16 flex flex-col h-full items-center transition-all bg-white fixed top-0 left-0 z-50 sm:relative ${isOpen ? "translate-x-0" : "-translate-x-16"} sm:translate-x-0`} >
      <Link className='h-14 w-full flex items-center justify-center bg' >{logoIcon}</Link>
      <ul className='flex flex-col gap-2 mt-2 w-full items-center justify-center' >
        <li className='w-full h-12' >
          <NavLink to={"/"}  className='w-full h-full hover:bg-primary-900/35 transition-all  flex items-center justify-center' >
          {homeIcon}
          </NavLink>
        </li>
        <li className=' w-full h-12' >
          <NavLink to={"/progress"} className='w-full h-full hover:bg-primary-900/35 transition-all flex items-center justify-center' >{chartIcon}</NavLink>
        </li>
        <li className=' w-full h-12' >
          <NavLink  to={"/data"} className='w-full h-full hover:bg-primary-900/35 transition-all flex items-center justify-center' >
          {notepadIcon}
          </NavLink>
        </li>
        <li className=' w-full h-12' >
          <NavLink to={"/wallets"} className='w-full h-full hover:bg-primary-900/35 transition-all flex items-center justify-center' >
          {walletIcon}
          </NavLink>
        </li>
        <li className=' w-full h-12' >
          <NavLink to={"/cart"} className='w-full h-full hover:bg-primary-900/35 transition-all flex items-center justify-center' >
          {bagIcon}
          </NavLink>
        </li>
      </ul>
      <Link className='mt-auto sticky bottom-0  w-full h-10 flex items-center justify-center' >
        <span>{logoutIcon}</span>
      </Link>
    </aside>
  )
}

export default Sidebar