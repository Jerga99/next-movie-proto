import { useRouter } from 'next/router'


const Movie = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div class="container">
      <h1>Movie of id: {id} </h1>
    </div>
  )
}

export default Movie
