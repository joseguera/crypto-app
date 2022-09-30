import React, { useState, useEffect, useRef } from "react";
import { DownArrow, UpArrowGreen } from "components";
import {
  DropDown,
  DropDownHolder,
  DropDownList,
  Symbol,
  CurrencySymbol,
  Currency,
  Selected,
  CurrencyNameHolder,
  CurrencyItemHolder,
  CurrencyItem,
  CurrencyOptions,
} from "./CurrencyDropDown.styles";

export default function CurrencyDropDown(props) {
  const [currencyName, setCurrency] = useState("USD");
  const [open, setOpen] = useState(false);

  const setCurrencyName = (value) => {
    setCurrency(value);
    props.setCurrencyName(value);
  };

  const container = useRef(null);

  const handleDropDownClick = () => {
    setOpen(!open);
  };

  const handleSelection = (value) => {
    const currencyName = value.toLowerCase();
    setCurrency(value);
    setOpen(!open);
    props.setCurrencyName(currencyName);
    localStorage.setItem(
      "selected-currency",
      JSON.stringify(currencyName.toUpperCase())
    );
  };

  const handleClickOutside = (event) => {
    if (container && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    const currentCurrency = JSON.parse(
      localStorage.getItem("selected-currency")
    );
    if (currentCurrency) {
      setCurrency(currentCurrency);
    }
    document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const setCurrencySymbol = (currency) => {
    if (currency === "USD") {
      return "$";
    }
    if (currency === "EUR") {
      return "€";
    }
    if (currency === "GBP") {
      return "£";
    }
  };

  const currencies = [
    { name: "USD", symbol: "$" },
    { name: "EUR", symbol: "€" },
    { name: "GBP", symbol: "£" },
  ];

  return (
    <>
      <DropDown className="container" ref={container}>
        <DropDownHolder onClick={handleDropDownClick}>
          <Symbol>
            <CurrencySymbol>{setCurrencySymbol(currencyName)}</CurrencySymbol>
          </Symbol>
          <CurrencyNameHolder>
            <Currency>{currencyName}</Currency>
            {!open ? <DownArrow /> : <UpArrowGreen />}
          </CurrencyNameHolder>
          {open && (
            <DropDownList>
              <CurrencyOptions>
                {currencies.map((currency) => {
                  return (
                    <CurrencyItemHolder
                      onClick={() => handleSelection(currency.name)}
                      key={currency.name}
                    >
                      <CurrencyItem>
                        <Symbol>
                          <CurrencySymbol>
                            {setCurrencySymbol(currency.name)}
                          </CurrencySymbol>
                        </Symbol>
                        <CurrencyNameHolder>
                          {currencyName === currency.name ? (
                            <Selected>{currency.name}</Selected>
                          ) : (
                            <Currency>{currency.name}</Currency>
                          )}
                        </CurrencyNameHolder>
                      </CurrencyItem>
                    </CurrencyItemHolder>
                  );
                })}
              </CurrencyOptions>
            </DropDownList>
          )}
        </DropDownHolder>
      </DropDown>
    </>
  );
}
