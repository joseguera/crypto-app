import React from "react";
import { ProgressBarHolder, ProgressBarLabel, LabelText, ProgressBarContainer, ProgressLevel } from './ProgressBar.styles'

const ProgressBar = (props) => {
    return (
        <>
            <ProgressBarHolder>
                <ProgressBarLabel>
                    <LabelText></LabelText>
                    <LabelText></LabelText>
                </ProgressBarLabel>
                <ProgressBarContainer>
                    <ProgressLevel></ProgressLevel>
                </ProgressBarContainer>
            </ProgressBarHolder>
        </>
    )
}

export default ProgressBar;