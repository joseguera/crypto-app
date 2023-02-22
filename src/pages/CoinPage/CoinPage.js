import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  CryptoSummary,
  CryptoMarketSummary,
  MarketDataSummary,
  CoinPageDescription,
  CryptoLinks,
  CryptoExchange,
  CoinPageGraph,
  LoadingCoinPage,
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
  const currency = useSelector((state) => state.currency.value);
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    getCoinInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);

  const hasCoinProfile = !isLoading && profile;

  return (
    <>
      <CoinPageMain>
        {hasCoinProfile ? (
          <>
            <SummaryHolder>
              <PageTitle>
                <PageText>Your Summary</PageText>
              </PageTitle>
              <SummaryContainer>
                <>
                  <CryptoSummary profile={profile} />
                  <CryptoMarketSummary profile={profile} />
                  <MarketDataSummary profile={profile} />
                </>
              </SummaryContainer>
            </SummaryHolder>
            <DescriptionHolder>
              <>
                <CoinPageDescription profile={profile} />
                <CryptoLinks
                  siteLinks={profile.links.blockchain_site}
                  selectedTheme={props.selectedTheme}
                />
              </>
            </DescriptionHolder>
            <GraphHolder>
              <>
                <CryptoExchange
                  cryptoName={profile.symbol}
                  currentPrice={profile.market_data.current_price[currency]}
                />
                <GraphContainer>
                  <CoinPageGraph
                    cryptoName={profile.name.toLowerCase()}
                    selectedTheme={props.selectedTheme}
                  />
                </GraphContainer>
              </>
            </GraphHolder>
          </>
        ) : (
          <SummaryHolder>
            <PageTitle>
              <PageText>Your Summary</PageText>
            </PageTitle>
            <SummaryContainer>
              <LoadingCoinPage />
            </SummaryContainer>
          </SummaryHolder>
        )}
      </CoinPageMain>
    </>
  );
}
