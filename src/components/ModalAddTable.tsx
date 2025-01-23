import { FormEvent, useContext, useState } from "react";
import Modal from "./Modal"
import tablesContext from "../context/tablesContext";

type ModalAddTableProps = {
    close: () => void;
}

function ModalAddTable({ close }: ModalAddTableProps) {
    const { addNewTable, setActiveTable, tables } = useContext(tablesContext);
    const [tableNumber, setTableNumber] = useState<number | string>("");

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNewTable(parseInt(tableNumber.toString()));
        setTableNumber("");
        setActiveTable(tables.length);
        close();
    }

    return (
        <Modal close={close}>
            <form onSubmit={onSubmitHandler}>
                <input type="number" value={tableNumber} onChange={(e) => setTableNumber(parseInt(e.target.value))} />
                <button type="submit">Add</button>
            </form>
        </Modal>
    )
}

export default ModalAddTable