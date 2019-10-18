import React from 'react';
import { MdClear, MdEdit } from 'react-icons/md';
function Header(props) {

    return (
        <div className="progressbar-container">

            <MdClear size={26} style={{ paddingLeft: "16px" }} />
            <p>Review</p>

            {props.edit ?
                <MdEdit size={26} style={{ paddingRight: "16px" }} />
                :
                <div style={{ paddingRight: "36px" }} />
            }
        </div>
    );

}

export default Header;
