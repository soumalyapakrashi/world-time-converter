import "./Button.css";

export function Button({
    text,
    onClickHandler,
    className,
    name,
}) {
    return(
        <button onClick={ onClickHandler } className={ `${className}` } name={ name }>
            { text && <p>{ text }</p> }
        </button>
    )
}