import { reviewsRef } from '../config'
import {
    ADD_STARRATING,
    ADD_MOODS,
    ADD_REVIEW,
} from './types'

const submitReview = newReview => async dispatch => {
    reviewsRef.push().set(newReview);
};

const addStartRating = (starRating) => {
    return { type: ADD_STARRATING, starRating }
}

const addMoods = (moods) => {
    return { type: ADD_MOODS, moods }
}

const addText = (text) => {
    return { type: ADD_REVIEW, text }
}


export {
    addStartRating,
    addMoods,
    addText,
    submitReview
}