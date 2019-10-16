import React from 'react';
import './Button.css';

import {
    Link
} from "react-router-dom";

function Button(props) {
    return (
        <Link to={props.path}>
            <button
                className="button"
                onClick={props.onClick}>
                {props.value}
            </button>
        </Link>
    );

}

export default Button;
