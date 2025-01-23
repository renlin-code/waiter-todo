import { useContext, useState } from "react";
import ModalAddTable from "./ModalAddTable";
import tablesContext from "../context/tablesContext";

function Header() {
    const { tables, activeTable, setActiveTable, deleteTable } = useContext(tablesContext)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <header>
                <ul>{tables.map((table, index) =>
                    <li key={table.id}>
                        <button style={{ background: activeTable === index ? "red" : "gray" }} onClick={() => {
                            setActiveTable(index)
                        }}>
                            {table.number}
                        </button>
                        <button onClick={() => {
                            deleteTable(table.id)
                            setActiveTable(index === 0 ? index : index - 1)
                        }}>Delete</button>
                    </li>
                )}
                    <li>
                        <button onClick={() => setShowModal(true)}>Add Table</button>
                    </li>
                </ul>
            </header >
            {showModal && <ModalAddTable close={() => setShowModal(false)} />
            }
        </>
    )
}

export default Header