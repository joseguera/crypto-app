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
  const [active, setActive] = useState(true)
  const [activeButton, setActiveButton] = useState({
    home: false,
    portfolio: false,
    summary: false,
    search: false
  })
  const dispatch = useDispatch();

  const selected = (id) => {
    let active = {};
    if (id === "home") {
      active = { home: true, portfolio: false, summary: false, search: false };
    }
    if (id === "portfolio") {
      active = { home: false, portfolio: true, summary: false, search: false };
    }
    if (id === "summary") {
      active = { home: false, portfolio: false, summary: true, search: false };
    }
    if (id === "search") {
      active = { home: false, portfolio: false, summary: false, search: true };
    }
    setActiveButton(active)
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
              id="home"
              onClick={(e) => selected(e.target.id)}
              src={activeButton.home ? overviewSelected : overview}
              alt="Overview"
            />
          </Link>
          <Link to="/portfolio">
            <MobileIconImage
              id="portfolio"
              onClick={(e) => selected(e.target.id)}
              src={activeButton.portfolio ? portfolioSelected : portfolio}
              alt="Portfolio"
            />
          </Link>
          <ImageLink>
            <MobileIconImage
              id="summary"
              onClick={(e) => selected(e.id)}
              src={activeButton.summary ? summarySelected : summary}
              alt="Summary"
            />
          </ImageLink>
          <Link to="/search">
            <MobileIconImage
              id="search"
              onClick={(e) => {
                dispatch(openSearch())
                selected(e.target.id)
              }}
              src={activeButton.search ? searchSelected : search}
              alt="Search"
            />
          </Link>
        </MobileFooter>
      </FooterHolder>
    </>
  );
};

export default Footer;
