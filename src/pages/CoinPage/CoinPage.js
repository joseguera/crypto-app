import React, { useState } from "react";
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

export default function CoinPage(props) {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError] = useState(false);

  const getCoinInfo = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${props.match.params.id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`
      );
      setProfile(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  useState(() => {
    getCoinInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);

    const { currencyName } = props;
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
                  currencyName={props.currencyName}
                  profile={profile}
                />
                <MarketDataSummary
                  currencyName={props.currencyName}
                  profile={profile}
                />
              </SummaryContainer>
            </SummaryHolder>
            <DescriptionHolder>
              <CoinPageDescription profile={profile} />
              <CryptoLinks
                siteLinks={profile.links.blockchain_site}
                selectedTheme={props.selectedTheme}
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
                  selectedTheme={props.selectedTheme}
                />
              </GraphContainer>
            </GraphHolder>
          </CoinPageMain>
        )}
      </>
    );
}
