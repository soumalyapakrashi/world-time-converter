import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../common/Modal";
import { Button } from "../../common/Button";
import { Select } from "../../common/Select";
import { ClockTypes } from "../../../store/Configurations";
import "../../../assets/fonts/font-poppins.css";
import "./ConfigureModal.css";

export function ConfigureModal({
    closeModal,
}) {
    const dispatch = useDispatch();
    const clockPrecision = useSelector(state => state.clockPrecision);
    const clockType = useSelector(state => state.clockType);

    const modalSubmitHandler = event => {
        event.preventDefault();
        dispatch({
            type: "clockPrecision",
            value: event?.target?.clockprecision?.value
        });
        closeModal();
    }

    return(
        <Modal
            onModalCloseHandler={ closeModal }
            content={
                <div className="padding-20">
                    <form className="configure-form" onSubmit={ modalSubmitHandler }>
                        <h3 className="poppins-regular font-color-light">Digital Clock Precision</h3>
                        <Select
                            options={ ClockTypes }
                            name="clockprecision"
                            className="configuration-select"
                            defaultValue={ clockPrecision === "hours:minutes" ? "hours:minutes" : "hours:minutes:seconds" }
                            disabled={ clockType === "analog" ? "true" : "" }
                        />

                        <div className="modal-controls">
                            <Button
                                text="Cancel"
                                onClickHandler={ closeModal }
                                className="btn-bg-dark-primary btn-font-light-primary poppins-regular"
                            />
                            <Button
                                text="Submit"
                                className="btn-bg-light-primary btn-font-dark-primary poppins-regular"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            }
        />
    )
}