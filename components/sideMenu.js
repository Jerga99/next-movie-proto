


const SideMenu = (props) => {
  return (
   <div>
     <h1 className="my-4">Categories</h1>
      <div className="list-group">
        { props.categories.map(c => (
            <a href="#"
               className="list-group-item">{c.name}
            </a>
          ))
        }
      </div>
   </div>
  )
}

export default SideMenu
