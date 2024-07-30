import "./Button.css";

export function Button({
    text,
    onClickHandler,
    className,
}) {
    return(
        <button onClick={ onClickHandler } className={ `${className}` }>
            { text && <p>{ text }</p> }
        </button>
    )
}