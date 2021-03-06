import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effect.css'


export const MultipleCustomHooks = () => {
    const {counter,increment}=useCounter(1);

    const {loading,data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //aca tengo si se cargo o esta esperando
    //console.log(loading);

    // sacar estos datos si data tiene valor (no es null) y lo saca del lugar 0
    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {loading?
                (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
                    )
                :
                ( //no existe mas el text-right en bootstrap.. ahora es text-end
                <blockquote className="blockquote text-end"> 
                    <p className="mb-3">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
                )
            }
            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote 
            </button>
        </div>
    )
}
