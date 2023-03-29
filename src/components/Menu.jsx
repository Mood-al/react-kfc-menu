import React, { useEffect } from 'react'

const Menu = ({
  children,
  onBlockInterSection = () => null,
  containerClassName = '',
  activeSection,
  action,
}) => {
  const tabsRef = React.useRef(null)
  const blockRef = React.useRef([])
  useEffect(() => {
    // if (!tabsRef.current) return;
    const observer = new IntersectionObserver(
      (enteries) => {
        //   //   console.log(enteries[0]);
        //   if (enteries[0].isIntersecting) {
        //     onBlockInterSection(, enteries[0]);
        //   }
        //   for (const entry of enteries) {
        //     if (entry.isIntersecting) {
        //       // compare target to element list
        //       const currentIndex = blockRef.current.indexOf(entry.target);
        //       console.log(currentIndex);
        //     }
        //   }
        console.log(`-${blockRef.current[0].getBoundingClientRect().height}px`)
        enteries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            onBlockInterSection(+entry.target.id)
          }
        })
      },
      {
        threshold: 0.9,
        rootMargin: `${
          blockRef.current?.[0]?.getBoundingClientRect()?.height / 2
        }px`,
      },
    )
    blockRef.current?.forEach((block, idx) => {
      observer.observe(block)
    })
  }, [])

  const scrollSelectedToBlock = (index) => {
    const blockRects = blockRef.current[index].getBoundingClientRect()
    window.scrollTo({
      top: blockRects.top + document.documentElement.scrollTop - 100,
      behavior: 'instant',
    })
  }
  React.useImperativeHandle(
    action,
    () => ({
      scrollSelectedToBlock,
    }),
    [scrollSelectedToBlock],
  )

  return (
    <div className={containerClassName}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null
        }

        // const selected = childIndex === activeTab
        // childIndex += 1

        return React.cloneElement(child, {
          ref: (ref) => (blockRef.current[index] = ref),
          //   onClick: (e) => {
          //     onNativeTabClick(e, index)
          //     // eslint-disable-next-line no-unused-expressions
          //     child.props.onClick ? child.props.onClick(e) : null
          //   },
          //   role: 'tab',
          //   'aria-selected': selected ? 'true' : 'false',
          //   id: `tab-${childIndex}`,
          //   tabIndex: selected ? '0' : '-1',
          className: `id-${index} ${
            child.props.className ? child.props.className : ''
          }`,
          id: index,
          //   selected: selected
        })
      })}
    </div>
  )
}

export default Menu
