import React from "react";
import { useSelector } from 'react-redux';
import { ProgressBar } from "components";
import {
    DataSummaryHolder,
    DataSummaryContainer,
    MarketDataOne,
    MarketDataTwo,
    MarketDataThree,
    Symbol,
    DataItem,
    PlusIcon,
    Item,
    ItemTitle,
} from "./MarketDataSummary.styles";
import { roundToNumber, formatCurrency, setCurrency } from "util/numberUtil";

const MarketDataSummary = (props) => {
    const currency = useSelector((state) => state.currency.value);
    const { profile } = props;
    return (
        <DataSummaryHolder>
        <DataSummaryContainer>
            <MarketDataOne>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Market Cap:</ItemTitle>
                <div>
                    {setCurrency(currency)}
                    {formatCurrency(profile.market_data.market_cap[currency])}
                </div>
                <ItemTitle>
                    {roundToNumber(
                    profile.market_data.market_cap_change_percentage_24h_in_currency[
                        currency
                    ],
                    2
                    )}
                    %
                </ItemTitle>
                </Item>
            </DataItem>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Fully Diluted Valuation: </ItemTitle>
                <div>
                    {setCurrency(currency)}
                    {profile.market_data.fully_diluted_valuation[currency]
                    ? formatCurrency(
                        profile.market_data.fully_diluted_valuation[currency]
                        )
                    : "0.00"}
                </div>
                </Item>
            </DataItem>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Volume 24h:</ItemTitle>
                <div>
                    {setCurrency(currency)}
                    {formatCurrency(profile.market_data.total_volume[currency])}
                </div>
                </Item>
            </DataItem>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Volume / Market:</ItemTitle>{" "}
                <div>
                    {roundToNumber(
                    profile.market_data.total_volume[currency] /
                        profile.market_data.market_cap[currency],
                    4
                    )}
                </div>
                </Item>
            </DataItem>
            </MarketDataOne>
            <MarketDataTwo>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Total Volume:</ItemTitle>
                <div>
                    {setCurrency(currency)}
                    {formatCurrency(profile.market_data.total_volume[currency])}
                </div>
                </Item>
            </DataItem>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Circulating Supply:</ItemTitle>{" "}
                <div>{roundToNumber(profile.market_data.circulating_supply, 0)}</div>
                <Symbol>{profile.symbol}</Symbol>
                </Item>
            </DataItem>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Max Supply:</ItemTitle>{" "}
                <div>
                    {profile.market_data.max_supply
                    ? profile.market_data.max_supply
                    : 0}
                </div>
                <Symbol>{profile.symbol}</Symbol>
                </Item>
            </DataItem>
            </MarketDataTwo>
            <MarketDataThree>
            <ProgressBar
                priceChange24hPercent={
                profile.market_data.price_change_percentage_24h_in_currency[
                    currency
                ]
                }
            />
            </MarketDataThree>
        </DataSummaryContainer>
        </DataSummaryHolder>
    )
}

export default MarketDataSummary;