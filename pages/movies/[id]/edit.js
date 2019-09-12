

import React from 'react'
import { getMovieById } from '../../../actions'
import MovieCreateForm from '../../../components/movieCreateForm'

class Edit extends React.Component {

  static getInitialProps({query}) {
    return {query}
  }

  state = {
    movie: {},
    isFetched: false
  }

  componentDidMount() {
    const { id } = this.props.query
    getMovieById(id).then((movie) => {
      this.setState({movie, isFetched: true})
    })
  }

  render() {
    const { movie, isFetched } = this.state
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        { isFetched && <MovieCreateForm initialData={movie} />}
      </div>
    )
  }
}

export default Edit
