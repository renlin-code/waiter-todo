import { ReactNode, useEffect } from "react";
import "./Modal.css"
import closeIcon from "../../assets/svg/icon-close.svg"

type ModalProps = {
    close: () => void;
    children: ReactNode;
}

function Modal({ close, children }: ModalProps) {
    useEffect(() =>{
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "visible";
        }
    }, [])

    return (
        <div className="modal container">
            <div className="modal__box">
                <button className="modal__close" onClick={close}>
                    <img src={closeIcon} alt="" />
                </button>
                <div className="modal__body">{children}</div>
            </div>
        </div>
    )
}

export default Modal