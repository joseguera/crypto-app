import React from "react";
import { CryptoTitleIcon } from "components";
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
  Form,
  Input,
  Buttons
} from "./PortfolioModal.styles";
import cross from "../../images/metro-cross.svg";
import blank from "../../images/blank.png";

export default function PortfolioModal(props) {
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
                profile={{ name: "Nothing", symbol: "NOT" }}
                image={blank}
                style={{ color: "blue", height: "186px", width: "163px" }}
              />
              <Utilities>
                <FormHolder>
                  <Form>
                    <Input placeholder="Search..." />
                  </Form>
                </FormHolder>
                <FormHolder>
                  <Form>
                    <Input placeholder="Amount Purchased" />
                  </Form>
                </FormHolder>
                <FormHolder>
                  <Form>
                    <Input placeholder="Date" />
                  </Form>
                </FormHolder>
              </Utilities>
            </UtilityHolder>
          </ModalUtilities>
          <Buttons>
            <div onClick={() => props.closeModal()}>Close</div>
            <div>Save and Continue</div>
          </Buttons>
        </ModalBody>
      </ModalContainer>
    </>
  );
}
