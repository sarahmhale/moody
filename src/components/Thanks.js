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

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScmFKu91e5XOCDzbwe-7asN2bjkKhcTxlGm_QAkonJ9wI9UXg/viewform?embedded=true" width={window.innerWidth} height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

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


