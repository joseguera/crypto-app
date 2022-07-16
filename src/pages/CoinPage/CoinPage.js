import React from "react";
import axios from "axios";
import { CryptoExchange, CoinPageGraph, DownArrowRed, UpArrowGreen } from "components";
import {
  CoinPageMain,
  SummaryHolder,
  PageTitle,
  PageText,
  SummaryContainer,
  CryptoSummary,
  CryptoTitle,
  CryptoContent,
  CryptoIcon,
  CryptoImg,
  CryptoName,
  CryptoText,
  CryptoSite,
  MarketSummary,
  MarketHolder,
  MarketPrice,
  PriceChange,
  Price,
  PercentDown,
  PercentUp,
  DataSummary,
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
  LinkHolder,
  Symbol,
  DataItem,
  LinkContainer,
  Site,
  LinkIcon,
  CopyIcon,
  GraphHolder,
  GraphContainer
} from "./CoinPage.styles";
import { roundToNumber, formatCurrency } from "util/numberUtil";
import stackIcon from "../../images/layer-group.svg";
import linkIcon from "../../images/awesome-link.svg";
import copyIcon from "../../images/feather-copy.svg";

export default class CoinPage extends React.Component {
  constructor(props) {
    super(props);
    this.formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: this.props.currencyName,
      minimumFractionDigits: 0,
    });
  }

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

  setDate = (dateString) => {
    const formatDate = new Date(dateString);
    const hours = formatDate.getHours();
    const minutes = formatDate.getMinutes();
    const seconds = formatDate.getSeconds();

    return `${formatDate.toLocaleDateString("en-US")}, 
    ${hours < 12 ? hours : hours - 12}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}
    ${hours < 12 ? "AM" : "PM"}`;
  };

  setCurrency = (currency) => {
    if (currency === "usd") return "$";
    if (currency === "eur") return "€";
    if (currency === "gbp") return "£";
  };

  getProfit = (priceChange24, currentPrice) => {
    const profit = formatCurrency((priceChange24 * currentPrice) / 100).toFixed(
      2
    );
    return profit < 0 ? (
      <ProfitLoss>$({Math.abs(profit)})</ProfitLoss>
    ) : (
      <ProfitGain>${profit}</ProfitGain>
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
                <CryptoSummary>
                  <CryptoTitle>
                    <CryptoContent>
                      <CryptoIcon>
                        <CryptoImg
                          src={profile.image.small}
                          alt={profile.name}
                        />
                      </CryptoIcon>
                      <CryptoName>
                        <CryptoText>
                          {profile.name}&nbsp;
                          <Symbol>({profile.symbol})</Symbol>
                        </CryptoText>
                      </CryptoName>
                    </CryptoContent>
                  </CryptoTitle>
                  <CryptoSite>
                    <LinkIcon src={linkIcon} alt="link icon" />
                    <a
                      href={profile.links.homepage[0]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {profile.links.homepage[0].slice(8, -1)}
                    </a>
                  </CryptoSite>
                </CryptoSummary>
                <MarketSummary>
                  <MarketHolder>
                    <MarketPrice>
                      <Price>
                        {this.formatter.format(
                          profile.market_data.current_price[currencyName]
                        )}
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
                            {this.formatter.format(
                              profile.market_data.ath[currencyName]
                            )}
                          </Data>
                        </DataGroup>
                        <span>
                          <Data>
                            {this.setDate(
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
                            {this.formatter.format(
                              profile.market_data.atl[currencyName]
                            )}
                          </Data>
                        </DataGroup>
                        <span>
                          <Data>
                            {this.setDate(
                              profile.market_data.atl_date[currencyName]
                            )}
                          </Data>
                        </span>
                      </DataValues>
                    </DataContainer>
                  </DataHolder>
                </MarketSummary>
                <DataSummary>
                  <DataItem>
                    <span>Market Cap: </span>
                    {this.setCurrency(currencyName)}
                    {formatCurrency(
                      profile.market_data.market_cap[currencyName]
                    )}{" "}
                    <span>
                      {roundToNumber(
                        profile.market_data
                          .market_cap_change_percentage_24h_in_currency[
                          currencyName
                        ],
                        2
                      )}
                      %
                    </span>
                  </DataItem>
                  <DataItem>
                    <span>Fully Diluted Valuation: </span>
                    {this.setCurrency(currencyName)}
                    {profile.market_data.fully_diluted_valuation[currencyName]
                      ? formatCurrency(
                          profile.market_data.fully_diluted_valuation[
                            currencyName
                          ]
                        )
                      : "0.00"}
                  </DataItem>
                  <DataItem>
                    <span>Volume 24h:</span>
                    {this.setCurrency(currencyName)}
                    {formatCurrency(
                      profile.market_data.total_volume[currencyName]
                    )}
                  </DataItem>
                  <DataItem>
                    <span>Volume / Market:</span>{" "}
                    {roundToNumber(
                      profile.market_data.total_volume[currencyName] /
                        profile.market_data.market_cap[currencyName],
                      4
                    )}
                  </DataItem>
                  <br />
                  <DataItem>
                    <span>Total Volume:</span>
                    {this.setCurrency(currencyName)}
                    {formatCurrency(
                      profile.market_data.total_volume[currencyName]
                    )}
                  </DataItem>
                  <DataItem>
                    <span>Circulating Supply:</span>{" "}
                    {roundToNumber(profile.market_data.circulating_supply, 0)}{" "}
                    <Symbol>{profile.symbol}</Symbol>
                  </DataItem>
                  <DataItem>
                    <span>Max Supply:</span>{" "}
                    {profile.market_data.max_supply
                      ? profile.market_data.max_supply
                      : 0}{" "}
                    <Symbol>{profile.symbol}</Symbol>
                  </DataItem>
                </DataSummary>
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
              <LinkHolder>
                {profile.links.blockchain_site.length !== 0 &&
                  profile.links.blockchain_site.slice(0, 3).map((site) => {
                    return (
                      <LinkContainer>
                        <LinkIcon src={linkIcon} alt="link icon" />
                        <Site href={site} target="_blank" rel="noreferrer">
                          {site.slice(8)}
                          <CopyIcon src={copyIcon} alt="copy icon" />
                        </Site>
                      </LinkContainer>
                    );
                  })}
              </LinkHolder>
            </DescriptionHolder>
            <GraphHolder>
              <CryptoExchange cryptoName={profile.symbol} currencyName={currencyName} currentPrice={profile.market_data.current_price[currencyName]} />
              <GraphContainer>
                <CoinPageGraph
                  cryptoName={profile.name.toLowerCase()}
                  currencyName={currencyName}
                />

              </GraphContainer>
              
            </GraphHolder>
          </CoinPageMain>
        )}
      </>
    );
  }
}
