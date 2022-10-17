import React from "react";

export default function PortfolioModal(props) {
    return (
        <>
            <div>Modal Text</div>
            <div onClick={() => props.closeModal()} >Close</div>
            <div>Save and Continue</div>
        </>
    );
};