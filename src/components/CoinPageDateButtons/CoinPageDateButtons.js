import React, { useState } from "react";
import { DateHolder, RadioButtonHolder, RadioButton, RadioButtonSelected, ButtonLabel } from "./CoinPageDateButtons.styles";

export default function CoinPageDateButtons(props) {
  const [dateRanges, setDateRanges] = useState({
    daily: { title: "1d", range: 1 },
    weekly: { title: "1w", range: 7 },
    monthly: { title: "1m", range: 30 },
    quarter: { title: "3m", range: 91 },
    half: { title: "6m", range: 183 },
    yearly: { title: "1y", range: 364 }
  });
  const [activeDate, setActiveDate] = useState('1d');

  const setActive = (dateTitle, dateRange) => {
    const { daily, weekly, monthly, quarter, half, yearly } = dateRanges;
    let styled;
    if (dateTitle === daily.title) {
      styled = daily.title;
    }
    if (dateTitle === weekly.title) {
      styled = weekly.title;
    } 
    if (dateTitle === monthly.title) {
      styled = monthly.title;
    } 
    if (dateTitle === quarter.title) {
      styled = quarter.title;
    } 
    if (dateTitle === half.title) {
      styled = half.title;
    } 
    if (dateTitle === yearly.title) {
      styled = yearly.title;
    } 
    setActiveDate(styled);
    props.setDateRange(dateRange)
  }

    return (
      <DateHolder>
        {Object.values(dateRanges).map((date) => {
          return (
            activeDate === date.title ? (
              <RadioButtonHolder key={date.range} onClick={() => setActive(date.title, date.range)}>
                <RadioButtonSelected type="radio"></RadioButtonSelected>
                <ButtonLabel>{date.title}</ButtonLabel>
              </RadioButtonHolder>
            ) : (
              <RadioButtonHolder key={date.range} onClick={() => setActive(date.title, date.range)}>
                <RadioButton type="radio"></RadioButton>
                <ButtonLabel>{date.title}</ButtonLabel>
              </RadioButtonHolder>
            )
          )
        })}
      </DateHolder>
    )
}