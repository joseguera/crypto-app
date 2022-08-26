import React from "react";
import axios from "axios";
import * as theme from "../styles/Theme.styled";
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
import { timeConverter } from "util/numberUtil";
import { GraphCointaner } from "./CoinPageGraph.styles";
import './CoinPageGraph.css'

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
    let backgroundColor = (this.props.selectedTheme.name === "dark-theme") ? theme.dark.colors.lineGraphFill : theme.light.colors.lineGraphFill;
    let borderColor = (this.props.selectedTheme.name === "dark-theme") ? theme.dark.colors.lineGraphBorder : theme.light.colors.lineGraphBorder;

    return {
      labels: label,
      datasets: [
        {
          data: price,
          fill: true,
          tension: 0.4,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#06D554",
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
    console.log(this.props.selectedTheme)
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
              <Line
                options={options}
                data={graphData}
                className="graph-style"
              />
            </GraphCointaner>
          </>
        )}
      </>
    );
  }
}
