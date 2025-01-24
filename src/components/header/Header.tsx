import { useContext, useState } from "react";
import ModalAddTable from "../modals/ModalAddTable";
import tablesContext from "../../context/tablesContext";
import "./Header.css"
import plusIcon from "../../assets/svg/icon-plus-big.svg"

function Header() {
    const { tables, activeTable, setActiveTable } = useContext(tablesContext)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <header className="header container">
                <ul className="header__list">{tables.map((table, index) =>
                    <li className="header__list-item" key={table.id}>
                        <button className={`header__list-button${activeTable === index ? " header__list-button--active" : ""}`} onClick={() => {
                            setActiveTable(index)
                        }}>
                            {table.number}
                        </button>
                    </li>
                )}
                    <li className="header__list-item">
                        <button className="header__list-button" onClick={() => setShowModal(true)}>
                            <img src={plusIcon} alt="" />
                        </button>
                    </li>
                </ul>
            </header >
            {showModal && <ModalAddTable close={() => setShowModal(false)} />
            }
        </>
    )
}

export default Header