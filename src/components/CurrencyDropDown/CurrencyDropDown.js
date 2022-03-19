const CurrencyDropDown = (props) => {
  return (
    <>
      <select name="currency" id="currency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
      </select>
    </>
  );
};

export default CurrencyDropDown;
