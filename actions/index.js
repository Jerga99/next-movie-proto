

const movieData = []

const categories = [
 {id: '1', name: 'drama'},
 {id: '2', name: 'action'},
 {id: '3', name: 'adventure'},
 {id: '4', name: 'historical'},
]



export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(movieData), 100)
  })
}

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7)
  return new Promise((resolve, reject) => {
    movieData.push(movie)
    setTimeout(() => resolve(movie), 100)
  })
}

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const movieIndex = movieData.findIndex(m => m.id === id)
    const movie = movieData[movieIndex]
    setTimeout(() => resolve(movie), 100)
  })
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(categories), 100)
  })
}







