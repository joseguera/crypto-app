import React from "react";
import axios from "axios";
import { CryptoSummary, CryptoExchange, CoinPageGraph, DownArrowRed, UpArrowGreen, ProgressBar, CryptoLinks } from "components";
import {
  CoinPageMain,
  SummaryHolder,
  PageTitle,
  PageText,
  SummaryContainer,
  MarketSummary,
  MarketHolder,
  MarketPrice,
  PriceChange,
  Price,
  PercentDown,
  PercentUp,
  DataSummaryHolder,
  DataSummaryContainer,
  MarketDataOne,
  MarketDataTwo,
  MarketDataThree,
  DataHolder,
  DataContainer,
  DataValues,
  DataGroup,
  DataLabel,
  Data,
  DescriptionHolder,
  Description,
  DescriptionTitle,
  DescriptionBody,
  DescriptionText,
  StackIcon,
  TextHolder,
  Text,
  ProfitHolder,
  Profit,
  ProfitGain,
  ProfitLoss,
  Symbol,
  DataItem,
  PlusIcon,
  Item,
  ItemTitle,
  GraphHolder,
  GraphContainer
} from "./CoinPage.styles";
import { roundToNumber, formatCurrency, setCurrency, setDate } from "util/numberUtil";
import stackIcon from "../../images/layer-group.svg";

export default class CoinPage extends React.Component {
  state = {
    profile: null,
    isLoading: false,
    hasError: false,
  };

  getCoinInfo = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.props.match.params.id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`
      );
      this.setState({
        profile: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getCoinInfo();
    }
  }

  componentDidMount() {
    this.getCoinInfo();
  }

  getProfit = (priceChange24, currentPrice) => {
    const { currencyName } = this.props;
    const profitPercent = ((priceChange24 * currentPrice) / 100).toFixed(2);
    const profit = formatCurrency(profitPercent);
    return profit < 0 ? (
      <ProfitLoss>{setCurrency(currencyName)}({Math.abs(profit)})</ProfitLoss>
    ) : (
      <ProfitGain>{setCurrency(currencyName)}{profit}</ProfitGain>
    );
  };

  getPercentChange = (percent) => {
    const percentChange = roundToNumber(percent, 2);
    return percentChange < 0 ? (
      <>
        <DownArrowRed />
        <PercentDown>{percentChange}%</PercentDown>
      </>
    ) : (
      <>
        <UpArrowGreen />
        <PercentUp>{percentChange}%</PercentUp>
      </>
    );
  };

  render() {
    const { currencyName } = this.props;
    const { profile, isLoading } = this.state;
    const hasCoinProfile = !isLoading && profile;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasCoinProfile && (
          <CoinPageMain>
            <SummaryHolder>
              <PageTitle>
                <PageText>Your Summary</PageText>
              </PageTitle>
              <SummaryContainer>
                <CryptoSummary profile={profile} />
                <MarketSummary>
                  <MarketHolder>
                    <MarketPrice>
                      <Price>
                        {setCurrency(currencyName)}
                        {profile.market_data.current_price[currencyName]}
                      </Price>
                      <PriceChange>
                        {this.getPercentChange(
                          profile.market_data
                            .price_change_percentage_24h_in_currency[
                            currencyName
                          ]
                        )}
                      </PriceChange>
                    </MarketPrice>
                  </MarketHolder>
                  <ProfitHolder>
                    <Profit>Profit: </Profit>
                    {this.getProfit(
                      profile.market_data
                        .price_change_percentage_24h_in_currency[currencyName],
                      profile.market_data.current_price[currencyName]
                    )}
                  </ProfitHolder>
                  <StackIcon src={stackIcon} alt="stack image" />
                  <DataHolder>
                    <DataContainer>
                      <UpArrowGreen />
                      <DataValues>
                        <DataGroup>
                          <DataLabel>All Time High:</DataLabel>
                          <Data>
                            {setCurrency(currencyName)}
                            {profile.market_data.ath[currencyName]}
                          </Data>
                        </DataGroup>
                        <span>
                          <Data>
                            {setDate(
                              profile.market_data.ath_date[currencyName]
                            )}
                          </Data>
                        </span>
                      </DataValues>
                    </DataContainer>
                    <DataContainer>
                      <DownArrowRed />
                      <DataValues>
                        <DataGroup>
                          <DataLabel>All Time Low:</DataLabel>
                          <Data>
                            {setCurrency(currencyName)}
                            {profile.market_data.atl[currencyName]}
                          </Data>
                        </DataGroup>
                        <span>
                          <Data>
                            {setDate(
                              profile.market_data.atl_date[currencyName]
                            )}
                          </Data>
                        </span>
                      </DataValues>
                    </DataContainer>
                  </DataHolder>
                </MarketSummary>
                <DataSummaryHolder>
                  <DataSummaryContainer>
                    <MarketDataOne>
                      <DataItem>
                        <PlusIcon />
                        <Item>
                          <ItemTitle>Market Cap:</ItemTitle>
                          <div>
                            {setCurrency(currencyName)}
                            {formatCurrency(
                              profile.market_data.market_cap[currencyName]
                            )}
                          </div>
                          <ItemTitle>
                            {roundToNumber(
                              profile.market_data
                                .market_cap_change_percentage_24h_in_currency[
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
                            {profile.market_data.fully_diluted_valuation[
                              currencyName
                            ]
                              ? formatCurrency(
                                  profile.market_data.fully_diluted_valuation[
                                    currencyName
                                  ]
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
                            {formatCurrency(
                              profile.market_data.total_volume[currencyName]
                            )}
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
                            {formatCurrency(
                              profile.market_data.total_volume[currencyName]
                            )}
                          </div>
                        </Item>
                      </DataItem>
                      <DataItem>
                        <PlusIcon />
                        <Item>
                          <ItemTitle>Circulating Supply:</ItemTitle>{" "}
                          <div>
                            {roundToNumber(
                              profile.market_data.circulating_supply,
                              0
                            )}
                          </div>
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
                          profile.market_data
                            .price_change_percentage_24h_in_currency[
                            currencyName
                          ]
                        }
                      />
                    </MarketDataThree>
                  </DataSummaryContainer>
                </DataSummaryHolder>
              </SummaryContainer>
            </SummaryHolder>
            <DescriptionHolder>
              <Description>
                <DescriptionTitle>Description</DescriptionTitle>
              </Description>
              <DescriptionBody>
                <DescriptionText>
                  <StackIcon src={stackIcon} alt="stack image" />
                  <TextHolder>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: profile.description.en,
                      }}
                    ></Text>
                  </TextHolder>
                </DescriptionText>
              </DescriptionBody>
              <CryptoLinks siteLinks={profile.links.blockchain_site} selectedTheme={this.props.selectedTheme} />
            </DescriptionHolder>
            <GraphHolder>
              <CryptoExchange
                cryptoName={profile.symbol}
                currencyName={currencyName}
                currentPrice={profile.market_data.current_price[currencyName]}
              />
              <GraphContainer>
                <CoinPageGraph
                  cryptoName={profile.name.toLowerCase()}
                  currencyName={currencyName}
                  selectedTheme={this.props.selectedTheme}
                />
              </GraphContainer>
            </GraphHolder>
          </CoinPageMain>
        )}
      </>
    );
  }
}
