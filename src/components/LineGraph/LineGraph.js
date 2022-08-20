import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
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
  elements: {
    point: {
      radius: 0,
    },
  },
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

function createDarkGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 350);
  gradient.addColorStop(0, "rgba(254, 16, 64, .5)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
  return gradient;
}

export default function App(props) {

  console.log(props.labels, props.prices);
  const initialRandomNums = {
  labels: props.labels,
  datasets: [
    {
      data: props.prices,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};
  const [randomNums, setRandomNums] = useState(initialRandomNums);
  const chartRef = useRef(null);

  async function getRandomNums(cRef) {
    try {
      const chart = cRef?.current;
      if (chart) {
        const newRandomNums = {
          labels: props.labels,
          datasets: [
            {
              data: props.prices,
              backgroundColor: createDarkGradient(chart.ctx),
              borderColor: "rgba(254, 16, 64, 1)",
              fill: {
                target: "origin"
              }
            }
          ]
        };
        setRandomNums(newRandomNums);
      }
    } catch (err) {
      console.log("fetch error: ", err.message);
    }
  }

  useEffect(() => {
    getRandomNums(chartRef);
  }, [getRandomNums]);

  const lineChart = <Line ref={chartRef} data={randomNums} options={lineOptions} />;

  return <div className="App">{lineChart}</div>;
}
