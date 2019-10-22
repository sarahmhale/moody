import React from 'react';



function Bullet(props) {
    return (
        <div className="circle-container">
            {props.progress === 0 ?
                <div className="circle-filled" /> : <div className="circle-grey" />}
            {props.progress === 1 ?
                <div className="circle-filled" /> : <div className="circle-grey" />}
            {props.progress === 2 ?
                <div className="circle-filled" /> : <div className="circle-grey" />}
            {props.progress === 3 ?
                <div className="circle-filled" /> : <div className="circle-grey" />}
            {props.progress === 4 ?
                <div className="circle-filled" /> : <div className="circle-grey" />}

        </div>
    );

}

export default Bullet;
