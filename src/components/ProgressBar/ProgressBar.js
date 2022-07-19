import React from "react";
import { ProgressBarHolder, ProgressBarLabel, LabelTextStart, LabelTextEnd, ProgressBarContainer, ProgressLevel } from './ProgressBar.styles'
import { roundToNumber } from "util/numberUtil";

const ProgressBar = (props) => {
    const percentChange = roundToNumber(props.priceChange24hPercent, 0);
    const percentStyle = {
        width: percentChange
    }
    return (
        <>
            <ProgressBarHolder>
                <ProgressBarLabel>
                    <LabelTextStart>&#x25CF; {percentChange}%</LabelTextStart>
                    <LabelTextEnd>&#x25CF; {100 - percentChange}%</LabelTextEnd>
                </ProgressBarLabel>
                <ProgressBarContainer>
                    <ProgressLevel style={percentStyle}></ProgressLevel>
                </ProgressBarContainer>
            </ProgressBarHolder>
        </>
    )
}

export default ProgressBar;