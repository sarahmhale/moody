import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { THANKS } from '../../shared/routes'
import Header from '../../shared/components/Header'

class ResetHeader extends Component {
    exit = () => {
        this.props.reset()
    }

    render() {

        if (this.props.edit)
            return (<Header onClick={() => this.exit()} path={THANKS} edit={this.props.edit} />);
        else
            return (<Header onClick={() => this.exit()} path={THANKS} />);
    }
}

const mapStateToProps = state => {
    const { data } = state

    return { reviews: data }
}
const mapDispatchToProps = dispatch => {
    return {

        reset: () => dispatch(actions.resetVersion2()),
        submit: reviews => dispatch(actions.submitReview(reviews))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetHeader);

