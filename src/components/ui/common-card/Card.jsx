import React from 'react'

const Card = ({children,className}) => {
  return (
    <div className={`w-full h-full shadow-md bg-[#fff] rounded-md ${className}`}>
        {children}
    </div>
  )
}

export default Card