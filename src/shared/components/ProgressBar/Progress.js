import React from 'react';
import './Progress.css';

function ProgressBar(props) {
    return (
        <div className="progressbar-container">
            {props.progress === 1 || props.progress === 2 || props.progress === 3 ?
                <div className="filled" /> : <div className="grey" />}
            {props.progress === 2 || props.progress === 3 ?
                <div className="filled" /> : <div className="grey" />}
            {props.progress === 3 ?
                <div className="filled" /> : <div className="grey" />}
        </div>
    );

}

export default ProgressBar;
