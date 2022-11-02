import React, { useState } from "react";
import { CryptoTitleIcon, PortfolioSearchBar, CryptoAmountInput, CryptoDateInput } from "components";
import {
  ModalBackground,
  ModalContainer,
  ModalBody,
  TitleHolder,
  TitleItems,
  Title,
  Cross,
  CrossImg,
  ModalUtilities,
  UtilityHolder,
  Utilities,
  FormHolder,
  Buttons
} from "./PortfolioModal.styles";
import cross from "../../images/metro-cross.svg";
import blank from "../../images/blank.png";

export default function PortfolioModal(props) {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = String(today.getFullYear());
  const date = `${day}-${month}-${year}`;
  const todaysDate = `${year}-${month}-${day}`;

  const [cryptoIcon, setCryptoIcon] = useState({ id: "", name: "", symbol: "", thumbnail: blank });
  const [portfolioTransaction, setPortfolioTransaction] = useState({ id: "", date: date, amount: 0 });

  const handleSelection = (id, name, symbol, thumbnail) => {
    setCryptoIcon({ id, name, symbol, thumbnail })
    setPortfolioTransaction({...portfolioTransaction, id });
  }

  const setAmount = (amount) => {
    setPortfolioTransaction({...portfolioTransaction, amount })
  }

  const setDate = (date) => {
    setPortfolioTransaction({...portfolioTransaction, date });
  }

  const handleSubmit = () => {
    const { id, date, amount } = portfolioTransaction;
    props.handleSubmit(id, date, amount)
  }

  return (
    <>
      <ModalBackground />
      <ModalContainer>
        <ModalBody>
          <TitleHolder>
            <TitleItems>
              <Title>Select Coins</Title>
              <Cross onClick={() => props.closeModal()}>
                <CrossImg src={cross} alt="close x" />
              </Cross>
            </TitleItems>
          </TitleHolder>
          <ModalUtilities>
            <UtilityHolder>
              <CryptoTitleIcon
                profile={{ name: cryptoIcon.name, symbol: cryptoIcon.symbol }}
                image={cryptoIcon.thumbnail}
              />
              <Utilities>
                <FormHolder>
                  <PortfolioSearchBar handleSelection={handleSelection} />
                </FormHolder>
                <FormHolder>
                  <CryptoAmountInput setAmount={setAmount} />
                </FormHolder>
                <FormHolder>
                  <CryptoDateInput setDate={setDate} todaysDate={todaysDate} />
                </FormHolder>
              </Utilities>
            </UtilityHolder>
          </ModalUtilities>
          <Buttons>
            <div className="button close-button" onClick={() => props.closeModal()}>Close</div>
            <div className="button save-button" onClick={handleSubmit}>Save and Continue</div>
          </Buttons>
        </ModalBody>
      </ModalContainer>
    </>
  );
}
