import React from "react";
import "./TextField.css";

export const TextField = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`

    const onKeyPress = (event) => {
        props.onChange(event.target.value)
        
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onKeyPress} required={props.required} type="text" placeholder={modifiedPlaceholder} />
        </div>
    );
}