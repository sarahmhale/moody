import {
    ADD_STARRATING,
    ADD_MOODS,
    ADD_REVIEW,
    RESET_VERSION1,
    ADD_STARRATING_2,
    ADD_MOODS_2,
    ADD_REVIEW_2,
    RESET_VERSION2
} from '../actions/types';


const initialState = {

    review1: {
        starRating: "",
        moodWords: [],
        text: ""
    },
    review2: {
        starRating: "",
        moodWords: [],
        text: ""
    },
}
export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_STARRATING:
            return ({
                ...state,
                review1: {
                    ...state.review1,
                    starRating: action.starRating
                }
            })
        case ADD_MOODS:
            return ({
                ...state,
                review1: {
                    ...state.review1,
                    moodWords: action.moods
                }
            })
        case ADD_REVIEW:
            return ({
                ...state,
                review1: {
                    ...state.review1,
                    text: action.text
                }
            })

        case RESET_VERSION1:
            return ({
                ...state,
                review1: {
                    starRating: "",
                    moodWords: [],
                    text: "",
                    exit: true
                }
            })


        case ADD_STARRATING_2:
            return ({
                ...state,
                review2: {
                    ...state.review2,
                    starRating: action.starRating
                }
            })
        case ADD_MOODS_2:
            return ({
                ...state,
                review2: {
                    ...state.review2,
                    moodWords: action.moods
                }
            })
        case ADD_REVIEW_2:
            return ({
                ...state,
                review2: {
                    ...state.review2,
                    text: action.text
                }
            })


        case RESET_VERSION2:
            return ({
                ...state,
                review2: {
                    starRating: "",
                    moodWords: [],
                    text: "",
                    exit: true
                }
            })
        default:
            return state;
    }
};