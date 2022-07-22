import React from "react";
import { ProgressBarHolder, ProgressBarLevel } from './ProgressBarNav.styles'

const ProgressBarNav = (props) => {
    const percentStyle = {
        width: props.percent
    }
    return (
        <>
            <ProgressBarHolder>
                <ProgressBarLevel style={percentStyle} />
            </ProgressBarHolder>
        </>
    )
}

export default ProgressBarNav;