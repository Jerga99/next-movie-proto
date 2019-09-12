import React from 'react'
import Link from 'next/link'

const MovieList = (props) => {
  const { movies } = props
  const shorten = (text) => text.substr(0, 100) + '...'
  return (
    <React.Fragment>
      { movies.length > 0 ?
          movies.map(movie => {
          return (
            <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                  <a>
                    <img className="card-img-top img-fluid" src={movie.image} alt="" />
                  </a>
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                      <a>{movie.name}</a>
                    </Link>
                  </h4>
                  <h5>{movie.genre}</h5>
                  <p className="card-text">{shorten(movie.description)}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{movie.rating}</small>
                </div>
              </div>
            </div>
            )
          })
        : <div class="ml-3 alert alert-warning" role="alert">
            There are no movies for selected category :(
          </div>
      }
      <style jsx>{`
        .card-footer {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }
      `}
      </style>
    </React.Fragment>
  )
}

export default MovieList
