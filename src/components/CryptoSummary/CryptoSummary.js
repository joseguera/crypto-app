import React from "react";
import { CryptoTitleIcon } from "components";
import {
  CryptoSummaryHolder,
  CryptoSite,
  CryptoLink,
  LinkCryptoIcon
} from "./CryptoSummary.styles";
import linkIcon from "../../images/awesome-link.svg";

const CryptoSummary = (props) => {
  return (
    <CryptoSummaryHolder>
      <CryptoTitleIcon profile={props.profile} />
      <CryptoSite>
        <a
          href={props.profile.links.homepage[0]}
          target="_blank"
          rel="noreferrer"
        >
          <LinkCryptoIcon src={linkIcon} alt="link icon" />
        </a>
        <CryptoLink
          href={props.profile.links.homepage[0]}
          target="_blank"
          rel="noreferrer"
        >
          {props.profile.links.homepage[0].slice(8, -1)}
        </CryptoLink>
      </CryptoSite>
    </CryptoSummaryHolder>
  );
};

export default CryptoSummary;
