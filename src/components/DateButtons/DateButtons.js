import React from "react";
import { DateHolder, DateButton } from "./DateButtons.styles";

export default class DateButtons extends React.Component {
    state = {
        dateRanges: {
            daily: { title: '1d', range: 1  },
            weekly: { title: '1w', range: 7 },
            monthly: { title: '1m', range: 30 },
            quarter: { title: '3m', range: 91 },
            half: { title: '6m', range: 183 },
            yearly: { title: '1y', range: 364 }
        }
    }

    getDateRange = (dateRange) => {
        this.setState({
          dateRange
        });
        this.props.getDateRange(dateRange);
      };

    render() {
        const { dateRanges } = this.state;

        return (
            <DateHolder>
                {Object.values(dateRanges).map((date) => {
                    return (
                        <DateButton onClick={() => this.getDateRange(date.range)}>
                            {date.title}
                        </DateButton> 
                    )   
                })}
            </DateHolder>
        )
    }
}