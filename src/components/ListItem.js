import React from 'react'

function ListItem({todo,id}) {
  return (
    <div>
       <ul>
        <li>
          <label htmlFor={id} >
            <input type="checkbox" id={id}/>
            {todo.name}
          </label>
          <button>Edit</button>
        </li>
      </ul>
    </div>
  )
}

export default ListItem
