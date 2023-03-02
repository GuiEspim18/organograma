import "./DropDown.css";

export const DropDown = (props) => {

    const onChangeValue = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={onChangeValue}>
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}