
import React from 'react'

const Modal = (props) => {

  let closeButton = null
  let data = {}

  const closeModal = () => {
    closeButton.click()
  }

  // Verifies that children has only one child (a React element) and returns it. Otherwise this method throws an error.
  const onlyChild = React.Children.only(props.children)

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
              {React.cloneElement(onlyChild, { closeModal })}
            </div>
            <div class="modal-footer">
              <button ref={(ele) => { closeButton = ele }} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// <button onClick={submitModal} type="button" class="btn btn-primary">Save changes</button>

export default Modal
