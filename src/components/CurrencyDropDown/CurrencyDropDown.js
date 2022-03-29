import React from 'react';
import axios from 'axios';

export default class CurrencyDropDown extends React.Component {
  state = {
    currencies: null,
    isLoading: false,
    hasError: false,
    currencyName: '',
    currencyRate: 0 
  }

  getCurrencyChange = (value) => {
    let currency = '';
    if (value === 'USD') {
      currency = this.state.currencies.rates.usd.name;
    } else if (value === 'EUR') {
      currency = this.state.currencies.rates.eur.name;

    } else if (value === 'GBP') {
      currency = this.state.currencies.rates.gbp.name;
    }
    this.props.currencyConverter(currency);
  }

  getCurrency = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/exchange_rates`
      );
      this.setState({
        currencies: data,
        isLoading: false
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidMount() {
    this.getCurrency();
  }
  
  render() {
    const { isLoading, currencies } = this.state;

    const hasCurrencies = !isLoading && currencies;

    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {hasCurrencies && (
          <select onChange={(e) => this.getCurrencyChange(e.target.value)} name="currency" id="currency">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
          </select>
        )}
      </div>
    );
  }
};
