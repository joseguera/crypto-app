import React from "react";
import { ProgressBarContainer, ProgressLevel } from "./Bar.styles"

const Bar = (props) => {
    return (
      <ProgressBarContainer>
        <ProgressLevel style={props.percentStyle}></ProgressLevel>
      </ProgressBarContainer>
    );
}

export default Bar;