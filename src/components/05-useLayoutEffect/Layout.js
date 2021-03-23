import React,{ useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'


export const Layout = () => {
    const {counter,increment}=useCounter(1);

    const {data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //aca tengo si se cargo o esta esperando
    //console.log(loading);

    // sacar estos datos si data tiene valor (no es null) y lo saca del lugar 0
    const {quote} = !!data && data[0];
    const [boxSize, setBoxSize] = useState({})

    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect: BreakingBad Quotes</h1>
            <hr/>
            <blockquote className="blockquote text-end"> 
                <p 
                    className="mb-3"
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>
            <pre>
                {/* no se puede como objeto directamente */}
                {JSON.stringify( boxSize,null,3) } 
            </pre>
            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote 
            </button>
        </div>
    )
}
