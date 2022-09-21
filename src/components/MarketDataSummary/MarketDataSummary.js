import React from "react";
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
    const { currencyName, profile } = props;
    return (
        <DataSummaryHolder>
        <DataSummaryContainer>
            <MarketDataOne>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Market Cap:</ItemTitle>
                <div>
                    {setCurrency(currencyName)}
                    {formatCurrency(profile.market_data.market_cap[currencyName])}
                </div>
                <ItemTitle>
                    {roundToNumber(
                    profile.market_data.market_cap_change_percentage_24h_in_currency[
                        currencyName
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
                    {setCurrency(currencyName)}
                    {profile.market_data.fully_diluted_valuation[currencyName]
                    ? formatCurrency(
                        profile.market_data.fully_diluted_valuation[currencyName]
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
                    {setCurrency(currencyName)}
                    {formatCurrency(profile.market_data.total_volume[currencyName])}
                </div>
                </Item>
            </DataItem>
            <DataItem>
                <PlusIcon />
                <Item>
                <ItemTitle>Volume / Market:</ItemTitle>{" "}
                <div>
                    {roundToNumber(
                    profile.market_data.total_volume[currencyName] /
                        profile.market_data.market_cap[currencyName],
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
                    {setCurrency(currencyName)}
                    {formatCurrency(profile.market_data.total_volume[currencyName])}
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
                    currencyName
                ]
                }
            />
            </MarketDataThree>
        </DataSummaryContainer>
        </DataSummaryHolder>
    )
}

export default MarketDataSummary;