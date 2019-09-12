

import React from 'react'
import { getMovieById, updateMovie } from '../../../actions'
import MovieCreateForm from '../../../components/movieCreateForm'

class Edit extends React.Component {

  static getInitialProps({query}) {
    return {query}
  }

  state = {
    movie: {}
  }

  handleMovieUpdate = (movie, cleanCallback) => {
    updateMovie(movie)
      .then(() => {
        // Handle Success
        alert('Movie Updated!')

    })
  }

  componentDidMount() {
    const { id } = this.props.query
    getMovieById(id).then((movie) => {
      this.setState({movie})
    })
  }

  render() {
    const { movie } = this.state
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm
          initialData={movie}
          handleFormSubmit={this.handleMovieUpdate} />
      </div>
    )
  }
}

export default Edit
