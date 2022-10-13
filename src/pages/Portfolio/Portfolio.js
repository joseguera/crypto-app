import { isEmpty } from "lodash";
import React from "react";
import {
  MainDiv,
  AssetBtnHolder,
  AssetBtnText,
  AssetContainer,
  CryptoAssetHolder,
  CryptoTitle,
  CryptoContent,
  CryptoIcon,
  CryptoImg,
  CryptoName,
  CryptoText,
  Symbol,
  AssetDetailsHolder,
  MarketPriceHolder,
  YourCoinHolder,
  SectionTitle,
  Title,
  SectionContent,
  DataPoint,
  Label,
  Field
} from "./Portfolio.styles";

const Portfolio = () => {
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d
  return (
    <MainDiv>
      <AssetContainer>
        <AssetBtnHolder>
          <AssetBtnText>Add Asset</AssetBtnText>
        </AssetBtnHolder>
        <CryptoAssetHolder>
          <CryptoTitle>
            <CryptoContent>
              <CryptoIcon>
                <CryptoImg src="none" alt="none" />
              </CryptoIcon>
              <CryptoName>
                <CryptoText>
                  CryptoCurrency
                  {/* {props.profile.name.length > 7 ? (
                <>
                  <br />
                  <br />
                </>
              ) : (
                " "
              )} */}
                  <Symbol>(CC)</Symbol>
                </CryptoText>
              </CryptoName>
            </CryptoContent>
          </CryptoTitle>
          <AssetDetailsHolder>
            <MarketPriceHolder>
              <SectionTitle><Title>Market Price:</Title></SectionTitle>
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
              <SectionTitle><Title>Your Coin:</Title></SectionTitle>
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
  );
};

export default Portfolio;
