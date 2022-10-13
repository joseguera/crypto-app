import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import {
  BarGraph,
  LineGraph,
  CryptoDropDown,
  DateButtons,
  GraphTitle,
  SideArrow,
  LoadingWheel
} from "components";
import {
  GraphGrid,
  GraphCell,
  DateButtonHolder,
  GraphHeader,
  ChartHolder,
} from "./Graphs.styles";
import { timeConverter } from "../../util/numberUtil";

export default function Graph(props) {
  const currency = useSelector((state) => state.currency.value);
  const [cryptoName, setCrypto] = useState("bitcoin");
  const [lineDateRange, setLineDate] = useState(1);
  const [barDateRange, setBarDate] = useState(1);
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [volumeLabels, setVolumeLabels] = useState([]);
  const [volumePrices, setVolumePrices] = useState([]);
  const [lineGraph, setLineGraph] = useState(true);
  const [barGraph, setBarGraph] = useState(false);
  const [isLoading] = useState(false);
  const [hasError] = useState(false);

  const getLineGraphData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=${currency}&days=${lineDateRange}`
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

  const getBarGraphData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=${currency}&days=${barDateRange}`
      );

      const { volumeLabels, volumePrices } = data.total_volumes.reduce(
        (acc, [label, price]) => ({
          volumeLabels: [...acc.volumeLabels, timeConverter(label)],
          volumePrices: [...acc.volumePrices, price],
        }),
        { volumeLabels: [], volumePrices: [] }
      );
      setVolumeLabels(volumeLabels);
      setVolumePrices(volumePrices);
      // insert setIsLoading()
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  useEffect(() => {
    getLineGraphData();
    getBarGraphData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, cryptoName, lineDateRange, barDateRange]);

  const setCryptoName = (cryptoName) => {
    setCrypto(cryptoName);
  };

  const setLineDateRange = (dateRange) => {
    setLineDate(dateRange);
  };

  const setBarDateRange = (dateRange) => {
    setBarDate(dateRange);
  };

  const switchGraph = () => {
    setLineGraph(!lineGraph);
    setBarGraph(!barGraph);
  };

  const hasData = () => labels.length && prices.length;

  const hasGraph = !isLoading && labels && volumeLabels;
  const lineGraphTitle = (cryptoName) === "bitcoin" ? "BTC" : "ETH";
  const barGraphTitle = (cryptoName) === "bitcoin" ? "BTC Volume" : "ETH Volume";

  const showLineGraph = lineGraph ? "visible" : "not-visible";
  const showBarGraph = barGraph ? "visible" : "not-visible";

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {hasGraph && hasData() && (
        <>
          <CryptoDropDown setCryptoName={setCryptoName} />
          <GraphGrid>
            <SideArrow direction="left" switchGraph={switchGraph} />
            <GraphCell className={showLineGraph}>
              <GraphHeader>
                <GraphTitle cryptoName={lineGraphTitle} />
                <DateButtonHolder>
                  <DateButtons setDateRange={setLineDateRange} />
                </DateButtonHolder>
              </GraphHeader>
              <ChartHolder>
                <LineGraph labels={labels} prices={prices} />
              </ChartHolder>
            </GraphCell>
            <GraphCell className={showBarGraph}>
              <GraphHeader>
                <GraphTitle cryptoName={barGraphTitle} />
                <DateButtonHolder>
                  <DateButtons setDateRange={setBarDateRange} />
                </DateButtonHolder>
              </GraphHeader>
              <ChartHolder>
                {(!isLoading) ? <BarGraph labels={volumeLabels} prices={volumePrices} /> : <LoadingWheel />}
              </ChartHolder>
            </GraphCell>
            <SideArrow direction="right" switchGraph={switchGraph} />
          </GraphGrid>
        </>
      )}
    </>
  );
}
