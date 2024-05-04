import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "medium", className, ...props }, ref) => {
    const classes = twMerge(
      "flex items-center justify-center rounded-md px-4 py-2 font-medium text-sm",
      variant === "primary" &&
        "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
      variant === "secondary" &&
        "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
      size === "small" && "text-xs px-2 py-1",
      size === "large" && "text-lg px-6 py-3",
      className
    );

    return (
      <button ref={ref} className={classes} {...props}>
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
