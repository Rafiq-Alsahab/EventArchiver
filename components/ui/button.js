import * as React from "react"



const Button = React.forwardRef(({children , className, type, ...props }, ref) => {
  return (
    <button
      type={type}
      className={
        "w-full bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center gap-2 py-3 rounded-lg" + 
        className
      }
      ref={ref}
      {...props}
    >
{children}
</button>
  )
})
Button.displayName = "Button"

export { button }
