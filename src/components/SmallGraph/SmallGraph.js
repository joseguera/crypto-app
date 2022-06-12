import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { GraphCointaner } from './SmallGraph.styles';

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
  elements: {
    point: {
      radius: 0
    }
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        beginAtZero: true,
        display: false,
        maxTicksLimit: 5
      }
    },
    y: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        beginAtZero: true,
        display: false,
        maxTicksLimit: 5
      }
    },
  }
};

const SmallGraph = (props) => {
    let graphData = [];
    let graphIndex = [];

    props.graphData.reduce(
      (acc, curr, idx) => {
        if (idx % 2 === 0 && idx % 3 === 0) {
          graphData = [...acc, curr]
        }
        return graphData;
    })

    props.graphData.reduce(
      (acc, curr, idx) => {
        if (idx % 2 === 0 && idx % 3 === 0) {
          graphIndex = [...acc, idx]
        }
        return graphIndex;
    })

  const data = {
    labels: graphIndex,
    datasets: [
      {
        data: graphData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
      <GraphCointaner>
        <Line options={options} data={data} />
      </GraphCointaner>
  )
};

export default SmallGraph;
