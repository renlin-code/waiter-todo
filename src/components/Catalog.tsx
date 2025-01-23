import { useContext, useEffect, useState } from "react";
import tablesContext from "../context/tablesContext";
import ModalSpecialRequest from "./ModalSpecialRequest";

function Catalog() {
    const { data, activeTable, tables, addProductToTable } = useContext(tablesContext);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setActiveCategoryIndex(0)
    }, [activeTable])

    const activeCategory = data[activeCategoryIndex];
    const activeTableId = tables[activeTable].id;

    return (
        <>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <button style={{ background: activeCategoryIndex === index ? "green" : "pink" }} onClick={() => {
                            setActiveCategoryIndex(index)
                        }}>{item.name}</button>
                    </li>
                ))}
                <li>
                    <button onClick={() => setShowModal(true)}>Special request</button>
                </li>
            </ul>

            <ul>
                {activeCategory?.products.map((product, index) =>
                    <li key={index}>
                        <button onClick={() => addProductToTable(activeTableId, activeCategory.name, product.name, 1)}>{product.name}</button>
                    </li>
                )}
            </ul>
            {showModal && <ModalSpecialRequest close={() => setShowModal(false)} />
            }
        </>
    )
}

export default Catalog;