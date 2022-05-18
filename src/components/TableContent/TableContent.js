import { Link } from "react-router-dom";
import { roundToNumber, formatCurrency } from "../../util/util";
import { Icon, Symbol } from "./TableContent.styles";


const TableContent = (props) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: props.currencyName,
        minimumFractionDigits: 0,
      });

    return (
      <>
        {props.coins.map((coin) => {
          return (
            <>
              <div>{coin.market_cap_rank}</div>
              <div>
                <Link to={`/coinpage/${coin.name}`}>
                  <Icon src={coin.image} alt={coin.name} />
                  {coin.name}(<Symbol>{coin.symbol}</Symbol>)
                </Link>
              </div>
              <div>{formatter.format(coin.current_price)}</div>
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
                <span>{formatCurrency(coin.total_volume)}</span>{" "}
                <span>{formatCurrency(coin.market_cap)}</span>
              </div>
              <div>
                <span>{formatCurrency(coin.circulating_supply)}</span>{" "}
                <span>{formatCurrency(coin.total_supply)}</span>
              </div>
              <div>Graph</div>
            </>
          );
        })}
      </>
    );
}

export default TableContent;
