import React from "react";
import {
    CryptoTitle,
    CryptoContent,
    CryptoIcon,
    CryptoImg,
    CryptoName,
    CryptoText,
    Symbol
} from "./CryptoTitleIcon.styles";

export default function CryptoTitleIcon(props) {
    return (
        <CryptoTitle>
            <CryptoContent>
          <CryptoIcon>
            <CryptoImg
              src={props.profile.image.small}
              alt={props.profile.name}
            />
          </CryptoIcon>
          <CryptoName>
            <CryptoText>
              {props.profile.name}
              {props.profile.name.length > 7 ? (
                <>
                  <br />
                  <br />
                </>
              ) : (
                " "
              )}
              <Symbol>({props.profile.symbol})</Symbol>
            </CryptoText>
          </CryptoName>
        </CryptoContent>
        </CryptoTitle>
    )
}