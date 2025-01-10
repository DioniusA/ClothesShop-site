import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-md border-2 border-teal-400 bg-teal-50 px-4 py-3 text-sm text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
