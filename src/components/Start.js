import React from 'react';
import Button from '../shared/components/Button/Button'
import { VERSION1_STAR } from '../shared/routes'


const Start = () => {
    return (
        <div className="test-info-container">
            <div />
            <div className="data-container">
                <h1 style={{ color: "#FFFFFF" }}> Version 1 </h1>
            </div>
            <div className="button-container">
                <Button
                    value="Start Test"
                    path={VERSION1_STAR}
                />
            </div>
        </div>
    );
}

export default Start;