import * as React from "react";
import { cn } from "@/utility/utlis";



const Checkbox = (
  (
    { className, parentClass, label, name, value, ids, labelClass, ...props },
    ref
  ) => (
    <>
      <div
        className={`flex items-center px-4 border  rounded-lg border-gray-300 hover:border-primary-500 bg-gray-50 ${parentClass}`}
      >
        <input
          id={ids ? ids + label : label}
          name={name}
          value={value}
          type='checkbox'
          ref={ref}
          className={cn(
            " shrink-0 text-sm bg-gray-50 rounded-sm border border-gray-300  ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            className
          )}
          {...props}
        />
        <label
          htmlFor={ids ? ids + label : label}
          className={cn(
            "w-full py-2 ms-2.5 text-sm font-medium text-gray-900 ",
            labelClass
          )}
        >
          {label}
        </label>
      </div>
    </>
  )
);
Checkbox.displayName = "CheckBox";

export { Checkbox };
