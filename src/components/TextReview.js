import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ProgressBar from '../shared/components/ProgressBar/Progress'
import Button from '../shared/components/Button/Button'
import './TextReview.css'


class TextReview extends Component {
    constructor() {
        super();

        this.state = {
            currentText: ""
        }
    }
    handleChange = (event) => {
        this.setState({ currentText: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <ProgressBar progress={3} />
                <div className="data-container">
                    <h1>Do you want to write a review?</h1>
                    <textarea
                        value={this.state.currentText}
                        className="review-input"
                        name="review"
                        placeholder="Write a review (optional)"
                        onChange={(event) => this.handleChange(event)}
                    />
                </div>
                <div className="button-container">
                    <Button
                        value="Next"
                        path="/submit"
                        onClick={this.props.addText(this.state.currentText)} />
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addText: text => {
            dispatch(actions.addText(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(TextReview);