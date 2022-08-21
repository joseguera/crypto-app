import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
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

export default function App(props) {
  console.log(props.labels, props.prices);
  const initialData = {
    labels: props.labels,
    datasets: [
      {
        data: props.prices,
        tension: 0.4,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const [data, setData] = useState(initialData);
  const chartRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getData(cRef) {
    try {
      const chart = cRef?.current;
      if (chart) {
        const newData = {
          labels: props.labels,
          datasets: [
            {
              data: props.prices,
              tension: 0.4,
              borderColor: "rgba(33, 114, 229, 1)",
              backgroundColor: createDarkGradient(chart.ctx),
              fill: {
                target: "origin",
              },
            },
          ],
        };
        setData(newData);
      }
    } catch (err) {
      console.log("fetch error: ", err.message);
    }
  }

  function createDarkGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, "rgba(33, 114, 229, 1)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
    return gradient;
  }

  useEffect(() => {
    getData(chartRef);
  }, [getData]);

  const barChart = (
    <Bar ref={chartRef} data={data} options={barOptions} />
  );

  return <div className="App">{barChart}</div>;
}