import React from "react";
import {
  FooterHolder,
  DesktopFooter,
  MobileFooter,
  ImageLink,
  IconImage,
  MobileIconImage,
} from "./Footer.styles";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedin.svg";
import overview from "../../images/mobile/overview-light-mobile.svg";
import portfolio from "../../images/mobile/portfolio-light-mobile.svg";
import summary from "../../images/mobile/summary-light-mobile.svg";
import search from "../../images/mobile/search-light-mobile.svg";

const Footer = (props) => {
  return (
    <>
      <FooterHolder>
        <DesktopFooter>
          <ImageLink
            href="https://github.com/joseguera/crypto-app"
            target="_blank"
            rel="noreferrer"
          >
            <IconImage src={github} alt="github" />
          </ImageLink>
          <ImageLink
            href="https://www.linkedin.com/in/jose-oseguera-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <IconImage src={linkedIn} alt="linkedIn" />
          </ImageLink>
        </DesktopFooter>
        <MobileFooter>
          <ImageLink>
            <MobileIconImage src={overview} alt="Overview" />
          </ImageLink>
          <ImageLink>
            <MobileIconImage src={portfolio} alt="Portfolio" />
          </ImageLink>
          <ImageLink>
            <MobileIconImage src={summary} alt="Summary" />
          </ImageLink>
          <ImageLink>
            <MobileIconImage src={search} alt="Search" />
          </ImageLink>
        </MobileFooter>
      </FooterHolder>
    </>
  );
};

export default Footer;
