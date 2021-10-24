import './ProductRow.css';
import React from "react";

const ProductRow = ({product}) => (
    <div className="ProductRow">
        <div className={!product.stocked ? "out-of-stocked" : null}>{product.name}</div>
        <div>{product.price}</div>
    </div>
)

export default ProductRow;