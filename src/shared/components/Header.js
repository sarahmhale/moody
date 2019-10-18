import React from 'react';
import { MdClear, MdEdit } from 'react-icons/md';

import {
    Link
} from "react-router-dom";

function Header(props) {

    return (
        <div className="progressbar-container">
            <Link to={props.path} onClick={props.onClick}>
                <MdClear size={26} style={{ paddingLeft: "16px" }} />
            </Link>
            <p>Review</p>

            {props.edit ?
                <Link to={props.editPath} >
                    <MdEdit size={26} style={{ paddingRight: "16px" }} />
                </Link>
                :
                <div style={{ paddingRight: "36px" }} />
            }
        </div>
    );

}

export default Header;
