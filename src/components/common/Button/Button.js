import "./Button.css";

export function Button({
    text,
    onClickHandler,
    className,
    name,
    type = "button",
    disabled = null
}) {
    return(
        <button
            onClick={ onClickHandler }
            className={ `${className} ${disabled && "btn-disabled"}` }
            name={ name }
            type={ type }
            disabled={ disabled ? "true" : "" }
        >
            { text && <p>{ text }</p> }
        </button>
    )
}