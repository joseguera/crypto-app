import React from "react";
import axios from "axios";
import { SummaryHolder, DataHolder, Data, Symbol } from "./CoinPage.styles";

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
        `https://api.coingecko.com/api/v3/coins/shiba-inu?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      this.setState({
        profile: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidMount() {
    this.getCoinInfo();
  };

  setDate = (dateString) => {
    const formatDate = new Date(dateString);
    return formatDate.toLocaleDateString('en-US');
  } 

  render() {
    const { currencyName } = this.props;
    const { profile, isLoading } = this.state;
    const hasCoinProfile = !isLoading && profile;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasCoinProfile && (
            <>
              <h2>Your Summary:</h2>
              <SummaryHolder>
                <div>
                  <img src={profile.image.small} alt={profile.name} />
                  <p>{profile.name} <Symbol>({profile.symbol})</Symbol></p>
                  <a href={profile.links.homepage[0]} target="_blank" rel="noreferrer">
                    {profile.links.homepage[0].slice(8, -1)}
                  </a>
                </div>
                <div>
                  <p>{profile.market_data.current_price[currencyName]}</p>
                  <DataHolder>
                    <Data>
                      <p>ATH:</p>
                      <p>{profile.market_data.ath[currencyName]}</p>
                      <p>{profile.market_data.ath_change_percentage[currencyName]}%</p>
                      <p>{this.setDate(profile.market_data.ath_date[currencyName])}</p>
                    </Data>
                    <Data>
                      <p>ATL:</p>
                      <p>{profile.market_data.atl[currencyName]}</p>
                      <p>{profile.market_data.atl_change_percentage[currencyName]}%</p>
                      <p>{this.setDate(profile.market_data.atl_date[currencyName])}</p>
                    </Data>
                  </DataHolder>
                </div>
                <div>
                  <p><span>Market Cap:</span> ${profile.market_data.market_cap[currencyName]}</p>
                  <p><span>Fully Diluted Valuation:</span> ${profile.market_data.fully_diluted_valuation[currencyName]}</p>
                  <p><span>Volume 24h:</span> ${profile.market_data.total_volume[currencyName]}</p>
                  <p><span>Volume/Market:</span> ${profile.market_data.market_cap[currencyName]}</p>
                  {' '}
                  <p><span>Total Volume:</span> ${profile.market_data.total_volume[currencyName]}</p>
                  <p><span>Circulating Supply:</span> ${profile.market_data.circulating_supply}</p>
                  <p><span>Max Supply:</span> ${profile.market_data.max_supply}</p>
                </div>
              </SummaryHolder>
              <h2>Description</h2>
                <div>
                  <p>{profile.description.en}</p>
                </div>
              <div>
                {profile.links.blockchain_site.length !== 0 && (
                  profile.links.blockchain_site.slice(0, 3).map((site) => {
                    return (
                      <div>
                        <a href={site} target="_blank" rel="noreferrer">
                          {site.slice(8)}
                        </a>
                      </div>
                    )
                  })
                )}
              </div>
            </>
          )
        }
      </>
    );
  }
}
