import React from "react";
import { TooltipHolder, CopyIcon } from "./ToolTip.styles";
import copyIconDark from "../../images/feather-copy-dark.svg";
import copyIconLight from "../../images/feather-copy-light.svg";

export default class ToolTip extends React.Component {
  copyIconColor =
    this.props.selectedTheme.name === "dark-theme"
      ? copyIconDark
      : copyIconLight;

  buttonRef = React.createRef();
  spanRef = React.createRef();

  copyToClipboard = (currentRef, currentSpan) => {
    const copyText = currentRef.current.alt;
    navigator.clipboard.writeText(copyText);

    if (currentSpan) {
      return (currentSpan.current.childNodes[0].textContent = "Copied");
    }
  };

  outFunction = (currentSpan) => {
    if (currentSpan) {
      return (currentSpan.current.childNodes[0].textContent = "Click to Copy");
    }
  };

  render() {
    return (
      <TooltipHolder>
        <div
          className="tooltip"
          onClick={() =>
            this.copyToClipboard(this.buttonRef, this.spanRef)
          }
          onMouseOut={() => this.outFunction(this.spanRef)}
        >
          <span className="tooltiptext" ref={this.spanRef}>
            Click to Copy
          </span>
          <CopyIcon
            ref={this.buttonRef}
            src={this.copyIconColor}
            alt={this.props.site}
          />
        </div>
      </TooltipHolder>
    );
  }
}
