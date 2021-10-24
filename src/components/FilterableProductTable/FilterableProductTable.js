import React, {Component} from "react";
import './FilterableProductTable.css';
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            inStockOnly: false,
        }
    }

    onInputHandler(value) {
        this.setState({
            searchText: value,
        })
    }

    onCheckboxHandler(checked) {
        this.setState({
            inStockOnly: checked,
        })
    }

    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar
                    onInputHandler={(value) => this.onInputHandler(value)}
                    onCheckboxHandler={(checked) => this.onCheckboxHandler(checked)}
                    checked={this.state.inStockOnly}
                    value={this.state.searchText}
                />
                <ProductTable
                    products={this.props.products}
                    inStockOnly={this.state.inStockOnly}
                    searchText={this.state.searchText}
                />
            </div>
        )
    }
}