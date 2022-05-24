import React from "react";
import axios from "axios";
import { Symbol } from "./CoinPage.styles";

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
              <div>
                <img src={profile.image.small} alt={profile.name} />
                <p>{profile.name} <Symbol>({profile.symbol})</Symbol></p>
                <a href={profile.links.homepage[0]} target="_blank" rel="noreferrer">
                  {profile.links.homepage[0].slice(8, -1)}
                </a>
              </div>
              <div>
                <div>
                  <p>ATH:</p>
                  <p>{profile.market_data.ath[currencyName]}</p>
                  <p>{profile.market_data.ath_change_percentage[currencyName]}%</p>
                  <p>{this.setDate(profile.market_data.ath_date[currencyName])}</p>
                </div>
                <div>
                  <p>ATL:</p>
                  <p>{profile.market_data.atl[currencyName]}</p>
                  <p>{profile.market_data.atl_change_percentage[currencyName]}%</p>
                  <p>{this.setDate(profile.market_data.atl_date[currencyName])}</p>
                </div>
              </div>
              <div></div>
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
