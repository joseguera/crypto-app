import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePortfolio } from "../../features/portfolio/portfolioSlice";

import {
  CryptoTitleIcon,
  PortfolioSearchBar,
  CryptoAmountInput,
  CryptoDateInput,
} from "components";
import {
  ModalBackground,
  ModalContainer,
  ModalBody,
  TitleHolder,
  TitleItems,
  Title,
  Cross,
  CrossImg,
  AssetPreview,
  ModalUtilities,
  UtilityHolder,
  Utilities,
  FormHolder,
  Buttons,
} from "./PortfolioAssetDeleteModal.styles";
import cross from "../../images/metro-cross.svg";
import blankDark from "../../images/blank_dark.png";
import blankLight from "../../images/blank_light.png";

export default function PortfolioAssetDeleteModal({
  openDeleteModal,
  profile,
  cryptoIndex
}) {
  // const today = new Date();
  // const day = String(today.getDate()).padStart(2, "0");
  // const month = String(today.getMonth() + 1).padStart(2, "0");
  // const year = String(today.getFullYear());
  // const date = `${day}-${month}-${year}`;
  // const todaysDate = `${year}-${month}-${day}`;
  // const dispatch = useDispatch();

  // const theme = useSelector((state) => state.theme.value);
  // const blank = theme ? blankLight : blankDark;

  // const [cryptoIcon, setCryptoIcon] = useState({
  //   id: "",
  //   name: "",
  //   symbol: "",
  //   thumbnail: blank,
  // });
  // const [portfolioTransaction, setPortfolioTransaction] = useState({
  //   id: "",
  //   date: date,
  //   amount: 0,
  // });

  // const setCryptocurrency = (id, name, symbol, thumbnail) => {
  //   setCryptoIcon({ id, name, symbol, thumbnail });
  //   setPortfolioTransaction({ ...portfolioTransaction, id });
  // };

  // const setAmount = (amount) => {
  //   setPortfolioTransaction({ ...portfolioTransaction, amount });
  // };

  // const setDate = (date) => {
  //   setPortfolioTransaction({ ...portfolioTransaction, date });
  // };


  return (
    <>
      <ModalBackground />
      <ModalContainer>
        <ModalBody>
          <TitleHolder>
            <TitleItems>
              <Title>Delete Asset</Title>
              <Cross onClick={() => openDeleteModal()}>
                <CrossImg src={cross} alt="close x" />
              </Cross>
            </TitleItems>
          </TitleHolder>

          {/* <ModalUtilities>
            <UtilityHolder>
              <CryptoTitleIcon
                profile={{ name: cryptoIcon.name, symbol: cryptoIcon.symbol }}
                image={cryptoIcon.thumbnail}
              />
              <Utilities>
                <FormHolder>
                  <PortfolioSearchBar setCryptocurrency={setCryptocurrency} />
                </FormHolder>
                <FormHolder>
                  <CryptoAmountInput setAmount={setAmount} />
                </FormHolder>
                <FormHolder>
                  <CryptoDateInput setDate={setDate} todaysDate={todaysDate} />
                </FormHolder>
              </Utilities>
            </UtilityHolder>
          </ModalUtilities> */}

          {/* <div>
            <img src={cryptoIcon.thumbnail} alt="crypto icon" />
            <div>{cryptoIcon.name}</div>
            <div>{cryptoIcon.symbol}</div>
          </div> */}
          <p>
            Are you sure you want to permanently remove this portfolio asset?
          </p>
          <AssetPreview>
            <img src={profile[0].image} alt={profile[0].id} />
            <div>{profile[0].name}</div>
            <div>{profile[0].symbol.toUpperCase()}</div>
          </AssetPreview>
          <Buttons>
            <div
              className="button close-button"
              onClick={() => openDeleteModal()}
            >
              Cancel
            </div>
            <div
              className="button delete-button"
              onClick={() => {
                // dispatch(updatePortfolio(portfolioTransaction));
                openDeleteModal();
              }}
            >
              Yes, delete asset
            </div>
          </Buttons>
        </ModalBody>
      </ModalContainer>
    </>
  );
}
