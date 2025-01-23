import { FormEvent, useContext, useState } from "react";
import Modal from "./Modal"
import tablesContext from "../context/tablesContext";

type ModalSpecialRequestProps = {
    close: () => void;
}

function ModalSpecialRequest({ close }: ModalSpecialRequestProps) {
    const { addProductToTable, tables, activeTable } = useContext(tablesContext);
    const [text, setText] = useState<string>("");

    const tableId = tables[activeTable].id

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProductToTable(tableId, "Special Request", text, 1)
        setText("");
        close();
    }

    return (
        <Modal close={close}>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </Modal>
    )
}

export default ModalSpecialRequest