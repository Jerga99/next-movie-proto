


const Modal = () => {

  let closeButton = null

  const toggleModal = () => {
    closeButton.click()
  }

  return (
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Create Movie
      </button>

      <div class="modal fade"
           id="exampleModal"
           tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <input type="text" class="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
                </div>
                <div class="form-group">
                  <label for="description">Rating</label>
                  <input type="number" max="5" min="0" class="form-control" id="rating" placeholder="3" />
                  <small id="emailHelp" class="form-text text-muted">Max: 5, Min: 0 </small>
                </div>
                <div class="form-group">
                  <label for="image">Image</label>
                  <input type="text" class="form-control" id="image" placeholder="http://....." />
                </div>
                <div class="form-group">
                  <label for="cover">Cover</label>
                  <input type="text" class="form-control" id="cover" placeholder="http://......" />
                </div>
                <div class="form-group">
                  <label for="longDesc">Long Description</label>
                  <textarea class="form-control" id="longDesc" rows="3"></textarea>
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
              </form>
            </div>
            <div class="modal-footer">
              <button ref={(ele) => { closeButton = ele }} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={toggleModal} type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
