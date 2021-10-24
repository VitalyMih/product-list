import './ProductTable.css';
import React from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

const ProductTable = ({products, inStockOnly, searchText}) => {

    function renderProductRows(products) {
        let lastCategory = null;
        let rows = [];

        products.forEach((product) => {

            if (product.name.indexOf(searchText) === -1) {
                return;
            }

            if (inStockOnly && !product.stocked) {
                return;
            }

            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />)
            }

            rows.push(<ProductRow
                product={product}
                key={product.name}
                />)
            lastCategory = product.category;
        })

        return rows;
    }

    return (
        <div className="ProductTable">
            <div className="ProductTable_header">
                <div>Name</div>
                <div>Price</div>
            </div>
            <div className="ProductTable_body">
                {renderProductRows(products)}
            </div>
        </div>
    )
}

export default ProductTable;