import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.ComponentProps<"div"> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700": variant === "default",
          "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-[#2A2A2A] dark:text-gray-100 dark:hover:bg-[#333333]": variant === "secondary",
          "border-transparent bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700": variant === "destructive",
          "text-gray-900 border-gray-200 dark:text-gray-100 dark:border-[#2A2A2A]": variant === "outline",
          "border-transparent bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700": variant === "success",
          "border-transparent bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700": variant === "warning",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
