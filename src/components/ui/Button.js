import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utility/utlis";

const buttonVariants = cva(
  "flex items-center justify-center font-medium w-full",
  {
    variants: {
      variant: {
        base: "bg-primary-500  text-white rounded-md hover:bg-primary-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2.5",
        gray: "bg-gray-200  text-gray-800 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2.5 ",
        outline:
          "border border-solid border-primary-700 text-primary-700 rounded-md hover:bg-primary-600  hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2.5",
        grayOutlined:
          "border border-solid border-gray-200 text-gray-800 rounded-md hover:bg-gray-300  transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2.5",
        link: "bg-transparent  underline-none  text-primary-500 hover:bg-transparent ",
        disabled:
          "bg-primary-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed",
      },
      size: {
        base: "px-5 py-2.5  text-sm h-fit",
        xs: "px-3 py-2 text-xs h-fit",
        sm: " px-6 py-2 text-sm h-fit",
        lg: " px-7 py-3  text-lg h-fit",
        xl: "px-8 py-3.5 text-2xl h-fit",
      },
      icon: {
        base: "",
        iconOnly: "rounded-full p-2",
      },
    },

    defaultVariants: {
      variant: "base",
      size: "base",
      icon: "base",
    },
  }
);



const Button = (
  (
    {
      className,
      children,
      href,
      variant,
      size,
      icon,
      leftIcon,
      rightIcon,
      iconOnly,
      ...props
    },
    ref
  ) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, icon, className }),
          `${(leftIcon || rightIcon) && "gap-2.5"} ${iconOnly && "iconOnly "}`
        )}
        ref={ref}
        {...props}
      >
        {iconOnly ? (
          <>{iconOnly}</>
        ) : (
          <>
            {leftIcon && <span>{leftIcon}</span>}
            {icon !== "iconOnly" && <span>{children}</span>}
            {rightIcon && icon !== "iconOnly" && <span>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };