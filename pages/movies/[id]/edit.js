

import React from 'react'
import { getMovieById } from '../../../actions'

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
      alert(JSON.stringify(movie))
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
      </div>
    )
  }
}

export default Edit
