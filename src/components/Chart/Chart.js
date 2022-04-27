import React from 'react';
import axios from 'axios';

export default class Chart extends React.Component {
  state = {
    chart: null,
    isLoading: false,
    hasError: false
  }

  getChart = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily`
      );
      console.log('hello')
      this.setState({
        chart: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  conponentDidMount() {
    this.getChart()
  }
  
  render() {
    const { chart, isLoading } = this.state;
    const hasChart = !isLoading && chart;
    
    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasChart && (
          <div>Hello</div>
        )}
      </>
    );
  }
}
