import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PortfolioModal, CryptoAsset } from "components";
import {
  MainDiv,
  AssetBtnHolder,
  AssetBtnText,
  AssetContainer,
  TitleHolder,
  Title,
} from "./Portfolio.styles";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const currency = useSelector((state) => state.currency.value);
  const [portfolio, setPortfolio] = useState([
    { id: "bitcoin", date: "02-02-2022", amount: 2.6 },
    { id: "ethereum", date: "02-02-2022", amount: 1 },
  ]);
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError] = useState(false);

  async function getData() {
    try {
      const noDuplicates = portfolio.reduce((acc, el) => {
        if (acc[el.id]) return acc;
        return { ...acc, [el.id]: el };
      }, {});

      const pricedCoinsObject = await Promise.all(
        Object.keys(noDuplicates).map(async (key) => {
          const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/${key}`
          );
          const json = await data.json();
          noDuplicates[key].currentPrice =
            json.market_data.current_price[currency];
        })
      );

      const newPortfolio = await Promise.all(
        portfolio.map(async (coin) => {
          const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${coin.date}`
          );
          const json = await data.json();
          return {
            id: json.id,
            name: json.name,
            symbol: json.symbol,
            image: json.image.thumb,
            total: coin.amount * json.market_data.current_price[currency],
            previousPrice: json.market_data.current_price[currency],
            currentPrice: noDuplicates[coin.id].currentPrice,
            isBigger:
              json.market_data.current_price[currency] >
              noDuplicates[coin.id].currentPrice,
          };
        })
      );
      setProfile(newPortfolio);
    } catch (err) {
      console.log("Location Error:", err);
    }
  }

  const handleSubmit = (id, date, amount) => {
    setPortfolio([...portfolio, { id, date, amount }]);
    setModal(!modal)
  };

  const openModal = (e) => {
    setModal(!modal);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolio, currency]);

  let min = 1;
  let max = 100;

  const randomNum = Math.random() * (max - min) + min;

  const keyNumber = Math.trunc(randomNum);

  const hasCoinProfile = !isLoading && profile;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {hasCoinProfile && (
        <MainDiv>
          <AssetContainer>
            <AssetBtnHolder onClick={() => openModal()}>
              <AssetBtnText>Add Asset</AssetBtnText>
            </AssetBtnHolder>
            <TitleHolder>
              <Title>Your Assets</Title>
            </TitleHolder>
            {modal && (
              <PortfolioModal
                closeModal={openModal}
                handleSubmit={handleSubmit}
              />
            )}
            {profile.map((pro) => {
              return (
                <CryptoAsset key={`${pro.id}${keyNumber}`} profile={pro} image={pro.image} />
              );
            })}
          </AssetContainer>
        </MainDiv>
      )}
    </>
  );
};

export default Portfolio;
