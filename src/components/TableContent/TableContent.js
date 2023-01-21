import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActiveButton } from "../../features/footer/footerSlice";
import { Link } from "react-router-dom";
import { roundToNumber, setCurrency } from "util/numberUtil";
import {
  IconHolder,
  Icon,
  LinkText,
  Text,
  Symbol,
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

export default function TableContent(props) {
  const currency = useSelector((state) => state.currency.value);
  const { isLoading, coins } = props;
  const hasCoins = !isLoading && coins;
  const dispatch = useDispatch();
  const loaders = Array.apply(null, Array(25)).map(function () {});

  return (
    <>
      {hasCoins
        ? props.coins.map((coin) => {
            return (
              <React.Fragment key={coin.name}>
                <div>{coin.market_cap_rank}</div>
                <div>
                  <Link to={`/coin/${coin.id}`} style={styledLink}>
                    <IconHolder onClick={() => {
                      props.setHeader("summary");
                      dispatch(selectActiveButton("summary"))
                    }}>
                      <Icon src={coin.image} alt={coin.name} />
                      <LinkText>
                        <Text>{coin.name}</Text>
                        <span className="symbol">{coin.symbol}</span>
                      </LinkText>
                    </IconHolder>
                  </Link>
                </div>
                <div>
                  {setCurrency(currency)}
                  {coin.current_price}
                </div>
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
                    values={{
                      first: coin.total_volume,
                      second: coin.market_cap,
                    }}
                  />
                </div>
                <div>
                  <ProgressBarTable
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
        : loaders.map((el, index) => <LoadingTableRow key={index} />)}
    </>
  );
}
