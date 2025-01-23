import { useContext } from "react";
import tablesContext from "../context/tablesContext";

function TableList() {
    const { activeTable, tables, updateProductAmountProp, deleteProduct, updateProductActiveProp } = useContext(tablesContext);

    const table = tables[activeTable];
    return (
        <ul>{table.products.map((product) =>
            <li key={product.id}>
                <h6>{product.categoryName}</h6>
                <span style={{textDecoration: product.active ? "none" : "line-through"}}>{product.name}</span>
                <button onClick={() => updateProductAmountProp(product.id, product.amount - 1)}>-</button>
                {product.amount}
                <button onClick={() => updateProductAmountProp(product.id, product.amount + 1)}>+</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                <button onClick={() => updateProductActiveProp(product.id, !product.active)}>Sent</button>
            </li>
        )}</ul>
    )
}

export default TableList;