import React, { useState } from "react";
import { SearchBarStyle, InputType } from "./CryptoDateInput.styles";

export default function CryptoDateInput(props) {
//   const today = new Date();
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = String(today.getFullYear());
  const todaysDate = `${year}-${month}-${day}`;

  const [inputValue, setInputValue] = useState(todaysDate);
  const [hasError] = useState(false);

  return (
    <div className="container">
      <SearchBarStyle>
        <InputType
          placeholder="Date"
          type="date"
          name="purchase-date"
          value={inputValue}
        />
      </SearchBarStyle>
    </div>
  );
}
