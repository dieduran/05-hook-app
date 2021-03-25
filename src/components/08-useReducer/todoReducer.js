export const todoReducer = (state=[], action) =>{

    switch (action.type) {
        case 'add':
            
             return [...state, action.payload]; //agregamos al arreglo
    
        default: //se llama cuando se inicializar
            return state;
    }
}