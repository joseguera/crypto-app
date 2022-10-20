import React, { useState, useEffect, useRef } from "react";
import { DropDownHolder, DropDown, CryptoTitle, Arrow, DropDownList, ListItem } from "./CryptoDropDown.styles";

export default function CryptoDropDown(props) {
  const [cryptoName, setCryptoName] = useState("Bitcoin");
  const [isModalOpen, setModalOpen] = useState(false);
  const container = useRef();
  useOnClickOutside(container, () => setModalOpen(false));
  
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}
  
  const handleSelection = (value) => {
    const cryptoName= value.toLowerCase();
    setCryptoName(value);
    setModalOpen(!isModalOpen);
    props.setCryptoName(cryptoName);
  };

    return (
      <>
        <div className="container" ref={container}>
          <DropDownHolder>
            <DropDown onClick={() => setModalOpen(true)}>
              <CryptoTitle>{cryptoName}&nbsp;Overview</CryptoTitle>
              {!isModalOpen ? <Arrow /> : <Arrow style={{ "transform": "rotateX(180deg)" }} />}
            </DropDown>
            {isModalOpen && (
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
