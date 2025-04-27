import * as React from "react"



const button = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={
        "w-full bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center gap-2 py-3 rounded-lg" + 
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
button.displayName = "Button"

export { button }
