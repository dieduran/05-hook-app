//un custom Hooks no es mas que una funcion

import { useState } from "react"

export const useCounter = (initialState=10) => {

    const [state, setState] = useState(initialState);

    const increment= (factor = 1 )=>{   //por si quiero contar de a mas de a 1
        setState(state + factor);
    }
    const decrement= (factor = 1)=>{
        setState(state - factor);
    }
    const reset= ()=>{
        setState(initialState);
    }
    //depende.. a veces como objeto y a veces como arreglo. depende de que necesite
    return { 
        state,
        increment,
        decrement,
        reset
    }
}
