import { reviewsRef } from '../config'
import {
    ADD_STARRATING,
    ADD_MOODS,
    ADD_REVIEW,
    ADD_STARRATING_2,
    ADD_MOODS_2,
    ADD_REVIEW_2,
    RESET_VERSION1,
    RESET_VERSION2
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

const resetVersion1 = () => {
    return { type: RESET_VERSION1 }
}

const resetVersion2 = () => {
    return { type: RESET_VERSION2 }
}


const addStartRating2 = (starRating) => {
    return { type: ADD_STARRATING_2, starRating }
}

const addMoods2 = (moods) => {
    return { type: ADD_MOODS_2, moods }
}

const addText2 = (text) => {
    return { type: ADD_REVIEW_2, text }
}



export {
    addStartRating,
    addMoods,
    addText,
    submitReview,
    addStartRating2,
    addMoods2,
    addText2,
    resetVersion1,
    resetVersion2
}