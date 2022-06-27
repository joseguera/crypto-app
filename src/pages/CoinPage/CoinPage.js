import React from "react";
import axios from "axios";
import { SummaryHolder, DataHolder, Data, DescriptionHolder, LinkHolder, Symbol, DataList, DataItem, LinkContainer, Site, LinkIcon, CopyIcon } from "./CoinPage.styles";
import { roundToNumber, formatCurrency } from "util/numberUtil";
import linkIcon from "../../images/awesome-link.svg"
import copyIcon from "../../images/feather-copy.svg"


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
  };

  setDate = (dateString) => {
    const formatDate = new Date(dateString);
    return formatDate.toLocaleDateString('en-US');
  }

  setCurrency = (currency) => {
    if (currency === 'usd') return '$';
    if (currency === 'eur') return '€';
    if (currency === 'gbp') return '£';
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
              <h2>Your Summary</h2>
              <SummaryHolder>
                <div>
                  <img src={profile.image.small} alt={profile.name} />
                  <p>{profile.name} <Symbol>({profile.symbol})</Symbol></p>
                  <a href={profile.links.homepage[0]} target="_blank" rel="noreferrer">
                    {profile.links.homepage[0].slice(8, -1)}
                  </a>
                </div>
                <div>
                  <p>{this.formatter.format(profile.market_data.current_price[currencyName])}</p>
                  <p>{roundToNumber(profile.market_data.price_change_percentage_24h_in_currency[currencyName], 2) + `%`}</p>
                  <DataHolder>
                    <Data>
                      <p>ATH:</p>
                      <p>{this.formatter.format(profile.market_data.ath[currencyName])}</p>
                      <p>{roundToNumber(profile.market_data.ath_change_percentage[currencyName], 2)}%</p>
                      <p>{this.setDate(profile.market_data.ath_date[currencyName])}</p>
                    </Data>
                    <Data>
                      <p>ATL:</p>
                      <p>{this.formatter.format(profile.market_data.atl[currencyName])}</p>
                      <p>{roundToNumber(profile.market_data.atl_change_percentage[currencyName], 2)}%</p>
                      <p>{this.setDate(profile.market_data.atl_date[currencyName])}</p>
                    </Data>
                  </DataHolder>
                </div>
                <DataList>
                  <DataItem><span>Market Cap: </span>{this.setCurrency(currencyName)}{formatCurrency(profile.market_data.market_cap[currencyName])}{' '}<span>{roundToNumber(profile.market_data.market_cap_change_percentage_24h_in_currency[currencyName], 2)}%</span></DataItem>
                  <DataItem><span>Fully Diluted Valuation: </span>{this.setCurrency(currencyName)}{(profile.market_data.fully_diluted_valuation[currencyName]) ? formatCurrency(profile.market_data.fully_diluted_valuation[currencyName]) : '0.00'}</DataItem>
                  <DataItem><span>Volume 24h:</span>{this.setCurrency(currencyName)}{formatCurrency(profile.market_data.total_volume[currencyName])}</DataItem>
                  <DataItem><span>Volume / Market:</span> {roundToNumber(profile.market_data.total_volume[currencyName]/profile.market_data.market_cap[currencyName], 4)}</DataItem>
                  <br />
                  <DataItem><span>Total Volume:</span>{this.setCurrency(currencyName)}{formatCurrency(profile.market_data.total_volume[currencyName])}</DataItem>
                  <DataItem><span>Circulating Supply:</span> {roundToNumber(profile.market_data.circulating_supply, 0)}{' '}<Symbol>{profile.symbol}</Symbol></DataItem>
                  <DataItem><span>Max Supply:</span> {(profile.market_data.max_supply) ? profile.market_data.max_supply : 0}{' '}<Symbol>{profile.symbol}</Symbol></DataItem>
                </DataList>
              </SummaryHolder>
              <h2>Description</h2>
              <DescriptionHolder>
                <div>
                  <p dangerouslySetInnerHTML={{__html:profile.description.en}}></p>
                </div>
                <LinkHolder>
                  {profile.links.blockchain_site.length !== 0 && (
                    profile.links.blockchain_site.slice(0, 3).map((site) => {
                      return (
                        <LinkContainer>
                          <LinkIcon src={linkIcon} alt="link icon" />
                          <Site href={site} target="_blank" rel="noreferrer">
                            {site.slice(8)}
                            <CopyIcon src={copyIcon} alt="copy icon" />
                          </Site>                          
                        </LinkContainer>
                      )
                    })
                  )}
                </LinkHolder>
              </DescriptionHolder>
            </>
          )
        }
      </>
    );
  }
}
