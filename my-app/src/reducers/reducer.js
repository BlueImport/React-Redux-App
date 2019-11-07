import { FETCH_AOEII_START, FETCH_AOEII_SUCCESS, FETCH_AOEII_FAILURE } from "../actions/actions"

const initialState = {
    civ: [],
    error: (""),
    isFetching: false
}

const reducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {

        case FETCH_AOEII_START:
            return {
                ...state,
                error: (""),
                isFetching: true
            }

        case FETCH_AOEII_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                error: (""),
                isFetching: false
            }

        case FETCH_AOEII_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }

        default:
            return  state
    }
}

export default reducer 