import React from 'react'
import Modal from './modal'
import ModalCreateForm from './movieCreateForm'
import { createMovie } from '../actions'


class SideMenu extends React.Component {

  constructor(props) {
    super(props)
    this.modal = React.createRef();
  }

  handleCreateMovie = (movie, cleanCallback) => {
    createMovie(movie)
      .then(() => {
        this.props.addMovieToList()
        this.modal.closeModal()
        cleanCallback()
    })
  }

  render() {
    return (
       <div>
         <Modal ref={ele => {this.modal = ele}}>
           <ModalCreateForm {...this.props} handleCreateMovie={this.handleCreateMovie} />
         </Modal>
         <h1 className="my-4">Categories</h1>
          <div className="list-group">
            <a
               key='all'
               onClick={() => this.props.changeCategory('all')}
               href="#"
               className={`list-group-item ${this.props.activeCategory === 'all' ? 'active' : ''}`}>All
            </a>
            { this.props.categories.map(c => (
                <a
                   key={c.id}
                   onClick={() => this.props.changeCategory(c.name)}
                   href="#"
                   className={`list-group-item ${this.props.activeCategory === c.name ? 'active' : ''}`}>{c.name}
                </a>
              ))
            }
          </div>
       </div>
    )
  }
}

export default SideMenu
