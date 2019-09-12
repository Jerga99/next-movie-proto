import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../actions'

const Movie = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { movie } = props

  const handleDelete = (id) => {
    deleteMovie(id).then(() => router.push('/'))
  }

  return (
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">{movie.name}</h1>
        <p class="lead">{movie.description}</p>
        <hr class="my-4" />
        <p>{movie.genre}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        <button onClick={() => handleDelete(id)}
           class="btn btn-danger btn-lg"
           type="button">Delete</button>
      </div>
      <p>
      {movie.longDesc}
      </p>
    </div>
  )
}

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)

  return { movie }
}

export default Movie
