import React from "react";
import {
  LinkHolder,
  LinkContainer,
  Site,
  LinkIcon,
  CopyIcon,
  Tooltip,
} from "./CryptoLinks.styles";
import linkIcon from "../../images/awesome-link.svg";
import copyIconDark from "../../images/feather-copy-dark.svg";
import copyIconLight from "../../images/feather-copy-light.svg";

const CryptoLinks = (props) => {
  const linkArray = props.siteLinks.filter((link) => link);
  const arrayLength = linkArray.length > 3 ? 3 : linkArray.length;
  const spanRef = linkArray.map(() => React.createRef());
  const buttonRef = linkArray.map(() => React.createRef());

  const copyIconColor =
    props.selectedTheme.name === "dark-theme" ? copyIconDark : copyIconLight;

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
    <LinkHolder>
      {props.siteLinks &&
        linkArray.slice(0, arrayLength).map((site, index) => {
          return (
            <LinkContainer key={site}>
              <Site href={site} target="_blank" rel="noreferrer">
                <LinkIcon src={linkIcon} alt="link icon" />
              </Site>
              <Site href={site} target="_blank" rel="noreferrer">
                {site}
              </Site>
              <Tooltip>
                <div
                  className="tooltip"
                  onClick={() =>
                    copyToClipboard(buttonRef[index], spanRef[index])
                  }
                  onMouseOut={() => outFunction(spanRef[index])}
                >
                  <span className="tooltiptext" ref={spanRef[index]}>
                    Click to Copy
                  </span>
                  <CopyIcon
                    ref={buttonRef[index]}
                    src={copyIconColor}
                    alt={site}
                  />
                </div>
              </Tooltip>
            </LinkContainer>
          );
        })}
    </LinkHolder>
  );
};

export default CryptoLinks;
