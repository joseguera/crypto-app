import React from "react";
import { DateHolder, DateButton } from "./DateButtons.styles";

export default class DateButtons extends React.Component {
    dateRanges = {
      daily: { title: "1d", range: 1 },
      weekly: { title: "1w", range: 7 },
      monthly: { title: "1m", range: 30 },
      quarter: { title: "3m", range: 91 },
      half: { title: "6m", range: 183 },
      yearly: { title: "1y", range: 364 },
    }

  render() {


    return (
      <DateHolder>
        {Object.values(this.dateRanges).map((date) => {
          return (
            <DateButton onClick={() => this.props.setDateRange(date.range)} key={date.range}>
              {date.title}
            </DateButton>
          );
        })}
      </DateHolder>
    );
  }
}