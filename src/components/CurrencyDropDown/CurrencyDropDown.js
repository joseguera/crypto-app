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
    let rate = 0;
    if (value === 'usd') {
      currency = this.state.currencies.rates[value].name;
      rate = this.state.currencies.rates[value].value;
    } else if (value === 'eur') {
      currency = this.state.currencies.rates[value].name;
      rate = this.state.currencies.rates.usd.value / this.state.currencies.rates[value].value

    } else if (value === 'gbp') {
      currency = this.state.currencies.rates[value].name;
      rate = this.state.currencies.rates.usd.value / this.state.currencies.rates[value].value;
    }
    this.setState({
      currencyName: currency,
      currencyRate: rate
    })
    this.props.currencyConverter(currency, rate);
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
    console.log(this.state.currencyRate)
    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {hasCurrencies && (
          <select onChange={(e) => this.getCurrencyChange(e.target.value)} name="currency" id="currency">
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
          </select>
        )}
      </div>
    );
  }
};
