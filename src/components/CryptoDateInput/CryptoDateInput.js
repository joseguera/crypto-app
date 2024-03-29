import React, { useState } from "react";
import { SearchBarStyle, InputType } from "./CryptoDateInput.styles";

export default function CryptoDateInput(props) {

  const [inputValue, setInputValue] = useState(props.todaysDate);

  const datePicker = (e) => {
    const date = e.target.value;
    const cryptoDate = date.split("-")
    const newDate = `${cryptoDate[2]}-${cryptoDate[1]}-${cryptoDate[0]}`;
    setInputValue(date);
    props.setDate(newDate)
  }

  return (
    <div className="container">
      <SearchBarStyle>
        <InputType
          onChange={(e) => datePicker(e)}
          placeholder="Date"
          type="date"
          name="purchase-date"
          value={inputValue}
        />
      </SearchBarStyle>
    </div>
  );
}
