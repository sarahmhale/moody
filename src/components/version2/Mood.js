import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ProgressBar from '../../shared/components/ProgressBar/Progress'
import Button from '../../shared/components/Button/Button'
import MoodBox from '../../shared/components/Moodboxes/MoodBox'
import './Mood.css'
import moodData from '../../shared/moods.json'

import { VERSION2_REVIEW } from '../../shared/routes'


class Mood extends Component {

    constructor() {
        super();

        this.state = {
            moods: [],
            page: 0,

        }
    }

    removeMood = (value) => {
        var array = [...this.state.moods];
        var index = array.indexOf(value)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ moods: array });
        }
    }


    onClick = (value) => {
        if (this.state.moods.includes(value)) {
            this.removeMood(value)
        } else {
            this.setState({ moods: [...this.state.moods, value] })
        }
    }

    moodButtons = () => {
        return (
            <div className="mood-container" style={{ marginTop: "30px" }}>
                <div className="row"><span>{this.moodButton(0)}</span></div>
                <div className="row" ><span>{this.moodButton(2)}</span></div>
                <div className="row" ><span>{this.moodButton(4)}</span></div>
                <div className="row" ><span>{this.moodButton(6)}</span></div>
            </div>)
    }

    moodButton = (startIndex) => {
        return moodData.OverMoods.map((mood, i) => {
            if (i >= startIndex && i < startIndex + 2)
                return (

                    <MoodBox
                        key={i}
                        value={mood.word}
                        color={mood.color}
                        onClick={this.onClick}
                        edit={true}
                    />)
            return null;
        })
    }
    swipe = (reactSwipeEl) => {
        this.setState({
            page: reactSwipeEl.swipe.getPos()
        })
    }


    render() {
        return (
            <div className="container">
                <ProgressBar progress={2} />
                <div className="data-container" style={{ height: "80%" }}>
                    <div>
                        <h1>Which moods describes the book best?</h1>
                        <p style={{ margin: 0 }}>you can choose more then one!</p>
                    </div>
                    {this.moodButtons()}
                </div>

                <div className="button-container">
                    <Button value="Next"
                        path={VERSION2_REVIEW}
                        onClick={() => this.props.addMoods(this.state.moods)} />
                </div>
            </div >
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addMoods: moods => {
            dispatch(actions.addMoods2(moods))
        }
    }
}

export default connect(null, mapDispatchToProps)(Mood);