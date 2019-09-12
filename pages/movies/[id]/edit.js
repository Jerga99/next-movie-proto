

import React from 'react'
import { getMovieById } from '../../../actions'
import MovieCreateForm from '../../../components/movieCreateForm'

class Edit extends React.Component {

  static getInitialProps({query}) {
    return {query}
  }

  state = {
    movie: {}
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
        <MovieCreateForm initialData={movie} />
      </div>
    )
  }
}

export default Edit
