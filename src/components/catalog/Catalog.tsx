import { useContext, useEffect, useState } from "react";
import tablesContext from "../../context/tablesContext";
import ModalSpecialRequest from "../modals/ModalSpecialRequest";
import "./Catalog.css"

function Catalog() {
    const { data, activeTable, tables, addProductToTable } = useContext(tablesContext);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setActiveCategoryIndex(0)
    }, [activeTable])

    const activeCategory = data[activeCategoryIndex];
    const activeTableId = tables[activeTable]?.id;

    return (
        <>
            {!!tables.length && <div className="catalog container">
                <div className="catalog__top">
                    <span>Add item</span>
                </div>
                <ul className="catalog__cat-list">
                    {data.map((item, index) => (
                        <li className="catalog__cat-list-item" key={index}>
                            <button className={`catalog__cat-list-button${activeCategoryIndex === index ? " catalog__cat-list-button--active" : ""}`} style={{background: item.color}} onClick={() => {
                                setActiveCategoryIndex(index)
                            }}>{item.name}</button>
                        </li>
                    ))}
                    <li className="catalog__cat-list-item">
                        <button className="catalog__cat-list-button" style={{background: "#C0C9CE"}} onClick={() => setShowModal(true)}>Special request</button>
                    </li>
                </ul>

                <ul className="catalog__prod-list">
                    {activeCategory?.products.map((product, index) =>
                        <li className="catalog__prod-list-item" key={index}>
                            <button className="catalog__prod-list-button" onClick={() => addProductToTable(activeTableId, activeCategory.name, product.name, 1)}>{product.name}</button>
                        </li>
                    )}
                </ul>
                {showModal && <ModalSpecialRequest close={() => setShowModal(false)} />
                }
            </div>}
        </>
    )
}

export default Catalog;