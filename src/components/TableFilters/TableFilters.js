import React from "react";
import { Categories } from 'components';
import { TableFiltersHolder, TableFilterCategories, CategoryHolder } from './TableFilters.styles';

export default class TableFilters extends React.Component {
    render() {
        return (
            <TableFiltersHolder>
                <TableFilterCategories>
                    <CategoryHolder>
                        <Categories setCategory={this.props.setCategory} category={this.props.category} />
                    </CategoryHolder>
                </TableFilterCategories>
            </TableFiltersHolder>
        )
    }
}