import React from "react";
import { NextArrow } from "./SideArrow.styles";

const SideArrow = (props) => {
  const switchGraph = () => {
    props.switchGraph();
  };

  const direction = { transform: "rotate(180deg)" };

  return (
    <>
      <NextArrow
        onClick={() => switchGraph()}
        style={props.direction === "right" ? direction : {}}
      />
    </>
  );
};

export default SideArrow;
