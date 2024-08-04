import React from 'react'
import { rightIcon } from '../../../assets/svgs/svgs'

const TopicCard = ({icon,title}) => {
  return (
    <>
    <li className='w-full flex items-center gap-2 cursor-pointer hover:bg-primary-500/5 p-1 transition-all'>
            <span className='w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center' >
              {icon}
            </span>
            <h2 className='text-lg' >
              {title}
            </h2>
            <span className='ml-auto w-6 h-6 flex items-center justify-center rounded-full bg-primary-600' >
              {rightIcon}
            </span>
          </li>
    </>
  )
}

export default TopicCard