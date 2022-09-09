import React from "react";
import axios from "axios";
import { BarGraph, LineGraph, CryptoDropDown, DateButtons, GraphTitle, SideArrow } from "components";
import { GraphGrid, GraphCell, DateButtonHolder, GraphHeader, ChartHolder } from "./Graph.styles";
import { timeConverter } from "./../../util/numberUtil";

export default class Graph extends React.Component {
  state = {
    cryptoName: "bitcoin",
    lineDateRange: 1,
    barDateRange: 1,
    labels: [],
    prices: [],
    volumeLabels: [],
    volumePrices: [],
    lineGraph: true,
    barGraph: false,
    isLoading: false,
    hasError: false,
  };

  getLineGraphData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.state.cryptoName}/market_chart?vs_currency=${this.props.currencyName}&days=${this.state.lineDateRange}`
      );
      const { labels, prices } = data.prices.reduce(
        (acc, [label, price]) => ({
          labels: [...acc.labels, timeConverter(label)],
          prices: [...acc.prices, price],
        }),
        { labels: [], prices: [] }
      );
      this.setState({
        labels,
        prices,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };


  getBarGraphData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.state.cryptoName}/market_chart?vs_currency=${this.props.currencyName}&days=${this.state.barDateRange}`
      );

      const { volumeLabels, volumePrices } = data.total_volumes.reduce(
        (acc, [label, price]) => ({
          volumeLabels: [...acc.volumeLabels, timeConverter(label)],
          volumePrices: [...acc.volumePrices, price],
        }),
        { volumeLabels: [], volumePrices: [] }
      );

      this.setState({
        volumeLabels,
        volumePrices
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currencyName !== prevProps.currencyName) {
      this.getLineGraphData();
      this.getBarGraphData();
    }
    if (this.state.cryptoName !== prevState.cryptoName) {
      this.getLineGraphData();
      this.getBarGraphData();
    }
    if (this.state.lineDateRange !== prevState.lineDateRange) {
      this.getLineGraphData();
    }
    if (this.state.barDateRange !== prevState.barDateRange) {
      this.getBarGraphData();

    }
  }

  componentDidMount() {
    this.getLineGraphData();
    this.getBarGraphData();
  }

  setCryptoName = (cryptoName) => {
    this.setState({
      cryptoName,
    });
  };

  setLineDateRange = (dateRange) => {
    this.setState({
      lineDateRange: dateRange,
    });
  };

  setBarDateRange = (dateRange) => {
    this.setState({
      barDateRange: dateRange,
    });
  };

  switchGraph = () => {
    const { lineGraph, barGraph } = this.state;
    this.setState({ 
      lineGraph: !lineGraph,
      barGraph: !barGraph
    })
  }

  hasData = () => this.state.labels.length && this.state.prices.length;

  render() {
    const { isLoading, labels, prices, volumeLabels, volumePrices, lineGraph, barGraph } = this.state;
    const hasGraph = !isLoading && this.state.labels && this.state.volumeLabels;
    const lineGraphTitle = this.state.cryptoName === "bitcoin" ? "BTC" : "ETH";
    const barGraphTitle = this.state.cryptoName === "bitcoin" ? "BTC Volume" : "ETH Volume";

    const showLineGraph = (lineGraph) ? "visible" : "not-visible";
    const showBarGraph = (barGraph) ? "visible" : "not-visible";

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasGraph && this.hasData() && (
          <>
            <CryptoDropDown setCryptoName={this.setCryptoName} />
            <GraphGrid>
              <SideArrow direction="left" switchGraph={this.switchGraph}/>
              <GraphCell className={showLineGraph}>
                <GraphHeader>
                  <GraphTitle
                    cryptoName={lineGraphTitle}
                    currencyName={this.props.currencyName}
                  />
                  <DateButtonHolder>
                    <DateButtons setDateRange={this.setLineDateRange} />
                  </DateButtonHolder>
                </GraphHeader>
                <ChartHolder>
                  <LineGraph labels={labels} prices={prices} />
                </ChartHolder>
              </GraphCell>
              <GraphCell className={showBarGraph}>
                <GraphHeader>
                  <GraphTitle
                    cryptoName={barGraphTitle}
                    currencyName={this.props.currencyName}
                  />
                  <DateButtonHolder>
                    <DateButtons setDateRange={this.setBarDateRange} />
                  </DateButtonHolder>
                </GraphHeader>
                <ChartHolder>
                  <BarGraph labels={volumeLabels} prices={volumePrices} />
                </ChartHolder>
              </GraphCell>
              <SideArrow direction="right" switchGraph={this.switchGraph} />
            </GraphGrid>
          </>
        )}
      </>
    );
  }
}
