import React from "react";
import axios from "axios";
import {
  CryptoSummary,
  CryptoMarketSummary,
  MarketDataSummary,
  CoinPageDescription,
  CryptoLinks,
  CryptoExchange,
  CoinPageGraph,
} from "components";
import {
  CoinPageMain,
  SummaryHolder,
  PageTitle,
  PageText,
  SummaryContainer,
  DescriptionHolder,
  GraphHolder,
  GraphContainer,
} from "./CoinPage.styles";

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
                <CryptoMarketSummary
                  currencyName={this.props.currencyName}
                  profile={profile}
                />
                <MarketDataSummary
                  currencyName={this.props.currencyName}
                  profile={profile}
                />
              </SummaryContainer>
            </SummaryHolder>
            <DescriptionHolder>
              <CoinPageDescription profile={profile} />
              <CryptoLinks
                siteLinks={profile.links.blockchain_site}
                selectedTheme={this.props.selectedTheme}
              />
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
