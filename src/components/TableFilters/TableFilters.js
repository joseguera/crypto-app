import React, { useState } from "react";
import { Categories } from "components";
import {
  TableFiltersHolder,
  TableFilterCategories,
  CategoryHolder,
} from "./TableFilters.styles";

export default function TableFilters(props) {
  const [open, setOpen] = useState(false);

  const setCoinsPerPage = () => {
    setOpen(!open);
    // props.setCoinsPerPage()
  };

  const handleSelection = (e) => {
    console.log(e);
    setOpen(!open);
    // props.setCoinsPerPage()
  };

  return (
    <TableFiltersHolder>
      <TableFilterCategories>
        <CategoryHolder>
          <Categories
            setCategory={props.setCategory}
            category={props.category}
          />
        </CategoryHolder>
      </TableFilterCategories>
    </TableFiltersHolder>
  );
}
