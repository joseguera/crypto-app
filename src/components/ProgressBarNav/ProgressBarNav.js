import React from "react";
import { ProgressBarHolder, ProgressBarLevel } from './ProgressBarNav.styles'

const ProgressBarNav = (props) => {
    const percentStyle = {
        width: props.percent || props.percentPortfolio
    }

    const background = {
        background: (props.percent) ? "#2172e5" : "#1AD761"
    }

    return (
        <>
            <ProgressBarHolder style={background}>
                <ProgressBarLevel style={percentStyle} />
            </ProgressBarHolder>
        </>
    )
}

export default ProgressBarNav;