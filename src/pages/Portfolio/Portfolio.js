import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { PortfolioModal, CryptoTitleIcon } from "components";
import {
  MainDiv,
  AssetBtnHolder,
  AssetBtnText,
  AssetContainer,
  CryptoAssetHolder,
  AssetDetailsHolder,
  MarketPriceHolder,
  YourCoinHolder,
  SectionTitle,
  Title,
  SectionContent,
  DataPoint,
  Label,
  Field,
} from "./Portfolio.styles";

const Portfolio = () => {
  const [modal, setModal] = useState(false);

  const currency = useSelector((state) => state.currency.value);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError] = useState(false);

  const getCoinInfo = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
            {modal && <PortfolioModal closeModal={openModal} />}
            <CryptoAssetHolder>
                <CryptoTitleIcon profile={profile[0]} image={profile[0].image}/>

              <AssetDetailsHolder>
                <MarketPriceHolder>
                  <SectionTitle>
                    <Title>Market Price:</Title>
                  </SectionTitle>
                  <SectionContent>
                    <DataPoint>
                      <Label>Current price:</Label>
                      <Field></Field>
                      <DataPoint>
                        <Label>Price change 24h:</Label>
                        <Field></Field>
                      </DataPoint>
                      <DataPoint>
                        <Label>Market Cap vs Volume:</Label>
                        <Field></Field>
                      </DataPoint>
                      <DataPoint>
                        <Label>Circ Supply vs Max Supply:</Label>
                        <Field></Field>
                      </DataPoint>
                    </DataPoint>
                  </SectionContent>
                </MarketPriceHolder>
                <YourCoinHolder>
                  <SectionTitle>
                    <Title>Your Coin:</Title>
                  </SectionTitle>
                  <SectionContent>
                    <DataPoint>
                      <Label>Coin Amount:</Label>
                      <Field></Field>
                    </DataPoint>
                    <DataPoint>
                      <Label>Amount Value:</Label>
                      <Field></Field>
                    </DataPoint>
                    <DataPoint>
                      <Label>Amount Price Change Since Purchase:</Label>
                      <Field></Field>
                    </DataPoint>
                    <DataPoint>
                      <Label>Purchase Date:</Label>
                      <Field></Field>
                    </DataPoint>
                  </SectionContent>
                </YourCoinHolder>
              </AssetDetailsHolder>
            </CryptoAssetHolder>
          </AssetContainer>
        </MainDiv>
      )}
    </>
  );
};

export default Portfolio;
