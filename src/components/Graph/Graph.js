import React from "react";
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { GraphGrid, GraphCell } from './Graph.style';
import { timeConverter } from '../../util/numberUtil';

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
    },
    title: {
      display: true,
      text: "Graph Name",
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
        // callback: function (value, index) {
        //   return this.state.labels[index].slice(3, 5)
        // },
        autoSkip: true,
        maxTicksLimit: 15,
      },
    },
  },
};

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Graph Name",
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
    },
  },
};

export default class Graph extends React.Component {
  
  state ={
    graph: null,
    labels: [],
    prices: [],
    volumeLabels: [],
    volumePrices: [],
    isLoading: false,
    hasError: false
  }

  getGraphData = async () => {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${this.props.cryptoName}/market_chart?vs_currency=${this.props.currencyName}&days=5`
    );
    const { labels, prices } = data.prices.reduce((acc, [label, price]) => ({
        labels: [...acc.labels, timeConverter(label)],
        prices: [...acc.prices, price]
      }), {labels: [], prices:[]});
    
    const { volumeLabels, volumePrices } = data.total_volumes.reduce((acc, [label, price]) => ({
      volumeLabels: [...acc.volumeLabels, timeConverter(label)],
      volumePrices: [...acc.volumePrices, price]
    }), {volumeLabels: [], volumePrices:[]});

    this.setState({
      graph: data,
      labels,
      prices,
      volumeLabels,
      volumePrices
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currencyName !== prevProps.currencyName) {
      this.getGraphData();
    }
    if (this.props.cryptoName !== prevProps.cryptoName) {
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
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
      ]
    }
  }
  
  hasData = () =>  this.state.labels.length && this.state.prices.length

  render() {
    const { graph, isLoading } = this.state;
    const hasGraph = !isLoading && graph;
    const priceData = this.formatData(this.state.labels, this.state.prices);
    const volumeData = this.formatData(this.state.volumeLabels, this.state.volumePrices);
    lineOptions.plugins.title.text = (this.props.cryptoName === 'bitcoin') ? 'BTC' : 'ETH';
    barOptions.plugins.title.text = (this.props.cryptoName === 'bitcoin') ? 'BTC Volume' : 'ETH Volume';

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasGraph && this.hasData() && (
          <GraphGrid>
            <GraphCell>
              <Line options={lineOptions} data={priceData} />
            </GraphCell>
            <GraphCell>
              <Bar options={barOptions} data={volumeData} />
            </GraphCell>
          </GraphGrid>
        )} 
      </>
    );
  }

};