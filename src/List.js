import React, { useState } from 'react'

import Task from './Task'
import ListSearch from './ListSearch'

const todos = [
   { id: String(Math.random()).substring(2, 8), task: 'Task 1' },
   { id: String(Math.random()).substring(2, 8), task: 'Sask 2' },
   { id: String(Math.random()).substring(2, 8), task: 'Kask 3' },
   { id: String(Math.random()).substring(2, 8), task: 'Task 4' },
   { id: String(Math.random()).substring(2, 8), task: 'Sask 5' },
]

const List = () => {
   const [todoList, setTodoList] = useState(todos)
   const [inputValue, setInputValue] = useState('')
   const [suggestions, setSuggestions] = useState([])

   const addItem = () => {
      if (inputValue) {
         setTodoList([
            ...todoList,
            {
               id: String(Math.random()).substring(2, 8),
               task: inputValue,
            },
         ])
         setInputValue('')
      }
   }

   const inputChangeHandler = (event) => {
      setInputValue(event.target.value)
   }

   const deleteItemHandler = (id) => {
      setTodoList(todoList.filter((item) => item.id !== id))
   }

   const searchSuggestionHandler = (suggestionList, value) => {
      if (!value) {
         setSuggestions([])
      } else {
         setSuggestions(suggestionList)
      }
   }

   return (
      <div className='container'>
         <div className='d-flex justify-content-between'>
            <div>
               <ListSearch
                  content={todoList}
                  searchSuggestionHandler={searchSuggestionHandler}
               />
            </div>
            <div>
               <h2 className='text-center'>To-Do List </h2>
            </div>
            <div>
               <input
                  className='rounded-start'
                  type='text'
                  value={inputValue}
                  onChange={inputChangeHandler}
                  placeholder='Task Name'
               />
               <button className='rounded-end' onClick={addItem}>
                  Add Item
               </button>
            </div>
         </div>
         <div className='card'>
            <ul className='list-group'>
               {suggestions.length !== 0
                  ? suggestions.map((item) => (
                       <Task
                          key={item.id}
                          id={item.id}
                          name={item.task}
                          deleteItemHandler={deleteItemHandler}
                          noDelete
                       />
                    ))
                  : todoList.map((item) => (
                       <Task
                          key={item.id}
                          id={item.id}
                          name={item.task}
                          deleteItemHandler={deleteItemHandler}
                       />
                    ))}
            </ul>
         </div>
      </div>
   )
}

export default List
