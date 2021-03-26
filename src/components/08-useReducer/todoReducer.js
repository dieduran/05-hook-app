export const todoReducer = (state=[], action) =>{

    switch (action.type) {
        case 'add':
            return [...state, action.payload]; //agregamos al arreglo
        case 'delete':
            return state.filter(todo => todo.id!== action.payload);
        case 'toggle':
            return state.map( todo=>
                    (todo.id===action.payload)
                        ?{...todo,done:!todo.done}
                        :todo
                )
        case 'toggle-anteriorLargo':
            return state.map( todo =>{
                if(todo.id===action.payload){
                    return{
                        ...todo,
                        done: !todo.done //devolvemos el objeto igual pero con ese campo negado                }
                    }
                } else{
                    return todo
                }
            })
        default: //se llama cuando se inicializar
            return state;
    }
}