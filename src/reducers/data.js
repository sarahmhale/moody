import {
    ADD_STARRATING,
    ADD_MOODS,
    ADD_REVIEW,
} from '../actions/types';


const initialState = {
    starRating: "",
    moodWords: [],
    text: ""
}
export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_STARRATING:
            return Object.assign({}, state, {
                starRating: action.starRating
            })
        case ADD_MOODS:
            return Object.assign({}, state, {
                moodWords: action.moods

            })
        case ADD_REVIEW:
            return Object.assign({}, state, {
                text: action.text
            })
        default:
            return state;
    }
};