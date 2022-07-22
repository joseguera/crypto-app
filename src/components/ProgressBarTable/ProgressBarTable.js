import React from "react";
import {
  ProgressBarHolder,
  ProgressBarContainer,
  ProgressLevel,
  ProgressBarLabel,
  LabelTextStart,
  LabelTextEnd,
} from "./ProgressBarTable.styles";
import { formatCurrency } from "util/numberUtil";

const ProgressBarTable = (props) => {
  const percentChange = (props.values.first * 100) / props.values.second;
  const percentStyle = {
    width: percentChange === Infinity ? "100%" : percentChange,
  };

  const setCurrencySymbol = (currency) => {
    if (currency === "usd") {
      return "$";
    }
    if (currency === "eur") {
      return "€";
    }
    if (currency === "gbp") {
      return "£";
    }
  };

  return (
    <>
      <ProgressBarHolder>
        <ProgressBarLabel>
          <LabelTextStart>
            &#x25CF; {setCurrencySymbol(props.currency)}
            {formatCurrency(props.values.first)}
          </LabelTextStart>
          <LabelTextEnd>
            {props.values.second === null
              ? "∞"
              : `● ${setCurrencySymbol(props.currency)}${formatCurrency(
                  props.values.second
                )}`}
          </LabelTextEnd>
        </ProgressBarLabel>
        <ProgressBarContainer>
          <ProgressLevel style={percentStyle}></ProgressLevel>
        </ProgressBarContainer>
      </ProgressBarHolder>
    </>
  );
};

export default ProgressBarTable;
