import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTeams } from '../actions/teamActions'

const Teams = (props) => {
    useEffect(() => {
        props.fetchTeams()
    }, [])

    return (
        <section>
            Teams GO HERE
        </section>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        teams: state.teams,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchTeams })(Teams)