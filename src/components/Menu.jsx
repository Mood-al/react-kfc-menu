import React, { useEffect } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
const Menu = ({
  children,
  onBlockInterSection = () => null,
  containerClassName = '',
  action,
}) => {
  const blockRef = React.useRef([])
  const matches = useMediaQuery('(max-width: 991.98px)')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (enteries) => {
        enteries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            onBlockInterSection(+entry.target.id)
          }
        })
      },
      {
        threshold: matches ? 0.1 : 0.9,
        // // threshold: 0.9,
        ...(!matches && {
          rootMargin: `${Math.floor(
            (blockRef.current?.[0]?.getBoundingClientRect()?.height * 9) / 100,
          )}px`,
        }),
      },
    )
    blockRef.current?.forEach((block, idx) => {
      observer.observe(block)
    })
  }, [matches])

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
