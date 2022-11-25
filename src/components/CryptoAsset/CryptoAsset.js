import React from "react";
import { useSelector } from "react-redux";
import {
  CryptoTitleIcon,
  UpArrowGreen,
  DownArrowRed,
  ProgressBarTable,
} from "components";
import {
  roundToNumber,
  setCurrency,
  formatCurrency,
  relativeChange,
} from "util/numberUtil";
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
  Field,
  PercentChange,
} from "./CryptoAsset.styles";

export default function CryptoAsset(props) {
  const currency = useSelector((state) => state.currency.value);
  const priceChange24h = relativeChange(
    props.profile.previousPrice,
    props.profile.currentPrice
  );

  const marketCapvsTotalVolume = roundToNumber(
    (props.profile.total_volume * 100) / props.profile.market_cap,
    0
  );

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
              <Field>
                {setCurrency(currency)}
                {formatCurrency(roundToNumber(props.profile.currentPrice, 2))}
              </Field>
              <DataPoint>
                <Label>Price change 24h:</Label>
                <PercentChange>
                  {priceChange24h > 0 ? <UpArrowGreen /> : <DownArrowRed />}
                  <div className={priceChange24h > 0 ? "gain" : "loss"}>
                    {roundToNumber(priceChange24h, 2)}%
                  </div>
                </PercentChange>
              </DataPoint>
              <DataPoint>
                <Label>Market Cap vs Volume:</Label>
                <Field>
                  {isNaN(marketCapvsTotalVolume) ? "∞" : marketCapvsTotalVolume}
                  %
                </Field>
                <ProgressBarTable
                  values={{
                    first: props.profile.total_volume,
                    second: props.profile.market_cap,
                  }}
                />
              </DataPoint>
              <DataPoint>
                <Label>Circ Supply vs Max Supply:</Label>
                <Field>
                  {isNaN(marketCapvsTotalVolume) ? "∞" : marketCapvsTotalVolume}
                </Field>
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
              <Field>
                {setCurrency(currency)}
                {formatCurrency(roundToNumber(props.profile.total, 2))}
              </Field>
            </DataPoint>
            <DataPoint>
              <Label>Amount Price Change Since Purchase:</Label>
              <Field></Field>
            </DataPoint>
            <DataPoint>
              <Label>Purchase Date:</Label>
              <Field>{props.profile.purchase_date}</Field>
            </DataPoint>
          </SectionContent>
        </YourCoinHolder>
      </AssetDetailsHolder>
    </CryptoAssetHolder>
  );
}
