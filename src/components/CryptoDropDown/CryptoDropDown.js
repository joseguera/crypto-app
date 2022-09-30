import React, { useState, useEffect, useRef } from "react";
import { DropDownHolder, DropDown, CryptoTitle, Arrow, DropDownList, ListItem } from "./CryptoDropDown.styles";

export default function CryptoDropDown(props) {
  const [cryptoName, setCryptoName] = useState("Bitcoin");
  const [open, setOpen] = useState(false);

  const container = useRef(null);

  const handleDropDownClick = () => {
    setOpen(!open);
  };

  const handleSelection = (value) => {
    const cryptoName= value.toLowerCase();
    setCryptoName(value);
    setOpen(!open);
    props.setCryptoName(cryptoName);
  };

  const handleClickOutside = (event) => {
    if (
      container &&
      !container.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    return (
      <>
        <div className="container" ref={container}>
          <DropDownHolder>
            <DropDown onClick={handleDropDownClick}>
              <CryptoTitle>{cryptoName}&nbsp;Overview</CryptoTitle>
              {!open ? <Arrow /> : <Arrow style={{ "transform": "rotateX(180deg)" }} />}
            </DropDown>
            {open && (
              <DropDownList>
                <ListItem id="Bitcoin" onClick={(e) => handleSelection(e.target.id)}>Bitcoin</ListItem>
                <ListItem id="Ethereum" onClick={(e) => handleSelection(e.target.id)}>Ethereum</ListItem>
              </DropDownList>
            )}
          </DropDownHolder>
        </div>
      </>
    );
}
