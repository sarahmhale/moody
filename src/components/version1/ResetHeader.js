import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { MIDDLE } from '../../shared/routes'
import Header from '../../shared/components/Header'

class ResetHeader extends Component {

    exit = () => {
        this.props.reset()
    }

    render() {

        if (this.props.edit)
            return (<Header onClick={() => this.exit()} path={MIDDLE} edit={this.props.edit} />);
        else
            return (<Header onClick={() => this.exit()} path={MIDDLE} />);
    }
}


const mapDispatchToProps = dispatch => {
    return {

        reset: () => dispatch(actions.resetVersion1())
    }
}

export default connect(null, mapDispatchToProps)(ResetHeader);