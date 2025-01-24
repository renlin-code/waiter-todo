import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from "react";
import Modal from "./Modal"
import tablesContext from "../../context/tablesContext";
import "./ModalAddTable.css"

type ModalAddTableProps = {
    close: () => void;
}

function ModalAddTable({ close }: ModalAddTableProps) {
    const { addNewTable, setActiveTable, tables } = useContext(tablesContext);
    const [tableNumber, setTableNumber] = useState<number | string>("");
    const [valid, setValid] = useState(false);
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNewTable(parseInt(tableNumber.toString()));
        setTableNumber("");
        setActiveTable(tables.length);
        close();
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        const parsedValue = value ? parseInt(value) : ""
        setTableNumber(parsedValue)

        setValid(typeof parsedValue === "number")
    }

    return (
        <Modal close={close}>
            <form className="modal-add-table" onSubmit={onSubmitHandler}>
                <input ref={inputRef} className="input modal-add-table__input" placeholder="Table number" type="number" value={tableNumber} onChange={onChangeInputHandler} />
                <button className="modal-add-table__submit button button--primary button--bg" disabled={!valid} type="submit">Add</button>
            </form>
        </Modal>
    )
}

export default ModalAddTable