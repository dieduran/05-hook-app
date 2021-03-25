console.log('hola mundo');

const initialState= [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

const todoReducer = (state=initialState,action) =>{

    if (action?.type==='agregar'){
        return [...state, action.payload]; //ojo.. no usar state.push
    }

    return state;
}

let todos=todoReducer();

//podria agregar con todo.push.... pero no deberia usarlo asi.


const newTodo= { //nuevo objeto
    id: 2,
    todo: 'Comprar leche',
    done: false
};


const agregarTodoAction = {        //nueva accion 
    type: 'agregar',    //type: tipo de accion a realizar
    payload:  newTodo   //payload: el objeto nuevo (payload por estandar)
}

todos= todoReducer (todos, agregarTodoAction)




console.log(todos);
