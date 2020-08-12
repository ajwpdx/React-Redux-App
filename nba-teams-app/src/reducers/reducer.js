import { FETCH_TEAM_START } from '../actions/teamActions'
import { FETCH_TEAM_SUCCESS } from '../actions/teamActions'

const initialState = {
    teams: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEAM_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_TEAM_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                teams: action.payload
            }    
        default:
            return state
    }
}