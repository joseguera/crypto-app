import React from "react";
import { ProgressBarContainer, ProgressLevel } from "./Bar.styles"

type Props = {
  percentStyle: Object,
}

const Bar: React.FunctionComponent<Props> = ({ percentStyle }) => {
    return (
      <ProgressBarContainer>
        <ProgressLevel style={percentStyle}></ProgressLevel>
      </ProgressBarContainer>
    );
}

export default Bar;