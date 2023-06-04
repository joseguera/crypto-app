import React from "react";
import { useSelector } from 'react-redux';
import {
  ProgressBarHolder,
  ProgressBarContainer,
  ProgressLevel,
  ProgressBarLabel,
  LabelTextStart,
  LabelTextEnd,
} from "./ProgressBarTable.styles";
import { formatCurrency } from "util/numberUtil";

interface PBProps {
  values: number;

}

const ProgressBarTable: React.FunctionComponent<PBProps> = () => {
  const currency = useSelector((state) => state.currency.value);
  const percentChange = (values.first * 100) / values.second;
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
            &#x25CF; {setCurrencySymbol(currency)}
            {formatCurrency(values.first)}
          </LabelTextStart>
          <LabelTextEnd>
            {values.second === null
              ? "∞"
              : `● ${setCurrencySymbol(currency)}${formatCurrency(
                  values.second
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
