import React from "react";
interface IProps {
    children: React.ReactNode;
    onBlockIntersection: (e: any, id: number) => void;
    activeBlock: number;
    containerClassName?: string;
    indicatorTopPostion?: number;
    indicatorClassName?: string;
    showIndicator?: boolean;
    scrollBahavior?: any;
    action?: any;
}
declare const Menu: React.FC<IProps>;
export default Menu;
