
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
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Create Movie
      </button>

      <div className="modal fade"
           id="exampleModal"
           tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {React.cloneElement(onlyChild, { closeModal })}
            </div>
            <div className="modal-footer">
              <button ref={(ele) => { closeButton = ele }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// <button onClick={submitModal} type="button" class="btn btn-primary">Save changes</button>

export default Modal
