import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList} from './TodoList'
import { TodoAdd } from './TodoAdd'

import './styles.css'

// const initialState=[{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }]

const init = ()=>{
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
    return JSON.parse(localStorage.getItem('todos')) || []; 

}

export const TodoApp = () => {
    // const [todos,dispatch] = useReducer(todoReducer, initialState);
    const [todos,dispatch] = useReducer(todoReducer, [],init);

    //necesito ejecutar cada vez qeu cambian los todos
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))   //localStorage trabaja con strigs no mas
    }, [todos])

    const handleDelete = (todoId) => {
        //creamos accion
        const action = {
            type:'delete',
            payload: todoId
        }       
        //ejecutamos
        dispatch(action);
    }

    const handleToggle =(todoId)=>{
        //lo mismo en un solo paso
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo=(newTodo)=>{
        dispatch({
            type:'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} ) </h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    {/* generar componente TodoList, todos, handleDelete, HandleToggle */}
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}/>
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
