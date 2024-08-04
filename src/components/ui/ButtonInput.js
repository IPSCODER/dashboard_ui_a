import React from "react";
import { cn } from "@/utility/utlis";



const ButtonInput = (
  (
    {
      btnName,
      inputPlaceholder,
      type,
      className,
      inputClassName,
      p_className,
      c_className,
      name,
      label,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <span className='gap-2 flex flex-col'>
        {label && (
          <label className='text-sm font-medium text-gray-900'>{label}</label>
        )}
        <div className={cn("flex", p_className)}>
          <button
            disabled
            className={cn(
              "flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 cursor-pointer",
              className
            )}
          >
            {btnName}
          </button>
          <div className={cn("relative w-full", c_className)}>
            <input
              ref={ref}
              type={type}
              name={name}
              value={value}
              id='linkedin'
              {...props}
              className={cn(
                "block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",
                inputClassName
              )}
              placeholder={inputPlaceholder}
            />
          </div>
        </div>
      </span>
    );
  }
);

export default ButtonInput;