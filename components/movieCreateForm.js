import { useState, useEffect } from 'react'


const MovieCreateForm = () => {
  const [form, setForm] = useState({})

  return (
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input value={form.name} type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input value={form.description} type="text" class="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
      </div>
      <div class="form-group">
        <label for="description">Rating</label>
        <input value={form.rating} type="number" max="5" min="0" class="form-control" id="rating" placeholder="3" />
        <small id="emailHelp" class="form-text text-muted">Max: 5, Min: 0 </small>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input value={form.image} type="text" class="form-control" id="image" placeholder="http://....." />
      </div>
      <div class="form-group">
        <label for="cover">Cover</label>
        <input value={form.cover} type="text" class="form-control" id="cover" placeholder="http://......" />
      </div>
      <div class="form-group">
        <label for="longDesc">Long Description</label>
        <textarea value={form.longDesc} class="form-control" id="longDesc" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="genre">Genre</label>
        <select multiple class="form-control" id="genre">
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button onClick={() => alert(JSON.stringify(form))}>Submit</button>
    </form>
  )
}

export default MovieCreateForm
