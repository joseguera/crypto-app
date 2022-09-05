import React from "react";
import { FooterHolder, ImageLink, IconImage } from "./Footer.styles";
import github from '../../images/github.svg'
import linkedIn from '../../images/linkedin.svg'

const Footer = (props) => {
  return (
    <>
      <FooterHolder>
        <ImageLink href="https://github.com/joseguera/crypto-app" target="_blank" rel="noreferrer">
          <IconImage src={github} alt="github" />
        </ImageLink>
        <ImageLink href="https://www.linkedin.com/in/jose-oseguera-dev/" target="_blank" rel="noreferrer">
          <IconImage src={linkedIn} alt="linkedIn" />
        </ImageLink>
      </FooterHolder>
    </>
  );
};

export default Footer;
