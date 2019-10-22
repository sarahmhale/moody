import React from 'react';
import Button from '../shared/components/Button/Button'
import { VERSION1_STAR } from '../shared/routes'


const Start = () => {
    return (
        <div className="test-info-container">
            <div />
            <div className="data-container">
                <h1 style={{ color: "#FFFFFF" }}>Thanks for helping with my thesis! The following test will consist of: <br /><br />

                    1. Test prototype 1! <br /><br />
                    2. Test prototype 2! <br /><br />
                    3. Answer a few questions! </h1>
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
