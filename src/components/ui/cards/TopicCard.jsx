import React from 'react'
import { rightIcon } from '../../../assets/svgs/svgs'

const TopicCard = ({icon,title,bg_color}) => {
  return (
    <>
    <li className={`w-full flex items-center gap-2 cursor-pointer p-1 transition-all border-b-2`}>
            <span className={`w-16 h-16 rounded-full flex items-center ${bg_color} justify-center transition-transform transform group-hover:scale-up"`} >
              {icon}
            </span>
            <h2 className='text-xl font-medium' >
              {title}
            </h2>
            <span className={`ml-auto w-6 h-6 flex items-center justify-center rounded-full ${bg_color}`} >
              {rightIcon}
            </span>
          </li>
    </>
  )
}

export default TopicCard