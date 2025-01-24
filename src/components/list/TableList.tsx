import { useContext } from "react";
import tablesContext from "../../context/tablesContext";
import "./TableList.css"
import { Product } from "../../types";
import minusIcon from "../../assets/svg/icon-minus.svg"
import plusIcon from "../../assets/svg/icon-plus.svg"

function TableList() {
    const { activeTable, setActiveTable, tables, updateProductAmountProp, deleteProduct, updateProductActiveProp, deleteTable } = useContext(tablesContext);

    const countMinusHandler = (product: Product) => {
        if (product.amount === 1) {
            return
        }
        updateProductAmountProp(product.id, product.amount - 1)
    }

    const countPlusHandler = (product: Product) => {
        updateProductAmountProp(product.id, product.amount + 1)
    }

    const deleteTableHandler = () => {
        if (tables.length === 0) return
        const nextActiveTable = tables.length > 2 ? tables.length - 2 : 0
        deleteTable(tables[activeTable]?.id)
        setActiveTable(nextActiveTable)
    }
    const table = tables[activeTable];
    return (
        <section className="table-list container">
            <div className="table-list__top">
                <button className="button button--sm button--secondary" disabled={!tables.length} onClick={deleteTableHandler}>Delete Table</button>
            </div>
            {!!table?.products.length &&
                <ul className="table-list__list">{table?.products.map((product) =>
                    <li className="table-list__item" key={product.id}>
                        <p className="table-list__item-subtitle">{product.categoryName}</p>
                        <div className="table-list__item-card">
                            <p className={`table-list__item-name${!product.active ? " table-list__item-name--unactive" : ""}`}>{product.name}</p>
                            <div className="table-list__item-right">
                                <div className="table-list__item-counter">
                                    <button className="button button--tertiary button--sm" disabled={product.amount === 1} onClick={() => countMinusHandler(product)}>
                                        <img src={minusIcon} alt="" />
                                    </button>
                                    <span>{product.amount}</span>
                                    <button className="button button--tertiary button--sm" onClick={() => countPlusHandler(product)}>
                                        <img src={plusIcon} alt="" />
                                    </button>

                                </div>
                                <button className="button button--secondary button--sm" onClick={() => deleteProduct(product.id)}>Delete</button>
                                <button className="button button--primary button--sm" onClick={() => updateProductActiveProp(product.id, !product.active)}>Done</button>

                            </div>
                        </div>
                    </li>
                )}</ul>}
        </section>
    )
}

export default TableList;