import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Emoji from '../shared/components/Emoji'

class Thanks extends Component {
    componentDidMount() {
        this.props.submit(this.props.reviews)
    }
    render() {
        return (
            <div className="test-info-container">
                <div />
                <div className="data-container">
                    <h1 style={{ color: "#FFFFFF" }}> Thank you for helping with my masterthesis! <Emoji symbol="😍" label="" /></h1>
                </div>
                <div />
            </div>)
    }

}



const mapStateToProps = state => {
    const { data } = state
    return { reviews: data }
}
const mapDispatchToProps = dispatch => {
    return {


        submit: reviews => dispatch(actions.submitReview(reviews))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);


