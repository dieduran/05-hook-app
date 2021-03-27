import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <>
            <ul className='list-group list-group-flush'>
            {
                todos.map((todo,i)=>
                    //definir TodoListItem {todo, index, handleDelete, handleToggle}
                    <TodoListItem 
                        key={todo.id}   //nunca utilizar el indice porqeu react se puede equivocar al borrar
                        todo={todo} 
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}/>)
            }
            </ul>        
        </>
    )
}
