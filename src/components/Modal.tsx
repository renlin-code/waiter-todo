import { ReactNode } from "react";

type ModalProps = {
    close: () => void;
    children: ReactNode;
}

function Modal({ close, children }: ModalProps) {
    return (
        <div>
            <button onClick={close}>Close</button>
            <div>{children}</div>
        </div>
    )
}

export default Modal