import React from "react";
interface MenuBlockProps {
  children: React.ReactNode;
  className?: string;
  props?: React.ReactNode;
}
const MenuBlock = React.forwardRef(
  ({ className, ...props }: MenuBlockProps, ref) => {
    return (
      <div
        {...props}
        className={`${className || ""}`}
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        {props.children}
      </div>
    );
  }
);
export default MenuBlock;
