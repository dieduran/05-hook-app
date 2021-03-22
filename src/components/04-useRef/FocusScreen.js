import React, { useRef } from 'react'

import '../02-useEffect/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick=() =>{
        ////da foco y selecciona contenido
        //document.querySelector('input').select();   //en lugar de .focus()
        //con el ref no necesito buscarlo.. tengo la referencia
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <input 
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre">

            </input>
            <button className="btn btn-outline-primary mt-5"
                onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
