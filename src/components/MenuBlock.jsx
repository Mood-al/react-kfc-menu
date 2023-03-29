import React from 'react'

const MenuBlock = React.forwardRef(({ ...props }, ref) => {
  return (
    <div
      {...props}
      className={`${props?.className || ''} rkm___block___container`}
      ref={ref}
    >
      {props.children}
    </div>
  )
})
export default MenuBlock
