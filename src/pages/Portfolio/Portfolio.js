import React from "react";
import { Link } from "react-router-dom";
import { MainDiv } from "./Portfolio.styles";

const Portfolio = () => {
    return (
        <MainDiv>
          <div>
            <p>The Portfolio is page under construction and coming soon...</p>
            <p><Link to="/">Click here to return to <b>Home Page</b></Link></p>
          </div>
        </MainDiv>

    ) 
    
  };
  
export default Portfolio;