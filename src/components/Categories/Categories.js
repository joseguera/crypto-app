import React from "react";
import { CategoryHolder, CategoryButton, StyledButton, ButtonText } from "./Categories.styles";

export default class Categories extends React.Component {
  state = {
    categories: {
      cryptocurrency: { name: "Cryptocurrency", category: "cryptocurrency"},
      DeFi: { name: "DeFi", category: "decentralized-finance-defi" },
      NFTs: { name: "NFTs", category: "non-fungible-tokens-nft" },
      Metaverse: { name: "Metaverse", category: "metaverse" }
    },
    active: this.props.category,
  };

  setActive = (category) => {
    const { cryptocurrency, DeFi, NFTs, Metaverse } = this.state.categories;
    let styled;
    if (category === cryptocurrency.category) {
      styled = cryptocurrency.category;
    }
    if (category === DeFi.category) {
      styled = DeFi.category;
    }
    if (category === NFTs.category) {
      styled = NFTs.category;
    }
    if (category === Metaverse.category) {
      styled = Metaverse.category;
    }
    this.setState({
      active: styled,
    });
    this.props.setCategory(styled);
  };

  render() {
    const { categories, active } = this.state;

    return (
      <CategoryHolder>
        {Object.values(categories).map((category) => {
          return active === category.category ? (
            <StyledButton
              key={category.category}
              onClick={() => this.setActive(category.category)}
            >
              <ButtonText>{category.name}</ButtonText>
            </StyledButton>
          ) : (
            <CategoryButton key={category.category} onClick={() => this.setActive(category.category)}>
              <ButtonText>{category.name}</ButtonText>
            </CategoryButton>
          );
        })}
      </CategoryHolder>
    );
  }
}
