import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
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
import { GraphCointaner, NoGraph } from "./CoinPageGraph.styles";

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

export default function CoinPageGraph(props) {
  const currency = useSelector((state) => state.currency.value)
  const themeColor = useSelector((state) => state.theme.value);
  const [dateRange, setDateRange] = useState(1);
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [isLoading] = useState(false);
  const [hasError] = useState(false);

  const getGraphData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${props.cryptoName}/market_chart?vs_currency=${currency}&days=${dateRange}`
      );
      const { labels, prices } = data.prices.reduce(
        (acc, [label, price]) => ({
          labels: [...acc.labels, timeConverter(label)],
          prices: [...acc.prices, price],
        }),
        { labels: [], prices: [] }
      );
      setLabels(labels);
      setPrices(prices);
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  const formatData = (price, label) => {
    let backgroundColor = (themeColor) ? theme.light.colors.appBackground : theme.dark.colors.appBackground;
    let borderColor = (themeColor) ? theme.light.colors.lineGraphBorder : theme.dark.colors.lineGraphBorder ;

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

  const setRange = (dateRange) => {
    setDateRange(dateRange);
  };

  const hasData = () => prices.length;

  useEffect(() => {
    getGraphData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, props.cryptoName, dateRange]);

    const graphData = formatData(prices, labels);
    const hasGraph = !isLoading && prices;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasGraph && hasData() ? (
          <>
            <CoinPageDateButtons setDateRange={setRange} />
            <GraphCointaner>
              <Line
                options={options}
                data={graphData}
                className="graph-style"
              />
            </GraphCointaner>
          </>
        ) : (
          <NoGraph>No Graph to Display</NoGraph>
        )
      }
      </>
    );
}
