import React, { useState, useRef } from "react";
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

import { GraphCointainer } from "./BarGraph.styles"

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

type Props = {
  labels: Array<string>,
  prices: Array<number>
}

export interface BarGraphVars {
  fontSize: number,
  tickLimit: number
};

const BarGraph: React.FunctionComponent<Props> = ({ labels, prices }) => {
  const windowWidth = window.innerWidth;

  const font = (windowWidth > 786) ? 12 : 9;
  const ticks = (windowWidth > 786) ? 7 : 5;

  const chartRef = useRef(null);
  const [fontSize, setFontSize] = useState<BarGraphVars | null>(font);
  const [ticksLimit, setTicksLimit] = useState<BarGraphVars | null>(ticks);

  const barOptions = {
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
          maxTicksLimit: ticksLimit,
          padding: 10,
          align: "start",
          font: {
            size: fontSize,
          }
        },
      },
    },
  };
  
  function createDarkGradient(ctx) {
    if (!ctx) {
      return ''
    }
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, "rgba(33, 114, 229, 1)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
    return gradient;
  }

  const data = {
    labels: labels,
    datasets: [
      {
        data: prices,
        tension: 0.4,
        borderColor: "rgba(33, 114, 229, 1)",
        backgroundColor: createDarkGradient(chartRef?.current?.ctx),
        fill: {
          target: "origin",
        },
      },
    ],
  };

  const barChart = <Bar ref={chartRef} data={data} options={barOptions} className="graph-style" />;

  return (
    <GraphCointainer>
      <div>{barChart}</div>
    </GraphCointainer>
  )
};

export default BarGraph;