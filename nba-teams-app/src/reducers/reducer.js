import { FETCH_TEAM_START } from '../actions/teamActions'


const initialState = {
    teams: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEAM_START:
    }
}