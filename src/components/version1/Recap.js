import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../../shared/components/Button/Button'
import StarRating from './StarRating'
import MoodButton from '../../shared/components/Button/MoodButton';
import moodData from '../../shared/moods.json'



class Recap extends Component {
    renderMoods = () => {
        return this.props.review.moodWords.map((reviewMood) => {
            return moodData.moods.map((mood, i) => {
                if (mood.word === reviewMood)
                    return (
                        <MoodButton
                            key={i}
                            value={mood.word}
                            emoji={mood.emoji}
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
                    <h1>Recap</h1>
                    <StarRating rating={this.props.review.starRating} style={{ "marginTop": "40px" }} />
                    <div className="mood-swipe" style={{ "marginTop": "30px" }} >
                        {this.renderMoods()}
                    </div>
                    <p style={{ "marginTop": "30px" }}>{this.props.review.text}</p>

                </div>
                <div className="button-container">
                    <Button
                        value="Submit"
                        onClick={this.props.submitReview(this.props.review)}
                        path="/thanks" />
                </div>
            </div >
        );
    }
}


const mapStateToProps = state => {
    console.log(state.review1)
    const { data } = state
    return { review: data.review1 }
}
const mapDispatchToProps = dispatch => {
    return {
        submitReview: review => {
            dispatch(actions.submitReview(review))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recap)