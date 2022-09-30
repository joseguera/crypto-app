import React from "react";
import { ToolTip } from "components";
import {
  LinkHolder,
  LinkContainer,
  Site,
  LinkIcon
} from "./CryptoLinks.styles";
import linkIcon from "../../images/awesome-link.svg";

const CryptoLinks = (props) => {
  const linkArray = props.siteLinks.filter((link) => link);
  const arrayLength = linkArray.length > 3 ? 3 : linkArray.length;

  return (
    <LinkHolder>
      {props.siteLinks &&
        linkArray.slice(0, arrayLength).map((site) => {
          return (
            <LinkContainer key={site}>
              <Site href={site} target="_blank" rel="noreferrer">
                <LinkIcon src={linkIcon} alt="link icon" />
              </Site>
              <Site href={site} target="_blank" rel="noreferrer">
                {site}
              </Site>
              <ToolTip site={site} selectedTheme={props.selectedTheme}/>
            </LinkContainer>
          );
        })}
    </LinkHolder>
  );
};

export default CryptoLinks;
