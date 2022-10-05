import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency } from "../../features/currency/currencySlice";
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
  const currency = useSelector((state) => state.currency.value)
  const currencyName = currency.toUpperCase();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const container = useRef(null);

  const handleDropDownClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (container && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
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
                {currencies.map((curr) => {
                  return (
                    <CurrencyItemHolder
                      onClick={() => dispatch(changeCurrency(curr.name.toLowerCase()))}
                      key={curr.name}
                    >
                      <CurrencyItem>
                        <Symbol>
                          <CurrencySymbol>
                            {setCurrencySymbol(curr.name)}
                          </CurrencySymbol>
                        </Symbol>
                        <CurrencyNameHolder>
                          {currency === curr.name ? (
                            <Selected>{curr.name}</Selected>
                          ) : (
                            <Currency>{curr.name}</Currency>
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
