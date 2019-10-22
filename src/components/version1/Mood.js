import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ProgressBar from '../../shared/components/ProgressBar/Progress'
import Button from '../../shared/components/Button/Button'
import MoodButton from '../../shared/components/Button/MoodButton';
import ReactSwipe from 'react-swipe';
import './Mood.css'
import moodData from '../../shared/moods.json'
import Bullet from '../../shared/components/ProgressBar/Bullets';

import { VERSION1_REVIEW } from '../../shared/routes'
import ResetHeader from './ResetHeader';
import {
    BrowserView,
    MobileView,
} from "react-device-detect";

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

    moodButtons = (array) => {
        return array.map((mood, i) => {

            return (
                <MoodButton
                    key={i}
                    value={mood.word}
                    emoji={mood.emoji}
                    onClick={this.onClick}
                    edit={true}
                />)

        })
    }
    swipe = (reactSwipeEl) => {
        this.setState({
            page: reactSwipeEl.swipe.getPos()
        })
    }
    MoodSwipe = () => {
        let reactSwipeEl;

        return (
            <div style={{ "marginTop": "30px" }}>
                <ReactSwipe
                    className="carousel"
                    ref={el => (reactSwipeEl = el)}

                    swipeOptions={{ callback: () => this.swipe(reactSwipeEl), startSlide: this.state.page }}
                >
                    <div>
                        <p>Positive</p>
                        <div className="mood-swipe">
                            {this.moodButtons(moodData.moods["Positive"])}
                        </div>
                    </div>
                    <div>
                        <p>Negative</p>
                        <div className="mood-swipe">
                            {this.moodButtons(moodData.moods["Negative"])}
                        </div></div>

                    <div>
                        <p>On-edge</p>
                        <div className="mood-swipe">
                            {this.moodButtons(moodData.moods["On-edge"])}
                        </div></div>
                    <div >
                        <p>Puzzling</p>
                        <div className="mood-swipe">
                            {this.moodButtons(moodData.moods["Puzzling"])}
                        </div></div>
                    <div >
                        <p>Uplifiting</p>
                        <div className="mood-swipe">
                            {this.moodButtons(moodData.moods["Uplifiting"])}
                        </div></div>

                </ReactSwipe>
                <BrowserView >
                    <button onClick={() => reactSwipeEl.next()}>Next</button>
                    <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                </BrowserView>
                <MobileView>
                    <Bullet progress={this.state.page} />
                </MobileView>


            </div >
        );
    };

    render() {
        return (
            <div className="container">
                <div>
                    <ProgressBar progress={2} />
                    <ResetHeader />
                </div>
                <div className="data-container">
                    <h1>Which moods describes the book best?</h1>
                    {this.MoodSwipe()}
                </div>

                <div className="button-container">
                    <Button value="Next"
                        path={VERSION1_REVIEW}
                        onClick={() => this.props.addMoods(this.state.moods)} />
                </div>
            </div >
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addMoods: moods => {
            dispatch(actions.addMoods(moods))
        }
    }
}

export default connect(null, mapDispatchToProps)(Mood);