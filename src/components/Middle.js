import React from 'react';
import Button from '../shared/components/Button/Button'
import { VERSION2_STAR } from '../shared/routes'


const Middle = () => {
    return (
        <div className="test-info-container">
            <div />
            <div className="data-container">
                <h1 style={{ color: "#FFFFFF" }}> Version 2 </h1>
            </div>
            <div className="button-container">
                <Button
                    value="Start Test"
                    path={VERSION2_STAR}
                />
            </div>
        </div>
    );
}

export default Middle;
