import { useState, useEffect } from 'react'
import { createMovie } from '../actions'

const MovieCreateForm = (props) => {
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    setForm({
      ...form,
      [name]: target.value
    })
  }

  const handleGenreChange = (event) => {
    const { options } = event.target
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setForm({...form, genre: value.toString()});
  }

  const handleCreateMovie = () => {
    createMovie(form)
      .then((movie) => {

      alert(JSON.stringify(movie))
      setForm({});
      props.closeModal()
    })
  }

  return (
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          value={form.name}
          onChange={handleChange}
          name="name"
          type="text"
          class="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          value={form.description}
          onChange={handleChange}
          name="description"
          type="text"
          class="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
      </div>
      <div class="form-group">
        <label for="description">Rating</label>
        <input
          value={form.rating}
          onChange={handleChange}
          type="number"
          name="rating"
          max="5" min="0" class="form-control" id="rating" placeholder="3" />
        <small id="emailHelp" class="form-text text-muted">Max: 5, Min: 0 </small>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input
          value={form.image}
          onChange={handleChange}
          name="image"
          type="text"
          class="form-control" id="image" placeholder="http://....." />
      </div>
      <div class="form-group">
        <label for="cover">Cover</label>
        <input
          value={form.cover}
          onChange={handleChange}
          name="cover"
          type="text"
          class="form-control" id="cover" placeholder="http://......" />
      </div>
      <div class="form-group">
        <label for="longDesc">Long Description</label>
        <textarea
          value={form.longDesc}
          onChange={handleChange}
          name="longDesc"
          class="form-control"
          id="longDesc" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          multiple class="form-control" id="genre">
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button onClick={handleCreateMovie} type="button" class="btn btn-primary">Save changes</button>
    </form>
  )
}

export default MovieCreateForm
