import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { PortfolioModal, CryptoAsset } from "components";
import {
  MainDiv,
  AssetBtnHolder,
  AssetBtnText,
  AssetContainer,
  TitleHolder,
  Title
} from "./Portfolio.styles";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const currency = useSelector((state) => state.currency.value);
  const [ids, setIds] = useState('bitcoin%2C%20dogecoin')
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError] = useState(false);

  const getCoinInfo = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${ids}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setProfile(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  const openModal = (e) => {
    setModal(!modal);
  };

  useEffect(() => {
    getCoinInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const hasCoinProfile = !isLoading && profile;

  return (
    <>
      {console.log(profile)}
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
            {modal && <PortfolioModal closeModal={openModal} />}
            {profile.map((asset) => {
              return <CryptoAsset profile={asset} image={asset.image} />
            })}
          </AssetContainer>
        </MainDiv>
      )}
    </>
  );
};

export default Portfolio;
