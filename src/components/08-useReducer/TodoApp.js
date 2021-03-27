import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'
import { TodoList} from './TodoList'

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

    const [{description}, handleInputChange,reset] = useForm({
        description: ''  //tiene que  ser igual al del formulario para reusarlo
    });

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
        //dispatch
        dispatch(action);
    }

    const handleToggle =(todoId)=>{
        //lo mismo en un solo paso
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }
    const handleSubmit=(e) =>{
        e.preventDefault(); //para que no refresque

        if (description.trim().length<=1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type:'add',
            payload: newTodo
        }
        dispatch(action);
        reset();
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
                    <h4>Agregar ToDo</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}> 
                        <input
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            className="form-control"
                            autoComplete="off"  
                            value={description}
                            onChange={handleInputChange}  
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary col-12" //no funciona mas el btn-block en bootstrap 5
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
