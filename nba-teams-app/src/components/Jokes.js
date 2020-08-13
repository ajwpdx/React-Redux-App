import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchJokes } from '../actions/actions'

const Jokes = (props) => {
    useEffect(() => {
        props.fetchJokes()
    }, [])

    return (
        <section>
            {props.isLoading ? <h4>Just a minute...</h4> : null}
            {props.error ? (
                <p style={{ color: "red" }}>
                    Uh oh... something happened 😟 {props.error}
                </p>
            ) : null}
            {props.jokes.map(joke => (
                <div className='joke' key={joke.id}>
                    <p className='setup' key={`setup${joke.id}`} >{joke.setup}</p>
                    <p className='punchline' key={`punchline${joke.id}`}>{joke.punchline}</p>
                </div>

            ))}
        </section>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        jokes: state.jokes,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchJokes })(Jokes)