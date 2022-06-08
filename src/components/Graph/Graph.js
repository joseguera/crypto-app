import React from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { DateButtons, GraphTitle } from "components";
import {
  GraphGrid,
  GraphCell,
  DateButtonHolder,
} from "./Graph.styles";
import { timeConverter } from "./../../util/numberUtil";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    yAxis: {
      axis: "y",
      display: false,
    },
    xAxis: {
      axis: "x",
      grid: {
        display: false,
        drawTicks: false,
        borderWidth: 0,
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        autoSkip: true,
        maxTicksLimit: 7,
        padding: 10,
        align: "start",
      },
    },
  },
};

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    yAxis: {
      axis: "y",
      display: false,
    },
    xAxis: {
      axis: "x",
      grid: {
        display: false,
        drawTicks: false,
        borderWidth: 0,
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        autoSkip: true,
        maxTicksLimit: 7,
        padding: 10,
        align: "start",
      },
    },
  },
};


export default class Graph extends React.Component {
  state = {
    labels: [],
    prices: [],
    volumeLabels: [],
    volumePrices: [],
    isLoading: false,
    hasError: false,
  };

  getGraphData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.props.cryptoName}/market_chart?vs_currency=${this.props.currencyName}&days=${this.props.dateRange}`
      );
      const { labels, prices } = data.prices.reduce(
        (acc, [label, price]) => ({
          labels: [...acc.labels, timeConverter(label)],
          prices: [...acc.prices, price],
        }),
        { labels: [], prices: [] }
      );

      const { volumeLabels, volumePrices } = data.total_volumes.reduce(
        (acc, [label, price]) => ({
          volumeLabels: [...acc.volumeLabels, timeConverter(label)],
          volumePrices: [...acc.volumePrices, price],
        }),
        { volumeLabels: [], volumePrices: [] }
      );

      this.setState({
        labels,
        prices,
        volumeLabels,
        volumePrices,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currencyName !== prevProps.currencyName) {
      this.getGraphData();
    }
    if (this.props.cryptoName !== prevProps.cryptoName) {
      this.getGraphData();
    }
    if (this.props.dateRange !== prevProps.dateRange) {
      this.getGraphData();
    }
  }

  componentDidMount() {
    this.getGraphData();
  }

  formatData = (label, price) => {
    return {
      labels: label,
      datasets: [
        {
          data: price,
          fill: false,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  };

  hasData = () => this.state.labels.length && this.state.prices.length;

  render() {
    const { isLoading } = this.state;
    const hasGraph = !isLoading && this.state.labels && this.state.volumeLabels;
    const priceData = this.formatData(this.state.labels, this.state.prices);
    const volumeData = this.formatData(
      this.state.volumeLabels,
      this.state.volumePrices
    );
    const lineGraphTitle = this.props.cryptoName === "bitcoin" ? "BTC" : "ETH";
    const barGraphTitle = this.props.cryptoName === "bitcoin" ? "BTC Volume" : "ETH Volume";

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasGraph && this.hasData() && (
          <GraphGrid>
            <GraphCell>
              <GraphTitle cryptoName={lineGraphTitle} currencyName={this.props.currencyName} />
              <DateButtonHolder>
                <DateButtons setDateRange={this.props.setDateRange} />
              </DateButtonHolder>
              <Line options={lineOptions} data={priceData} />
            </GraphCell>
            <GraphCell>
              <GraphTitle cryptoName={barGraphTitle} currencyName={this.props.currencyName} />
              <DateButtonHolder>
                <DateButtons setDateRange={this.props.setDateRange} />
              </DateButtonHolder>
              <Bar options={barOptions} data={volumeData} />
            </GraphCell>
          </GraphGrid>
        )}
      </>
    );
  }
}
