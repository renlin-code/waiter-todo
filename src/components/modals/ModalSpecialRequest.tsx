import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from "react";
import Modal from "./Modal"
import tablesContext from "../../context/tablesContext";
import "./ModalSpecialRequest.css"

type ModalSpecialRequestProps = {
    close: () => void;
}

function ModalSpecialRequest({ close }: ModalSpecialRequestProps) {
    const { addProductToTable, tables, activeTable } = useContext(tablesContext);
    const [text, setText] = useState<string>("");
    const [valid, setValid] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null)
    const tableId = tables[activeTable].id

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProductToTable(tableId, "Special Request", text, 1)
        setText("");
        close();
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setText(value)

        setValid(value.trim().length > 0)
    }

    return (
        <Modal close={close}>
            <form className="modal-special-request" onSubmit={onSubmitHandler}>
                <input ref={inputRef} className="input modal-special-request__input" placeholder="Enter your request" type="text" value={text} onChange={onChangeInputHandler} />
                <button className="modal-special-request__submit button button--primary button--bg" type="submit" disabled={!valid}>Add</button>
            </form>
        </Modal>
    )
}

export default ModalSpecialRequest