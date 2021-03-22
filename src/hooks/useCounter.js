//un custom Hooks no es mas que una funcion

import { useState } from "react"

export const useCounter = (initialState=-1) => {

    const [counter, setCounter] = useState(initialState);

    const increment= ()=>{   //por si quiero contar de a mas de a 1
        setCounter(counter + 1);
    }
    const decrement= ()=>{
        setCounter(counter - 1);
    }
    const reset= ()=>{
        setCounter(initialState);
    }
    //depende.. a veces como objeto y a veces como arreglo. depende de que necesite
    return { 
        counter,
        increment,
        decrement,
        reset
    }
}
