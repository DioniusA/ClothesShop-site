import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#70A38D] text-[#F1F4F0] hover:bg-[#4D7A64]", // muted green
        destructive: "bg-[#B16A4F] text-[#F1F4F0] hover:bg-[#8C5E42]", // muted orange
        outline: "border-2 border-[#70A38D] bg-transparent text-[#70A38D] hover:bg-[#F1F4F0]", // green outline
        secondary: "bg-[#4D7A64] text-[#F1F4F0] hover:bg-[#70A38D]", // dark green
        ghost: "hover:bg-[#B16A4F] hover:text-[#F1F4F0]", // orange hover
        link: "text-[#70A38D] underline-offset-4 hover:underline", // green link
      },
      size: {
        default: "h-12 px-8 py-3 text-lg",
        sm: "h-8 rounded-md px-4 text-sm",
        lg: "h-14 rounded-md px-12 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
