import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openSearch } from "../../features/search/searchSlice";
import { Link } from "react-router-dom";
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
import overviewSelected from "../../images/mobile/overview-green-mobile.svg";
import portfolio from "../../images/mobile/portfolio-light-mobile.svg";
import portfolioSelected from "../../images/mobile/portfolio-green-mobile.svg";
import summary from "../../images/mobile/summary-light-mobile.svg";
import summarySelected from "../../images/mobile/summary-green-mobile.svg";
import search from "../../images/mobile/search-light-mobile.svg";
import searchSelected from "../../images/mobile/search-green-mobile.svg";

const Footer = (props) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const selected = () => {
    setActive(!active);
  };

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
          <Link to="/">
            <MobileIconImage
              onClick={selected}
              src={active ? overviewSelected : overview}
              alt="Overview"
            />
          </Link>
          <Link to="/portfolio">
            <MobileIconImage
              onClick={selected}
              src={active ? portfolioSelected : portfolio}
              alt="Portfolio"
            />
          </Link>
          <ImageLink>
            <MobileIconImage
              onClick={selected}
              src={active ? summarySelected : summary}
              alt="Summary"
            />
          </ImageLink>
          <Link to="/search">
            <MobileIconImage
              onClick={() => dispatch(openSearch())}
              src={active ? searchSelected : search}
              alt="Search"
            />
          </Link>
        </MobileFooter>
      </FooterHolder>
    </>
  );
};

export default Footer;
