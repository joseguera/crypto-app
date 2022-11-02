import React, { useState } from "react";
import {
  SearchBarStyle,
  InputType,
} from "./CryptoAmountInput.styles";

export default function CryptoAmountInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [hasError] = useState(false);

  const handleChange = (e) => {
    const input = (typeof parseFloat(e.target.value) === "number") && e.target.value;
    setInputValue(input);
    props.setAmount(input)
  };

  return (
    <div className="container">
      <SearchBarStyle>
        <InputType
          placeholder="Amount Purchased"
          onChange={handleChange}
          value={inputValue}
          autoComplete="off"
        />
      </SearchBarStyle>
    </div>
  );
}
