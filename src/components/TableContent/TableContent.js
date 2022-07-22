import React from "react";
import { Link } from "react-router-dom";
import { roundToNumber} from 'util/numberUtil';
import { Icon, Symbol, LinkText, styledLink } from "./TableContent.styles";
import { SmallGraph, ProgressBarTable } from 'components';

export default class TableContent extends React.Component {
    formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: this.props.currencyName,
        minimumFractionDigits: 0,
      });

    render() {
      return (
        <>
          {this.props.coins.map((coin) => {
            return (
              <React.Fragment key={coin.name}>

                <div>{coin.market_cap_rank}</div>
                <div>
                  <Link to={`/coin/${coin.id}`} style={styledLink}>
                    <Icon src={coin.image} alt={coin.name} />
                    <LinkText>{coin.name} (<Symbol>{coin.symbol}</Symbol>)</LinkText>
                  </Link>
                </div>
                <div>{this.formatter.format(coin.current_price)}</div>
                <div>
                  {roundToNumber(coin.price_change_percentage_1h_in_currency, 2)}%
                </div>
                <div>
                  {roundToNumber(coin.price_change_percentage_24h_in_currency, 2)}
                  %
                </div>
                <div>
                  {roundToNumber(coin.price_change_percentage_7d_in_currency, 2)}%
                </div>
                <div>
                  <ProgressBarTable currency={this.props.currencyName} values={ { "first" : coin.total_volume, "second": coin.market_cap } } />
                </div>
                <div>
                  <ProgressBarTable currency={this.props.currencyName} values={ { "first" : coin.circulating_supply, "second": coin.total_supply } } />
                </div>
                <SmallGraph graphData={coin.sparkline_in_7d.price} />
              </React.Fragment>

            );
          })}
        </>
      );
    }
}