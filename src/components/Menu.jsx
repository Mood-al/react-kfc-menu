import React, { useEffect } from 'react'
import { debounce } from '../../utils/debounce'

const Menu = ({
  children,
  onBlockInterSection = () => null,
  containerClassName = '',
  indicatorClassName = '',
  indicatorTopPostion = 80,
  showIndicator = false,
  scrollBahavior = 'auto',
  action,
}) => {
  const blockRef = React.useRef([])
  const indicatorRef = React.useRef(null)

  let idxArray = []
  var prev = null
  const handleScroll = debounce((event) => {
    idxArray = []
    const indicatorRects = indicatorRef.current.getBoundingClientRect()

    const id = document.elementFromPoint(indicatorRects.x, indicatorRects.y)
      .dataset.id

    if (prev !== id) {
      onBlockInterSection(+id)
    }

    prev = id
    // const idx = document.elementFromPoint(indicatorRects.x, indicatorRects.y).data
    // blockRef.current.forEach((item, idx) => {
    //   const blockRects = item.getBoundingClientRect()

    //   if (blockRects.top <= indicatorRects.bottom) {
    //     idxArray.push(idx)
    //     console.log(idxArray.length - 1)
    //     // if (idx === array.length - 1) {
    //     // onBlockInterSection(idxArray.length - 1)
    //     // }
    //   }
    // })
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollSelectedToBlock = (index) => {
    const blockRects = blockRef.current[index].getBoundingClientRect()

    const blockToTopGap =
      document.documentElement.scrollTop +
      blockRef.current[0].getBoundingClientRect().top

    window.scrollTo({
      top: document.documentElement.scrollTop + blockRects.top - blockToTopGap,

      behavior: scrollBahavior,
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
      <div
        className={indicatorClassName}
        ref={indicatorRef}
        style={{
          position: 'fixed',
          top: indicatorTopPostion,
          zIndex: '-1',
          ...(showIndicator && {
            height: 4,
            background: 'red',
            zIndex: '99',
            width: '100%',
          }),
        }}
      ></div>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null
        }

        return (
          <div style={{ position: 'relative' }}>
            {React.cloneElement(child, {
              className: `id-${index} ${
                child.props.className ? child.props.className : ''
              }`,
              ['data-id']: index,
              ref: (ref) => (blockRef.current[index] = ref),
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Menu
