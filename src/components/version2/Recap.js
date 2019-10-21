import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../../shared/components/Button/Button'
import StarRating from './StarRating'
import MoodBox from '../../shared/components/Moodboxes/MoodBox';
import moodData from '../../shared/moods.json'
import ResetHeader from './ResetHeader';


class Recap extends Component {
    renderMoods = () => {
        return this.props.review.moodWords.map((reviewMood) => {
            return moodData.OverMoods.map((mood, i) => {
                if (mood.word === reviewMood)
                    return (
                        <MoodBox
                            key={i}
                            value={mood.word}
                            color={mood.color}
                            edit={false}
                        />)
                return null;
            })

        })
    }
    render() {
        return (
            <div className="container">

                <div className="data-container" style={{ "marginTop": "30px" }}>
                    <div>
                        <h1>Recap</h1>
                        <ResetHeader />
                    </div>
                    <StarRating rating={this.props.review.starRating} style={{ "marginTop": "40px" }} />
                    <div className="mood-swipe" style={{ "marginTop": "30px" }} >
                        {this.renderMoods()}
                    </div>
                    <p style={{ "marginTop": "30px" }}>{this.props.review.text}</p>

                </div>
                <div className="button-container">
                    <Button
                        value="Submit"
                        onClick={this.props.submitReview(this.props.reviews)}
                        path="/thanks" />
                </div>
            </div >
        );
    }
}


const mapStateToProps = state => {
    const { data } = state
    return { reviews: data, review: data.review2 }
}
const mapDispatchToProps = dispatch => {
    return {
        submitReview: review => {
            dispatch(actions.submitReview(review))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recap)