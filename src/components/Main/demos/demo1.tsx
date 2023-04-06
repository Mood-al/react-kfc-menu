import React, { useCallback, useRef, useState } from "react";
import "./bootstrap.css";

// import "./styles/main.css";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import { Menu, MenuBlock } from "react-kfc-menu";

function App() {
  const [activeTab, setActiveTab] = React.useState(10);

  // define a onClick function to bind the value on tab click
  const menuRef = useRef<HTMLDivElement | any>(null);
  const onTabClick = (e, index) => {
    setActiveTab(index);
    menuRef.current?.scrollSelectedToBlock(index);
    console.log(index, "onTabClick");
  };

  const onBlockIntersection = (e, index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="sticky-top bg-light">
        <div className="containr">
          <Tabs activeTab={activeTab} onTabClick={onTabClick}>
            {/* generating an array to loop through it  */}
            {[...Array(20).keys()].map((item) => (
              <Tab key={item}>Tab {item}</Tab>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="row mx-auto justify-content-center">
        <div className="col-md-12">
          <Menu
            // indicatorTopPostion={}
            onBlockIntersection={onBlockIntersection}
            // containerClassName="container"
            activeBlock={activeTab}
            action={menuRef}
          >
            {[...Array(20).keys()].map((item) => (
              <MenuBlock key={item}>
                <div className="display-4">Block {item}</div>{" "}
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
  );
}

export default App;
