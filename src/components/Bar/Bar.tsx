import React from "react";
import { ProgressBarContainer, ProgressLevel } from "./Bar.styles"

type Props = {
  percentStyle: Object,
}

const Bar = ({ percentStyle }: Props) => {
    return (
      <ProgressBarContainer>
        <ProgressLevel style={percentStyle}></ProgressLevel>
      </ProgressBarContainer>
    );
}

export default Bar;