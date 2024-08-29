import "./Button.css";

export function Button({
    text,
    onClickHandler,
    className,
    name,
    type = "button",
}) {
    return(
        <button onClick={ onClickHandler } className={ `${className}` } name={ name } type={ type }>
            { text && <p>{ text }</p> }
        </button>
    )
}