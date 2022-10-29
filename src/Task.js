import React from 'react'

const Task = (props) => {
   return (
      <li className='list-group-item m-3 d-flex justify-content-between border border-3'>
         <h4>{props.name}</h4>
         {!props.noDelete ? (
            <button
               type='button'
               className='btn btn-secondary'
               onClick={() => props.deleteItemHandler(props.id)}>
               Delete Item
            </button>
         ) : null}
      </li>
   )
}

export default Task
