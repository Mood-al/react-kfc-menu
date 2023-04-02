import React from 'react'

const MenuContainer = ({ children }) => {
  const blockRef = React.useRef([])
  const scrollSelectedToBlock = (index) => {
    const blockRects = blockRef.current[index].getBoundingClientRect()
    window.scrollTo({
      top: blockRects.top + document.documentElement.scrollTop - 100,
      behavior: 'instant',
    })
  }
  console.log(children)
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        console.log(child)
        if (!React.isValidElement(child)) {
          return null
        }

        // if (typeof child.type !== 'function') {
        //   throw Error(
        //     "you must pass Tabs and Menu Components as children. you can't pass html element",
        //   )
        // }
        return (
          <>
            {React.cloneElement(child, {
              blockRef,
              onTabClick: (index) => {
                scrollSelectedToBlock(index)
              },
            })}
          </>
        )
      })}
    </div>
  )
  // return <div>{children}</div>
}

export default MenuContainer
