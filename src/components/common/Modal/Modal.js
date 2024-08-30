import { useRef } from "react";
import './Modal.css';
import { ReactComponent as TimesIcon } from '../../../assets/images/times-solid.svg';

export function Modal({
    content,
    onModalCloseHandler,
    closeOnlyThroughCloseButton = true,
    className,
}) {
    const modalRef = useRef();

    const onModalClose = event => {
        if(!closeOnlyThroughCloseButton && modalRef.current === event.target) {
            onModalCloseHandler();
        }
    }

    return(
        <div className="modal-base" ref={ modalRef } onClick={ onModalClose }>
            <div className={ `${className} modal-content` }>
                <span
                    className="modal-close-icon"
                    onClick={ onModalCloseHandler }
                >
                    <TimesIcon />
                </span>
                { content }
            </div>
        </div>
    )
}