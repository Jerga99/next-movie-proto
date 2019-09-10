import Modal from './modal'


const SideMenu = (props) => {
  return (
   <div>
     <Modal />
     <h1 className="my-4">Categories</h1>
      <div className="list-group">
        { props.categories.map(c => (
            <a key={c.id}
               href="#"
               className="list-group-item">{c.name}
            </a>
          ))
        }
      </div>
   </div>
  )
}

export default SideMenu
