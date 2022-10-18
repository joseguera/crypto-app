import React from "react";
import { CryptoTitleIcon } from "components";
import {
  ModalContainer,
  ModalBody,
  TitleHolder,
  TitleItems,
  Title,
  Cross,
  CrossImg,
  ModalUtilities,
  UtilityHolder,
  Utilities
} from "./PortfolioModal.styles";
import cross from "../../images/metro-cross.svg";

export default function PortfolioModal(props) {
  return (
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
            <CryptoTitleIcon profile={ { name : "Nothing", symbol : "NOT", image: null }  } />
            <Utilities>
              <div>
                <input placeholder="Search..." />
              </div>
              <div>
                <input placeholder="Amount Purchased" />
              </div>
              <div>
                <input placeholder="Date" />
              </div>
            </Utilities>
          </UtilityHolder>
        </ModalUtilities>
        <div onClick={() => props.closeModal()}>Close</div>
        <div>Save and Continue</div>
      </ModalBody>
    </ModalContainer>
  );
}
