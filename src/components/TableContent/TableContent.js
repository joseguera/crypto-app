import React from "react";
import { Link } from "react-router-dom";
import { roundToNumber} from 'util/numberUtil';
import { Icon, Symbol, LinkText, styledLink, PercentCell } from "./TableContent.styles";
import { SmallGraph, ProgressBarTable, DownArrowRed, UpArrowGreen } from 'components';

export default class TableContent extends React.Component {

  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: this.props.currencyName,
    minimumFractionDigits: 0,
  });

  setInStorage = (oneHour, twentyFourHours, sevenDays) => {
    window.localStorage.setItem("1_hour", JSON.stringify(oneHour));
    window.localStorage.setItem("24_hours", JSON.stringify(twentyFourHours));
    window.localStorage.setItem("7_days", JSON.stringify(sevenDays));
  };

  render() {
    const oneHour = localStorage.getItem("1_hour");
    const twentyFourHours = localStorage.getItem("24_hours");
    const sevenDays = localStorage.getItem("7_days");

    return (
      <>
        {this.props.coins.map((coin) => {
          this.setInStorage(coin.price_change_percentage_1h_in_currency, coin.price_change_percentage_24h_in_currency, coin.price_change_percentage_7d_in_currency);
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
                {(coin.price_change_percentage_1h_in_currency > oneHour) ? <UpArrowGreen /> : <DownArrowRed />}
                <div>{roundToNumber(coin.price_change_percentage_1h_in_currency, 2)}%</div>
              </PercentCell>
              <PercentCell>
                {(coin.price_change_percentage_24h_in_currency > twentyFourHours) ? <UpArrowGreen /> : <DownArrowRed />}
                {roundToNumber(coin.price_change_percentage_24h_in_currency, 2)}%
              </PercentCell>
              <PercentCell>
                {(coin.price_change_percentage_7d_in_currency > sevenDays) ? <UpArrowGreen /> : <DownArrowRed />}
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