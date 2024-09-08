import "./Select.css";

export function Select({
    options = [{
        value: "default",
        displayText: ""
    }],
    name,
    className,
    defaultValue,
    disabled,
}) {
    return(
        <select
            name={ name }
            className={ `${className} default-select` }
            defaultValue={ defaultValue }
            disabled={ disabled }
        >
            {
                options.map(option => {
                    return(
                        <option value={ option.value } key={ option.value }>
                            { option.displayText }
                        </option>
                    )
                })
            }
        </select>
    )
}