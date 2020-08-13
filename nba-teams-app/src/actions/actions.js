import axios from 'axios'

export const FETCH_JOKE_START = 'FETCH_JOKE_START'
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS'

export const fetchJokes = () => dispatch => {
    dispatch({ type: FETCH_JOKE_START })

    axios
        .get('https://official-joke-api.appspot.com/random_ten')
        .then( res => {
            console.log(res)
            dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data})
        })
        .catch( err => console.log(err))
}