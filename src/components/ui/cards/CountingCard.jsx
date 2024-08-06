import React from 'react'
import { downIcon, upIcon } from '../../../assets/svgs/svgs'

const CountingCard = ({icon,title,number,percentage,bg}) => {
  return (
    <>
    <div className={`flex flex-col p-2 w-full min-h-20 rounded-md gap-1`} >
        <span className={`w-12 h-12 shadow-inner flex items-center justify-center rounded-md ${percentage > 0 ? 'bg-green-900' : 'bg-red-900' }  `} >
          {icon}
        </span>
        <p className='text-sm font-semibold' >
          {title}
        </p>
        <span className='flex w-full justify-between items-end mt-3' >
          <h1 className='text-2xl' >{number}</h1>
          <p className='flex gap-2 items-center' ><span>{percentage > 0 ? upIcon : downIcon}</span> {percentage}%</p>
        </span>
      </div>
    </>
  )
}

export default CountingCard