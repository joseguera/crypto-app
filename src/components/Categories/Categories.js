import React, { useState } from "react";
import {
  CategoryHolder,
  CategoryTitle,
  CategoryButton,
  StyledButton,
  ButtonText,
} from "./Categories.styles";

export default function Categories(props) {
  const [categories] = useState({
    Cryptocurrency: { name: "Cryptocurrency", category: "" },
    DeFi: { name: "DeFi", category: "decentralized-finance-defi" },
    NFTs: { name: "NFTs", category: "non-fungible-tokens-nft" },
    Metaverse: { name: "Metaverse", category: "metaverse" },
  });
  const [active, setActive] = useState("Cryptocurrency");

  const setActiveCategory = (category, name) => {
    const { Cryptocurrency, DeFi, NFTs, Metaverse } = categories;
    let styled;
    if (name === Cryptocurrency.name) {
      styled = Cryptocurrency.name;
    }
    if (name === DeFi.name) {
      styled = DeFi.name;
    }
    if (name === NFTs.name) {
      styled = NFTs.name;
    }
    if (name === Metaverse.name) {
      styled = Metaverse.name;
    }
    setActive(styled);
    props.setCategory(category);
  };

  return (
    <CategoryHolder>
      <CategoryTitle>
        <ButtonText>Filter By:</ButtonText>
      </CategoryTitle>
      {Object.values(categories).map((category) => {
        return active === category.name ? (
          <StyledButton
            key={category.category}
            onClick={() => setActiveCategory(category.category, category.name)}
          >
            <ButtonText>{category.name}</ButtonText>
          </StyledButton>
        ) : (
          <CategoryButton
            key={category.category}
            onClick={() => setActiveCategory(category.category, category.name)}
          >
            <ButtonText>{category.name}</ButtonText>
          </CategoryButton>
        );
      })}
    </CategoryHolder>
  );
}
