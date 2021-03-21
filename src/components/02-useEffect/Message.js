import React, { useEffect } from 'react'


export const Message = () => {

    useEffect(() => {
        console.log('componente montado')
        return () => {
            console.log('componente desmontado')
        }
    }, []) //solo la primera vez
    

    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}
