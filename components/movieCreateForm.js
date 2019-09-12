// import { useState, useEffect } from 'react'
// import { createMovie } from '../actions'

// const MovieCreateForm = (props) => {
//   const [form, setForm] = useState({})

//   const handleChange = (event) => {
//     const target = event.target
//     const name = target.name
//     setForm({
//       ...form,
//       [name]: target.value
//     })
//   }

//   const handleGenreChange = (event) => {
//     const { options } = event.target
//     let value = [];
//     for (let i = 0, l = options.length; i < l; i++) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     setForm({...form, genre: value.toString()});
//   }

//   const handleCreateMovie = () => {
//     createMovie(form)
//       .then((movie) => {
//       props.addMovieToList(movie)
//       setForm({})
//       props.closeModal()
//     })
//   }

//   return (
//     <form>
//       <div class="form-group">
//         <label for="name">Name</label>
//         <input
//           value={form.name}
//           onChange={handleChange}
//           name="name"
//           type="text"
//           class="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
//       </div>
//       <div class="form-group">
//         <label for="description">Description</label>
//         <input
//           value={form.description}
//           onChange={handleChange}
//           name="description"
//           type="text"
//           class="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
//       </div>
//       <div class="form-group">
//         <label for="description">Rating</label>
//         <input
//           value={form.rating}
//           onChange={handleChange}
//           type="number"
//           name="rating"
//           max="5" min="0" class="form-control" id="rating" placeholder="3" />
//         <small id="emailHelp" class="form-text text-muted">Max: 5, Min: 0 </small>
//       </div>
//       <div class="form-group">
//         <label for="image">Image</label>
//         <input
//           value={form.image}
//           onChange={handleChange}
//           name="image"
//           type="text"
//           class="form-control" id="image" placeholder="http://....." />
//       </div>
//       <div class="form-group">
//         <label for="cover">Cover</label>
//         <input
//           value={form.cover}
//           onChange={handleChange}
//           name="cover"
//           type="text"
//           class="form-control" id="cover" placeholder="http://......" />
//       </div>
//       <div class="form-group">
//         <label for="longDesc">Long Description</label>
//         <textarea
//           value={form.longDesc}
//           onChange={handleChange}
//           name="longDesc"
//           class="form-control"
//           id="longDesc" rows="3"></textarea>
//       </div>
//       <div class="form-group">
//         <label for="genre">Genre</label>
//         <select
//           onChange={handleGenreChange}
//           multiple class="form-control" id="genre">
//           <option>drama</option>
//           <option>music</option>
//           <option>adventure</option>
//           <option>historical</option>
//           <option>action</option>
//         </select>
//       </div>
//       <button onClick={handleCreateMovie} type="button" class="btn btn-primary">Save changes</button>
//     </form>
//   )
// }

// export default MovieCreateForm


import React from 'react'
import { useState, useEffect } from 'react'

class MovieCreateForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.state = {
      hasInitialDataLoaded: false,
      form: {
        name: '',
        releaseYear: '',
        description: '',
        longDesc: '',
        rating: '',
        genre: '',
        cover: '',
        image: ''
      }
    }
  }

  componentDidUpdate() {
    if (this.props.initialData && !this.state.hasInitialDataLoaded) {
      this.setState({
        form: this.props.initialData,
        hasInitialDataLoaded: true
      })
    }
  }

  handleChange = (event) => {
    const target = event.target
    const name = target.name
    this.setState({
      form: {
        ...this.state.form,
        [name]: target.value
      }
    })
  }

  handleGenreChange = (event) => {
    const { options } = event.target
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    this.setState({
      form: {
        ...this.state.form,
        genre: value.toString()
      }
    })
  }

  submitForm = () => {
    this.props.handleCreateMovie(this.state.form, () => {
      this.setState({form: {
        name: '',
        releaseYear: '',
        description: '',
        longDesc: '',
        rating: '',
        genre: '',
        cover: '',
        image: ''
      }})
    })
  }

  render() {
    const { form } = this.state
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={form.name}
            onChange={this.handleChange}
            name="name"
            type="text"
            className="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            value={form.description}
            onChange={this.handleChange}
            name="description"
            type="text"
            className="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
        </div>
        <div className="form-group">
          <label htmlFor="description">Rating</label>
          <input
            value={form.rating}
            onChange={this.handleChange}
            type="number"
            name="rating"
            max="5" min="0" className="form-control" id="rating" placeholder="3" />
          <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            value={form.image}
            onChange={this.handleChange}
            name="image"
            type="text"
            className="form-control" id="image" placeholder="http://....." />
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover</label>
          <input
            value={form.cover}
            onChange={this.handleChange}
            name="cover"
            type="text"
            className="form-control" id="cover" placeholder="http://......" />
        </div>
        <div className="form-group">
          <label htmlFor="longDesc">Long Description</label>
          <textarea
            value={form.longDesc}
            onChange={this.handleChange}
            name="longDesc"
            className="form-control"
            id="longDesc" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            onChange={this.handleGenreChange}
            multiple className="form-control" id="genre">
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
          </select>
        </div>
        <button onClick={this.submitForm} type="button" className="btn btn-primary">Save changes</button>
      </form>
    )
  }
}

export default MovieCreateForm

