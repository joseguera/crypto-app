import React from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CoinPageDateButtons } from "components";
import { timeConverter, formatCurrency } from "util/numberUtil";
import { GraphCointaner, GraphDataHolder } from "./CoinPageGraph.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        beginAtZero: true,
        display: false,
        maxTicksLimit: 5,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        beginAtZero: true,
        display: false,
        maxTicksLimit: 5,
      },
    },
  },
};

export default class CoinPageGraph extends React.Component {
  state = {
    dateRange: 1,
    labels: [],
    prices: [],
    isLoading: false,
    hasError: false,
  };

  getGraphData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.props.cryptoName}/market_chart?vs_currency=${this.props.currencyName}&days=${this.state.dateRange}`
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

  formatData = (price, label) => {
    return {
      labels: label,
      datasets: [
        {
          data: price,
          fill: true,
          borderColor: "#2C2F36",
          backgroundColor: "#1C1E24",
          pointHoverRadius: 5,
         pointHoverBackgroundColor: "#00FF5F"
        },
      ],
    };
  };

  setDateRange = (dateRange) => {
    this.setState({
      dateRange,
    });
  };

  hasData = () => this.state.prices.length;

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currencyName !== prevProps.currencyName) {
      this.getGraphData();
    }
    if (this.props.cryptoName !== prevProps.cryptoName) {
      this.getGraphData();
    }
    if (this.state.dateRange !== prevState.dateRange) {
      this.getGraphData();
    }
  }

  componentDidMount() {
    this.getGraphData();
  }

  render() {
    const graphData = this.formatData(this.state.prices, this.state.labels);
    const { isLoading } = this.state;
    const hasGraph = !isLoading && this.state.prices;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasGraph && this.hasData() && (
          <>
            <CoinPageDateButtons setDateRange={this.setDateRange} />
            <GraphCointaner>
              <Line options={options} data={graphData} className="graph-style" />
            </GraphCointaner>
          </>
        )}
      </>
    );
  }
}
