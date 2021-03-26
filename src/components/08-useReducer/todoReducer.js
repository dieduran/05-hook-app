export const todoReducer = (state=[], action) =>{

    switch (action.type) {
        case 'add':
            return [...state, action.payload]; //agregamos al arreglo
        case 'delete':
            return state.filter(todo => todo.id!== action.payload);

        default: //se llama cuando se inicializar
            return state;
    }
}