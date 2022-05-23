import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  render() {
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
                <p>{profile.name}</p>
                <Link to={`/coinpage/${profile.links.homepage[0]}`}>
                  {profile.links.homepage[0].slice(8, -1)}
                </Link>
              </div>
              <div></div>
              <div></div>
              <h2>Description</h2>
                <div>
                  <p>{profile.description.en}</p>
                </div>
              <div>
                {(profile.links.blockchain_site.length !== 0) &&
                  profile.links.blockchain_site.map((site) => {
                    return (
                      <div>
                        <Link to={site}>
                          {site.slice(8, -1)}
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </>
          )
        }
      </>
    );
  }
}
