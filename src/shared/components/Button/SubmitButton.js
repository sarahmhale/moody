import React from 'react';
import './Button.css';


function SubmitButton(props) {

    return (
        <button
            className="button"
            onClick={props.onClick}>
            {props.value}
        </button>
    );

}

export default SubmitButton;
