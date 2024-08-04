import React from 'react'
import { starIcon } from '../../../assets/svgs/svgs'

const ReviewCard = ({name,stars,review,profile_img}) => {
  return (
    <>
    <li>
            <div className='flex flex-col gap-1 border-b border-1 pb-1' >
              <span className='flex gap-2' >
                <span className='w-6 h-6 bg-primary-600 rounded-full flex' >
                  <img src={profile_img} alt='profile' />
                </span>
                <h4 className='text-md' >{name}</h4>
              </span>
                <ul className='flex' >
                  {[1,2,3,4,5].map((item,index)=>(<li>{starIcon}</li>))}
                </ul>
                <p className='text-xs' >{review}</p>
            </div>
          </li>
    </>
  )
}

export default ReviewCard