import React from "react";

type Props = {
  tt: string;
};

const MyButton = ({ tt }: Props) => {
  return <div>{tt}</div>;
};

export default MyButton;
