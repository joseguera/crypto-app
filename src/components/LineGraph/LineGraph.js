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

export default function LineGraph(props) {

  const initialData = {
  labels: props.labels,
  datasets: [
    {
      data: props.prices,
      tension: 0.4,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};
  const [data, setData] = useState(initialData);
  const [borderColor, setBorderColor] = useState("rgba(75,192,192,1)")
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
              backgroundColor: createDarkGradient(chart.ctx),
              borderColor: getBorderColor(),
              fill: {
                target: "origin"
              }
            }
          ]
        };
        setData(newData);
      }
    } catch (err) {
      console.log("fetch error: ", err.message);
    }
  }

  const getBorderColor = () => {
    let borderColor = "";
    if (props.prices[0] > props.prices[props.prices.length - 1]) {
      borderColor = "rgba(254, 16, 64, 1)";
    } else {
      borderColor = "rgba(0, 255, 95, 1)";
    }
    return borderColor;
  };

  function createDarkGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    if (props.prices[0] > props.prices[props.prices.length - 1]) {
      // setBorderColor("rgba(254, 16, 64, 1)");
      gradient.addColorStop(0, "rgba(254, 16, 64, .5)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
    } else {
      // setBorderColor("rgba(0, 255, 95, 1)");
      gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
    }
    return gradient;
  }

  useEffect(() => {
    getData(chartRef);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.prices, props.labels]);

  const lineChart = <Line ref={chartRef} data={data} options={lineOptions} />;

  return <div className="LineGraph">{lineChart}</div>;
}