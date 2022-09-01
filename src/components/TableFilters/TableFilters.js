import React from "react";
import { Categories, RowsDropDown } from 'components';
import { TableFiltersHolder, TableFilterCategories, CategoryHolder } from './TableFilters.styles';

export default class TableFilters extends React.Component {
    render() {
        return (
            <TableFiltersHolder>
                <TableFilterCategories>
                    <CategoryHolder>
                        <Categories setCategory={this.props.setCategory} category={this.props.category} />
                    </CategoryHolder>
                    <CategoryHolder>
                        <RowsDropDown setRowQuantity={this.props.setRowQuantity} rowNumber={this.props.rowNumber} />
                    </CategoryHolder>
                </TableFilterCategories>
            </TableFiltersHolder>
        )
    }
}