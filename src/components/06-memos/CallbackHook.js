import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effect.css'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);


    // const increment = ()=>{
    //     setCounter(counter+1);
    // };

//esto es para no tener una funcion en memoria por cada llamado.. sino una sola y reusarla
    const increment = useCallback( (num) => {
            setCounter(c => c+num);  //eso es porque deberia ir counter pero si lo ponemos da error. esto evita la dependencia
        }, [setCounter]) //la dependencia

    return (
        <div>
            <h1>useCallbackHook: {counter}</h1>
            <hr/>
            
            <ShowIncrement increment={increment}/>
        </div>
    )
}
