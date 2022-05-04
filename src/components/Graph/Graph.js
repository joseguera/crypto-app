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
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Line Chart"
    }
  }
};

export default class Graph extends React.Component {
  state = {
    graph: null,
    isLoading: false,
    hasError: false,
    labels: [],
    prices: []
  };

  getGraphData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily`);
      const label = data.total_volumes.map((arr) => arr[0]);
      const price = data.total_volumes.map((arr) => arr[1]);
      this.setState({
        graph: data,
        labels: label,
        prices: price,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidMount() {
    this.getGraphData();
  }

  render() {
    const { graph, isLoading } = this.state;
    const hasGraph = !isLoading && graph;

    const data = {
      labels: this.state.labels,
      datasets: [
        {
          data: this.state.prices,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };

    return (
    <>
      {isLoading && <div>Loading...</div>}
      {hasGraph && (
        // <Line options={options} data={data} />
        <p>Hello</p>
      )}
    </>
    );
  }
}
