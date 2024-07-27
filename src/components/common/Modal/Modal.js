import { useRef } from "react";
import './Modal.css';

export function Modal({
    content,
    onModalCloseHandler,
}) {
    const modalRef = useRef();

    const onModalClose = event => {
        if(modalRef.current === event.target) {
            onModalCloseHandler();
        }
    }

    return(
        <div className="modal-base" ref={ modalRef } onClick={ onModalClose }>
            <div className="modal-content">
                { content }
            </div>
        </div>
    )
}