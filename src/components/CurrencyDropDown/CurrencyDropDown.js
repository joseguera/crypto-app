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
        <DropDownHolder onClick={() => setModalOpen(true)}>
          <Symbol>
            <CurrencySymbol>{setCurrencySymbol(currencyName)}</CurrencySymbol>
          </Symbol>
          <CurrencyNameHolder>
            <Currency>{currencyName}</Currency>
            {!isModalOpen ? <DownArrow /> : <UpArrowGreen />}
          </CurrencyNameHolder>
          {isModalOpen && (
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
                          {currency === curr.name.toLowerCase() ? (
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
