import React from "react";
import { Bar } from 'components'
import { ProgressBarHolder, ProgressBarLabel, LabelTextStart, LabelTextEnd } from './ProgressBar.styles'
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
                    <LabelTextEnd>&#x25CF; {(percentChange < 0) ? 100 : 100 - percentChange}%</LabelTextEnd>
                </ProgressBarLabel>
                <Bar percentStyle={percentStyle} />
            </ProgressBarHolder>
        </>
    )
}

export default ProgressBar;