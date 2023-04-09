# react-kfc-menu

> A react menu that inspired by KFC menu and functions like it.
> this package works in conjunction with <a href="https://www.npmjs.com/package/react-tabs-scrollable" target="_blank" rel="noopener"><span>react-tabs-scrollable</span> </a>, so in order to use this package you have to install <a href="https://www.npmjs.com/package/react-tabs-scrollable" target="_blank" rel="noopener"><span>react-tabs-scrollable</span></a> to use its tabs in the menu.

> I took the idea while I was exlporing the KFC menu on their website and I liked the idea and I thought it's practical and simple and it can be used on restaurants and cafes menu.

[![NPM](https://img.shields.io/npm/v/react-kfc-menu.svg)](https://www.npmjs.com/package/react-kfc-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-kfc-menu
yarn add react-kfc-menu
```

## Demo

### <a href="https://react-kfc-menu.vercel.app" target="_blank" rel="noopener"><span>Demo</span> </a>

## How it works

> I'm using a fixed indicator div inside the blocks' container so I can indicate if a block is overlaping the indicator so I can determine where in the page is the selected block located passed on that indicator.
> When you click on a tab the page will scroll to that indicator position + the current position of that block.

## Usage

```jsx
import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import { Menu, MenuBlock } from "react-kfc-menu";
import "react-tabs-scrollable/dist/rts.css";

function App() {
  const [activeTab, setActiveTab] = React.useState(10);

  // define a onClick function to bind the value on tab click
  const menuRef = (React.useRef < HTMLDivElement) | (any > null);
  const onTabClick = (e, index) => {
    setActiveTab(index);
    menuRef.current?.scrollSelectedToBlock(index);
  };

  const onBlockIntersection = (index) => {
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
```

## API

### Menu

<table>
    <tr>
        <td>Name</td>
        <td>Default</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td><code>activeBlock*</code> </td>
        <td>-</td>
        <td>integer</td>
        <td>the selected block value which must be passed to the commponent, and it's the same as activeTab state (I'm using it just to know what is the initial state of the block so I can scroll to it on the first mount)</td>
    </tr>
    <tr>
        <td><code>onBlockIntersection*</code></td>
        <td>-</td>
        <td>function</td>
        <td> <code>function(event, value) =&gt; void</code> callback function fires on block intersection.
        When you scroll to a certain block this function fires. It has two props, the first one is the event object of window.onscroll function the second one is the intersected block index</td>
    </tr>
    <tr>
        <td><code>action*</code></td>
        <td>-</td>
        <td>ref</td>
        <td>react ref fires when the component mounts. you must use it in order to use the scrollSelectedToBlock function inside onTabClick function and pass the index to it in order to scroll to the block when you click the tabs: <br />
                <br />  <code>ref.current.scrollSelectedToBlock(index)</code> </div> 
        <br/>
        <span></span>
     </td>
    </tr>
        <tr>
        <td><code>containerClassName</code></td>
        <td>-</td>
        <td>string</td>
        <td>sets the container className of the blocks</td>
    </tr>
      </tr>
        <tr>
        <td><code>indicatorClassName</code></td>
        <td>-</td>
        <td>string</td>
        <td> sets the indicator className </td>
    </tr>
      </tr>
        <tr>
        <td><code>indicatorTopPostion</code></td>
        <td>80</td>
        <td>integer</td>
        <td> sets the top position of the indicator  </td>
    </tr>
     <tr>
        <td><code>showIndicator</code></td>
        <td>false</td>
        <td>indicator</td>
        <td> if you want to show the indicator so you can know where it's exactly located in the page so you can customize its position  </td>
    </tr>
     <tr>
        <td><code>scrollBahavior</code></td>
        <td>"instant"</td>
        <td>string</td>
        <td>  the bahavior of window.scrollTo() function that I use it to scroll to the selected block.
            default instant but you can change it to "auto" or "smooth"
          </td>
    </tr>
</table>

### MenuBlock

<table>
    <tr>
        <td>Name</td>
        <td>Default</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
     <tr>
        <td><code>className</code> </td>
        <td>-</td>
        <td>string</td>
        <td>sets the className of MenuBlocks container div</td>
    </tr>
    <tr>
        <td><code>{...props}</code> </td>
        <td>-</td>
        <td>object</td>
        <td>I'm usign props spread operator so basically you can use anything </td>
    </tr>

</table>

> Please let me see your reviews and if there're any features you want me to add to them

> If you liked this project consider <a href="https://www.buymeacoffee.com/Mooder" target="_blank" rel="noopener"><span>buying me a coffe</span> </a>

## License

MIT © [Mohammed Aliwi](https://github.com/Mood-al)
