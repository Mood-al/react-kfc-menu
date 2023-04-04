import React, { useCallback, useRef, useState } from 'react'
import './styles/bootstrap.css'
import './styles/rkm.css'
import './styles/main.css'

import Menu from './components/Menu'
import MenuBlock from './components/MenuBlock'
import { Tabs, Tab } from 'react-tabs-scrollable'
import 'react-tabs-scrollable/dist/rts.css'
import MenuContainer from './components/MenuContainer'
import { Tabs as Tabss } from 'react-testt'
import 'react-testt/dist/style.css'

function App() {
  const [activeTab, setActiveTab] = React.useState(1)

  // define a onClick function to bind the value on tab click
  const menuRef = useRef(null)
  const onTabClick = (e, index) => {
    setActiveTab(index)
    menuRef.current.scrollSelectedToBlock(index)
    console.log(index, 'onTabClick')
  }

  const onBlockInterSection = (index) => {
    console.log(index, 'onBlockInterSection')
    setActiveTab(index)
  }
  return (
    <>
      <Tabss>ddddd</Tabss>
      <div className="sticky-top bg-light">
        <div className="container">
          <Tabs activeTab={activeTab} onTabClick={onTabClick}>
            {/* generating an array to loop through it  */}
            {[...Array(20).keys()].map((item) => (
              <Tab key={item}>Tab {item}</Tab>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="row mx-auto justify-content-center">
        <div className="col-md-9 ">
          <Menu
            onBlockInterSection={onBlockInterSection}
            // containerClassName="container"
            activeSection={activeTab}
            action={menuRef}
          >
            {[...Array(20).keys()].map((item) => (
              <MenuBlock key={item}>
                <div className="display-4">Block {item}</div>{' '}
                <div className="row">
                  {[...Array(8).keys()].map((card) => (
                    <div key={card} className="col-md-3 my-2">
                      <div className="card">
                        <div className="card-body">
                          {card} Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Modi deleniti natus voluptates
                          doloribus voluptate voluptas ab eum dolorem asperiores
                          sequi consequatur magnam architecto iure sed tempora,
                          doloremque nam? Nesciunt, ad!
                          <button className="btn btn-primary d-block w-100 mt-2">
                            order
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </MenuBlock>
            ))}
          </Menu>
        </div>
      </div>
    </>
  )
}

export default App
