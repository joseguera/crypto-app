import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { TooltipHolder, CopyIcon } from "./ToolTip.styles";
import copyIconDark from "../../images/feather-copy-dark.svg";
import copyIconLight from "../../images/feather-copy-light.svg";

export default function ToolTip(props) {
  const themeColor = useSelector((state) => state.theme.value);
  const copyIconColor = themeColor ? copyIconLight : copyIconDark;

  const buttonRef = useRef(null);
  const spanRef = useRef(null);

  const copyToClipboard = (currentRef, currentSpan) => {
    const copyText = currentRef.current.alt;
    navigator.clipboard.writeText(copyText);

    if (currentSpan) {
      return (currentSpan.current.childNodes[0].textContent = "Copied");
    }
  };

  const outFunction = (currentSpan) => {
    if (currentSpan) {
      return (currentSpan.current.childNodes[0].textContent = "Click to Copy");
    }
  };

  return (
    <TooltipHolder>
      <div
        className="tooltip"
        onClick={() => copyToClipboard(buttonRef, spanRef)}
        onMouseOut={() => outFunction(spanRef)}
      >
        <span className="tooltiptext" ref={spanRef}>
          Click to Copy
        </span>
        <CopyIcon ref={buttonRef} src={copyIconColor} alt={props.site} />
      </div>
    </TooltipHolder>
  );
}
