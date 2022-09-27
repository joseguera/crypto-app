import React, {useState } from "react";
import { CategoryHolder, CategoryTitle, CategoryButton, ButtonText } from "./Categories.styles";

export default function Categories(props) {
  const [categories, setCategories] = useState({ Cryptocurrency: { name: "Cryptocurrency", category: "cryptocurrency", active: false }, DeFi: { name: "DeFi", category: "decentralized-finance-defi", active: false }, NFTs: { name: "NFTs", category: "non-fungible-tokens-nft", active: false }, Metaverse: { name: "Metaverse", category: "metaverse", active: false } })

  const setActiveCategory = (category, name) => {
    const selected = Object.values(categories).map(select => {
      if (select.name === name) {
        return select.active = !select.active
      }
    })
    setCategories({ ...categories, selected });
    props.setCategory(category);
  }

    return (
      <CategoryHolder>
        <CategoryTitle><ButtonText>Filter By:</ButtonText></CategoryTitle>
        {Object.values(categories).map((category) => {
          return (
            <CategoryButton style={{ "backgroundColor" : (category.active) ? "#06d554" : "#2C2F36" }} key={category.category} onClick={() => setActiveCategory(category.category, category.name)}>
              <ButtonText>{category.name}</ButtonText>
            </CategoryButton>
          )
          })}
      </CategoryHolder>
    );

}
