import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import StarRating from './StarRating'

import { VERSION2_MOOD } from '../../shared/routes'
import Button from '../../shared/components/Button/Button'
import ProgressBar from '../../shared/components/ProgressBar/Progress'

class Enjoy extends Component {
    state = {
        showForm: false,
        rating: 0,
    };

    changeRating = (newRating) => {
        this.setState({
            rating: newRating
        });
    }

    render() {

        return (
            <div className="container">
                <ProgressBar progress={1} />
                <div className="data-container">
                    <h1>Did you enjoy the book?</h1>
                    <StarRating changeRating={this.changeRating} rating={this.state.rating} />
                    <p style={{ color: "#868686" }}>TAP TO RATE</p>
                </div>
                <div className="button-container">
                    <Button
                        value="Next"
                        path={VERSION2_MOOD}
                        onClick={() => this.props.addStarRating(this.state.rating)} />
                </div>
            </div >
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addStarRating: stars => {
            dispatch(actions.addStartRating2(stars))
        }
    }
}

export default connect(null, mapDispatchToProps)(Enjoy);

