import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {
    const [{description}, handleInputChange,reset] = useForm({
        description: ''  //tiene que  ser igual al del formulario para reusarlo
    });

    const handleSubmit=(e)=>{
        e.preventDefault(); //para que no refresque
        if (description.trim().length<=1 ){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);  //uso el dispatch de la funcion del padre
        reset(); //es el tercer parametro del use form

    }

    return (
        <>
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
        </>
    )
}
