import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { roundToNumber } from "util/numberUtil";
import {
  Icon,
  Symbol,
  LinkText,
  styledLink,
  PercentCell,
  TableLine,
} from "./TableContent.styles";
import {
  SmallGraph,
  ProgressBarTable,
  DownArrowRed,
  UpArrowGreen,
} from "components";
import LoadingTableRow from "components/loading-animations/LoadingTableRow/LoadingTableRow";

export default class TableContent extends React.Component {
  
  currencies = {
    usd: "$",
    eur: "€",
    gbp: "£"
  }

  setCurrency = (currency) => {
    return this.currencies[currency]
  }

  render() {
    const { isLoading, coins } = this.props;
    const hasCoins = !isLoading && coins;
    const loaders = Array.apply(null, Array(25)).map(function () {});
    return (
      <>
        {hasCoins ? (
          this.props.coins.map((coin) => {
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
                <div>{this.setCurrency(this.props.currencyName)}{coin.current_price}</div>
                <PercentCell>
                  {coin.price_change_percentage_1h_in_currency > 0 ? (
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
                  {coin.price_change_percentage_24h_in_currency > 0 ? (
                    <UpArrowGreen />
                  ) : (
                    <DownArrowRed />
                  )}
                  {roundToNumber(
                    coin.price_change_percentage_24h_in_currency,
                    2
                  )}
                  %
                </PercentCell>
                <PercentCell>
                  {coin.price_change_percentage_7d_in_currency > 0 ? (
                    <UpArrowGreen />
                  ) : (
                    <DownArrowRed />
                  )}
                  {roundToNumber(
                    coin.price_change_percentage_7d_in_currency,
                    2
                  )}
                  %
                </PercentCell>
                <div>
                  <ProgressBarTable
                    currency={this.props.currencyName}
                    values={{
                      first: coin.total_volume,
                      second: coin.market_cap,
                    }}
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
                <TableLine key={coin.id} />
              </React.Fragment>
            );
          })
        ) : (
          loaders.map((el, index) => <LoadingTableRow key={index} />)
        )}
      </>
    );
  }
}
