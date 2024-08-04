import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCard = () => {
  return (
    <>
            <div className='flex items-center justify-between p-2 h-full' >
          <span className='flex flex-col h-full justify-between' >
    <h3 className='text-md'>Net Profit</h3>
    <h1 className='text-2xl sm:text-5xl' >$6759.25</h1>
    <p className='text-sm' >3%</p>
          </span>
          <span className='h-28 flex flex-col gap-2'>
          <CircularProgressbar strokeWidth={10} value={70} text={`${70}%`} />
          <p className='text-xs text-center' >*The values here has been rounded off</p>
          </span>
        </div>
    </>
  )
}

export default ProgressCard