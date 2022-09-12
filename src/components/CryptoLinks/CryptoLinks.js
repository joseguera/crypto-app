import React from "react";
import _ from "lodash";
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
  let ButtonRef1 = {};
  let ButtonRef2 = {};
  let ButtonRef3 = {};

  let SpanRef1 = {};
  let SpanRef2 = {};
  let SpanRef3 = {};

  const buttonRefs = [
    (ButtonRef1 = React.createRef()),
    (ButtonRef2 = React.createRef()),
    (ButtonRef3 = React.createRef()),
  ];

  const spanRefs = [
    (SpanRef1 = React.createRef()),
    (SpanRef2 = React.createRef()),
    (SpanRef3 = React.createRef()),
  ];

  const copyIconColor =
    props.selectedTheme.name === "dark-theme" ? copyIconDark : copyIconLight;

  const copyToClipboard = (currentRef, currentSpan) => {
    const copyText = currentRef.current.alt;
    navigator.clipboard.writeText(copyText);

    if (
      currentSpan === SpanRef1 ||
      currentSpan === SpanRef2 ||
      currentSpan === SpanRef3
    ) {
      currentSpan.current.childNodes[0].textContent = "Copied";
    }
  };

  const outFunction = (currentSpan) => {
    if (
      currentSpan === SpanRef1 ||
      currentSpan === SpanRef2 ||
      currentSpan === SpanRef3
    ) {
      currentSpan.current.childNodes[0].textContent = "Click to Copy";
    }
  };

  const linkArray = props.siteLinks.filter((link) => link);
  const arrayLength = linkArray.length > 3 ? 3 : linkArray.length;

  return (
    <LinkHolder>
      {props.siteLinks &&
        _.zipWith(
          linkArray.slice(0, arrayLength),
          buttonRefs.slice(0, arrayLength),
          spanRefs.slice(0, arrayLength),
          (site, ref, tooltip) => {
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
                    onClick={() => copyToClipboard(ref, tooltip)}
                    onMouseOut={() => outFunction(tooltip)}
                  >
                    <span className="tooltiptext" ref={tooltip}>
                      Click to Copy
                    </span>
                    <CopyIcon ref={ref} src={copyIconColor} alt={site} />
                  </div>
                </Tooltip>
              </LinkContainer>
            );
          }
        )}
    </LinkHolder>
  );
};

export default CryptoLinks;
