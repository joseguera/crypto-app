import React from "react";
import { Categories } from "components";
import {
  TableFiltersHolder,
  TableFilterCategories,
  CategoryHolder,
} from "./TableFilters.styles";

export default function TableFilters(props) {
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
