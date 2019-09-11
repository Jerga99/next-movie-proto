import React, { useState, useEffect } from 'react'
import Router from 'next/router';
import Link from 'next/link'
import SideMenu from '../components/sideMenu'
import Carousel from '../components/Carousel'
import MovieList from '../components/MovieList'
import Footer from '../components/footer'
import { getMovies, getCategories } from '../actions'

const Home = (props) => {
  const { movies = [], categories = [] } = props
  const [ images, setImages ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    const { movies } = props
    const images = movies.slice(0,3).map(m => ({cover: m.cover, id: m.id}))
    setImages(images)
  }, []);

  const changeCategory = (category) => {
    alert(category)
    setFilter(category)
  }

  const addMovieToList = (movie) => {
    Router.push('/')
  }

  // If passing a second argument (array), React will run the callback after the first render and every time one of the elements in the array is changed. for example when placing useEffect(() => console.log('hello'), [someVar, someOtherVar]) - the callback will run after the first render and after any render that one of someVar or someOtherVar are changed.
  // By passing the second argument an empty array, React will compare after each render the array and will see nothing was changed, thus calling the callback only after the first render.

  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                activeCategory={filter}
                changeCategory={changeCategory}
                addMovieToList={addMovieToList}
                categories={categories} />
            </div>
            <div className="col-lg-9">
              <Carousel items={images} />
              <h1>Displaying "{filter}" movies</h1>
              <div className="row">
                <MovieList
                  movies={movies} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const categories = await getCategories()
  const movies = await getMovies()

  return {
    movies,
    categories
  }
}

export default Home






// import React, { useState } from 'react'
// import Link from 'next/link'
// import Head from 'next/head'
// import Nav from '../components/nav'
// import SideMenu from '../components/sideMenu'
// import Carousel from '../components/Carousel'
// import MovieList from '../components/MovieList'
// import Footer from '../components/footer'
// import { getMovies, getCategories } from '../actions'

// class Home extends React.Component {

//   static async getInitialProps({ req }) {
//     const categories = await getCategories()
//     const movies = await getMovies()

//     return {
//       movies,
//       categories
//     }
//   }

//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //     movies: [],
//   //     categories: []
//   //   }
//   // }

//   // componentDidMount() {
//   //   getMovies().then(movies => {
//   //     this.setState({movies})
//   //   })

//   //   getCategories().then(categories => {
//   //     this.setState({categories})
//   //   })
//   // }

//   render() {
//     const {categories, movies} = this.props

//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//         </Head>
//       <Nav />
//       <div className="home-page">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3">
//               <SideMenu categories={categories} />
//             </div>
//             <div className="col-lg-9">
//               <Carousel />
//               <div className="row">
//                 <MovieList movies={movies} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <style jsx>{`
//         .home-page {
//           margin-top: 80px;
//         }
//       `}</style>
//       </div>
//     )
//   }
// }

// export default Home






