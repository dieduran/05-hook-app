import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true) //no es para renderizar.. es para referencia
    const [state, setState] = useState({ data: null, loading: true, error: null})

    useEffect (()=>{
        return() =>{
            isMounted.current=false;
        }
    },[])


    useEffect(() => {
        //reseteo para que aparezca el loading en los siguiente cuando cambio
        setState({ data: null, loading: true, error: null}) 

        fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                if (isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }else{
                    console.log('setState no se ejecuto')
                }
            })
    }, [url])

    return state;

}
