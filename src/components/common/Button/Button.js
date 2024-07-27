import "./Button.css";

export function Button({
    text,
    onClickHandler,
}) {
    return(
        <button onClick={ onClickHandler }>
            { text }
        </button>
    )
}