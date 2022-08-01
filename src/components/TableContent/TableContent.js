import React from "react";
import _ from 'lodash';
import { Link } from "react-router-dom";
import { roundToNumber } from "util/numberUtil";
import {
  Icon,
  Symbol,
  LinkText,
  styledLink,
  PercentCell,
} from "./TableContent.styles";
import {
  SmallGraph,
  ProgressBarTable,
  DownArrowRed,
  UpArrowGreen,
} from "components";

export default class TableContent extends React.Component {
  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: this.props.currencyName,
    minimumFractionDigits: 0,
  });

  setPriceChangePercentageInStorage = () => {
    
    const hour1 = this.props.coins.map((coin) => coin.price_change_percentage_1h_in_currency);
    const hour24 = this.props.coins.map((coin) => coin.price_change_percentage_24h_in_currency);
    const day7 = this.props.coins.map((coin) => coin.price_change_percentage_7d_in_currency);

    window.localStorage.setItem("1_hour", JSON.stringify(hour1));
    window.localStorage.setItem("24_hours", JSON.stringify(hour24));
    window.localStorage.setItem("7_days", JSON.stringify(day7));
  };

  componentDidMount() {
    let pastDate = localStorage.getItem("date");
    let today = new Date();
    if (!pastDate) {
      localStorage.setItem("pastDate", new Date());
    } else {
      return today;
    }
    const date1 = Date.parse(today);
    const date2 = Date.parse(pastDate);
    console.log(date1, date2)
    const diffTime = Math.abs(date2 - date1);
    const diffMinutes = diffTime / (1000 * 60);
    if (diffMinutes > 5) {
      this.setPriceChangePercentageInStorage();
      pastDate = today;
    }
  }

  render() {
    const oneHour = localStorage.getItem("1_hour");
    //clean up array string
    const hour = oneHour.slice(1).slice(0, -1)
    const hourArray = hour.split(",");
    const hourIntArray = hourArray.map((string) => parseFloat(string))


    const twentyFourHours = localStorage.getItem("24_hours");
    const sevenDays = localStorage.getItem("7_days");
    console.log(hourIntArray);

    return (
      <>
        {_.zipWith(this.props.coins, oneHour, twentyFourHours, sevenDays, (coin, hour, day, week) => {
          this.setPriceChangePercentageInStorage();
          return (
            <React.Fragment key={coin.name}>
              <div>{coin.market_cap_rank}</div>
              <div>
                <Link to={`/coin/${coin.id}`} style={styledLink}>
                  <Icon src={coin.image} alt={coin.name} />
                  <LinkText>
                    {coin.name} (<Symbol>{coin.symbol}</Symbol>)
                  </LinkText>
                </Link>
              </div>
              <div>{this.formatter.format(coin.current_price)}</div>
              <PercentCell>
                {coin.price_change_percentage_1h_in_currency > hour ? (
                  <UpArrowGreen />
                ) : (
                  <DownArrowRed />
                )}
                <div>
                  {roundToNumber(
                    coin.price_change_percentage_1h_in_currency,
                    2
                  )}
                  %
                </div>
              </PercentCell>
              <PercentCell>
                {coin.price_change_percentage_24h_in_currency >
                day ? (
                  <UpArrowGreen />
                ) : (
                  <DownArrowRed />
                )}
                {roundToNumber(coin.price_change_percentage_24h_in_currency, 2)}
                %
              </PercentCell>
              <PercentCell>
                {coin.price_change_percentage_7d_in_currency > week ? (
                  <UpArrowGreen />
                ) : (
                  <DownArrowRed />
                )}
                {roundToNumber(coin.price_change_percentage_7d_in_currency, 2)}%
              </PercentCell>
              <div>
                <ProgressBarTable
                  currency={this.props.currencyName}
                  values={{ first: coin.total_volume, second: coin.market_cap }}
                />
              </div>
              <div>
                <ProgressBarTable
                  currency={this.props.currencyName}
                  values={{
                    first: coin.circulating_supply,
                    second: coin.total_supply,
                  }}
                />
              </div>
              <SmallGraph graphData={coin.sparkline_in_7d.price} />
            </React.Fragment>
          );
        })}
      </>
    );
  }
}
