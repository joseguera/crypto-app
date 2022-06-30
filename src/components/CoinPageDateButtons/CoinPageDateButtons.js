import React from "react";
import { DateHolder, RadioButtonHolder, RadioButton, RadioButtonSelected, ButtonLabel } from "./CoinPageDateButtons.styles";

export default class CoinPageDateButtons extends React.Component {
  state = {
    dateRanges : {
      daily: { title: "1d", range: 1 },
      weekly: { title: "1w", range: 7 },
      monthly: { title: "1m", range: 30 },
      quarter: { title: "3m", range: 91 },
      half: { title: "6m", range: 183 },
      yearly: { title: "1y", range: 364 }
    },
    active: '1d'
  }

  setActive = (dateTitle, dateRange) => {
    const { daily, weekly, monthly, quarter, half, yearly } = this.state.dateRanges;
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
    this.setState({
      active: styled
    })
    this.props.setDateRange(dateRange)
  }
  
  render() {
    const { dateRanges, active } = this.state;

    return (
      <DateHolder>
        {Object.values(dateRanges).map((date) => {
          return (
            active === date.title ? (
              <RadioButtonHolder key={date.range} onClick={() => this.setActive(date.title, date.range)}>
                <RadioButtonSelected type="radio"></RadioButtonSelected>
                <ButtonLabel>{date.title}</ButtonLabel>
              </RadioButtonHolder>
            ) : (
              <RadioButtonHolder key={date.range} onClick={() => this.setActive(date.title, date.range)}>
                <RadioButton type="radio"></RadioButton>
                <ButtonLabel>{date.title}</ButtonLabel>
              </RadioButtonHolder>
            )
          )
        })}
      </DateHolder>
    )
  }
}