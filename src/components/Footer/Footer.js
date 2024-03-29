import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCloseSearch } from "../../features/search/searchSlice";
import { selectActiveButton } from "../../features/footer/footerSlice";
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
import overviewLight from "../../images/mobile/overview-light-mobile.svg";
import overviewDark from "../../images/mobile/overview-dark-mobile.svg";
import overviewSelected from "../../images/mobile/overview-green-mobile.svg";
import portfolioLight from "../../images/mobile/portfolio-light-mobile.svg";
import portfolioDark from "../../images/mobile/portfolio-dark-mobile.svg";
import portfolioSelected from "../../images/mobile/portfolio-green-mobile.svg";
import summaryLight from "../../images/mobile/summary-light-mobile.svg";
import summaryDark from "../../images/mobile/summary-dark-mobile.svg";
import summarySelected from "../../images/mobile/summary-green-mobile.svg";
import searchLight from "../../images/mobile/search-light-mobile.svg";
import searchDark from "../../images/mobile/search-dark-mobile.svg";
import searchSelected from "../../images/mobile/search-green-mobile.svg";

const Footer = ({ setHeader }) => {
  const [activeButton, setActiveButton] = useState({
    home: true,
    portfolio: false,
    summary: false,
    search: false
  })
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  const search = useSelector((state) => state.search.value);
  const header = useSelector((state) => state.header.value);
  const footer = useSelector((state) => state.footer.value);
  const overview = theme ? overviewDark : overviewLight;
  const portfolio = theme ? portfolioDark : portfolioLight;
  const summary = theme ? summaryDark : summaryLight;
  const searchIcon = theme ? searchDark : searchLight;

  const selected = (id) => {
    dispatch(selectActiveButton(id))
    setHeader(id)
  };

  useEffect(() => {
    if (header === "home") {
      dispatch(selectActiveButton("home"))
    }
    if (header === "summary") {
      dispatch(selectActiveButton("summary"))
    }
  }, [header, dispatch])

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
              onClick={(e) => {selected(e.target.id); dispatch(openCloseSearch(false))}}
              src={footer.home ? overviewSelected : overview}
              alt="Overview"
            />
          </Link>
          <Link to="/portfolio">
            <MobileIconImage
              id="portfolio"
              onClick={(e) => {selected(e.target.id); dispatch(openCloseSearch(false))}}
              src={footer.portfolio ? portfolioSelected : portfolio}
              alt="Portfolio"
            />
          </Link>
          <ImageLink>
            <MobileIconImage
              id="summary"
              src={footer.summary ? summarySelected : summary}
              alt="Summary"
            />
          </ImageLink>
          <Link to="/search">
            <MobileIconImage
              id="search"
              onClick={(e) => {
                selected(e.target.id)
                dispatch(openCloseSearch(true))
              }}
              src={search ? searchSelected : searchIcon}
              alt="Search"
            />
          </Link>
        </MobileFooter>
      </FooterHolder>
    </>
  );
};

export default Footer;
