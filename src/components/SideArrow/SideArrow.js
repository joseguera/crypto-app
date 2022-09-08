import React from "react";
import { NextArrow } from './SideArrow.styles';

const SideArrow = (props) => {
    return (
        <>
            {(props.direction === "left") ? <NextArrow /> : <NextArrow style={{ "transform" : "rotate(180deg)" }} /> }
        </>
    )
}

export default SideArrow;