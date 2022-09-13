import React from "react";
import {
  CryptoSummaryHolder,
  CryptoTitle,
  CryptoContent,
  CryptoIcon,
  CryptoImg,
  CryptoName,
  CryptoText,
  CryptoSite,
  CryptoLink,
  Symbol,
  LinkCryptoIcon
} from "./CryptoSummary.styles";
import linkIcon from "../../images/awesome-link.svg";

const CryptoSummary = (props) => {
  return (
    <CryptoSummaryHolder>
      <CryptoTitle>
        <CryptoContent>
          <CryptoIcon>
            <CryptoImg
              src={props.profile.image.small}
              alt={props.profile.name}
            />
          </CryptoIcon>
          <CryptoName>
            <CryptoText>
              {props.profile.name}
              {props.profile.name.length > 7 ? (
                <>
                  <br />
                  <br />
                </>
              ) : (
                " "
              )}
              <Symbol>({props.profile.symbol})</Symbol>
            </CryptoText>
          </CryptoName>
        </CryptoContent>
      </CryptoTitle>
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
