import React, { useCallback, useRef, useState } from "react";
import "./styles/bootstrap.css";
import "./styles/rkm.css";
import "./styles/main.css";

import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import { Menu, MenuBlock } from "react-kfc-menu";

import "react-testt/dist/style.css";

function App() {
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const menuRef = useRef<HTMLDivElement | any>(null);
  const onTabClick = (e, index) => {
    setActiveTab(index);
    menuRef.current?.scrollSelectedToBlock(index);
    console.log(index, "onTabClick");
  };

  const onBlockIntersection = (index) => {
    console.log(index, "onBlockIntersection");
    setActiveTab(index);
  };
  return <>ll</>;
}

export default App;
