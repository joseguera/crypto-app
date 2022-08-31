import React from "react";
import { Categories } from 'components';
import { TableFiltersHolder, TableFilterCategories, CategoryHolder, ShowRowsHolder } from './TableFilters.styles';

export default class TableFilters extends React.Component {
    render() {
        return (
            <TableFiltersHolder>
                <TableFilterCategories>
                    <CategoryHolder>
                        <Categories setCategory={this.props.setCategory} />
                    </CategoryHolder>
                    <ShowRowsHolder>
                        Show Rows (Dropdown)
                    </ShowRowsHolder>
                </TableFilterCategories>
            </TableFiltersHolder>
        )
    }
}