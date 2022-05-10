import React from "react";
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
  
  state ={
    graph: null,
    labels: [],
    prices: [],
    isLoading: false,
    hasError: false
  }

  getGraphData = async () => {
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30"
    );
    const label = data.total_volumes.map((arr) => arr[0]);
    const price = data.total_volumes.map((arr) => arr[1]);
    this.setState({
      graph: data,
      labels: label,
      prices: price,
    })
  }
  
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
          backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
      ]
    };

    const hasData = () => {
      if (data.labels.length !== 0 && data.datasets[0].data.length !== 0) {
        return <Line options={options} data={data} />
      }
    }
      
      
      
    
    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasGraph && hasData()}
        
      </>
    );
  }

};
