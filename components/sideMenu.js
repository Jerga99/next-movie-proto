import Modal from './modal'
import ModalCreateForm from './movieCreateForm'

const SideMenu = (props) => {
  return (
   <div>
     <Modal>
       <ModalCreateForm {...props} />
     </Modal>
     <h1 className="my-4">Categories</h1>
      <div className="list-group">
        <a
           key='all'
           onClick={() => props.changeCategory('all')}
           href="#"
           className={`list-group-item ${props.activeCategory === 'all' ? 'active' : ''}`}>All
        </a>
        { props.categories.map(c => (
            <a
               key={c.id}
               onClick={() => props.changeCategory(c.name)}
               href="#"
               className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name}
            </a>
          ))
        }
      </div>
   </div>
  )
}

export default SideMenu
