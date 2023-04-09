import React from "react";
interface MenuBlockProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
  props?: React.ReactNode;
}
const MenuBlock = React.forwardRef(
  ({ className, ...props }: MenuBlockProps, ref) => {
    return (
      <div
        {...props}
        className={`${className || ""} rkm___block___container`}
        ref={ref as React.RefObject<HTMLDivElement>}
        // style={{ padding: "1rem", ...(props?.style ? props?.style : {}) }}
      >
        {props.children}
      </div>
    );
  }
);
export default MenuBlock;
