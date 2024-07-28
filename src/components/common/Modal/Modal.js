import { useRef } from "react";
import './Modal.css';

export function Modal({
    content,
    onModalCloseHandler,
    closeOnlyThroughCloseButton = true,
}) {
    const modalRef = useRef();

    const onModalClose = event => {
        if(!closeOnlyThroughCloseButton && modalRef.current === event.target) {
            onModalCloseHandler();
        }
    }

    return(
        <div className="modal-base" ref={ modalRef } onClick={ onModalClose }>
            <div className="modal-content">
                <span
                    className="modal-close-icon"
                    onClick={ onModalCloseHandler }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 352 512"
                    >
                        <path d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"/>
                    </svg>
                </span>
                { content }
            </div>
        </div>
    )
}