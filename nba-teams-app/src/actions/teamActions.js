import axios from 'axios'

export const FETCH_TEAM_START = 'FETCH_TEAM_START'
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS'

export const fetchTeams = () => dispatch => {
    dispatch({ type: FETCH_TEAM_START })

    axios
        .get('https://balldontlie.io/api/v1/teams')
        .then( res => {
            console.log(res)
            dispatch({ type: FETCH_TEAM_SUCCESS, payload: res.data})
        })
        .catch( err => console.log(err))
}