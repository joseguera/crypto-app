import React from "react";
import { useSelector } from "react-redux";
import { CryptoTitleIcon } from "components";
import {
    CryptoAssetHolder,
    AssetDetailsHolder,
    MarketPriceHolder,
    YourCoinHolder,
    SectionTitle,
    Title,
    SectionContent,
    DataPoint,
    Label,
    Field
} from "./CryptoAsset.styles";
import { setCurrency } from './../../util/numberUtil';

export default function CryptoAsset(props) {
  const currency = useSelector((state) => state.currency.value);

  return (
    <CryptoAssetHolder>
      <CryptoTitleIcon profile={props.profile} image={props.image} />
      <AssetDetailsHolder>
        <MarketPriceHolder>
          <SectionTitle>
            <Title>Market Price:</Title>
          </SectionTitle>
          <SectionContent>
            <DataPoint>
              <Label>Current price:</Label>
              <Field>{setCurrency(currency)}{props.profile.currentPrice}</Field>
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
              <Field>{setCurrency(currency)}{props.profile.total}</Field>
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
  );
}
