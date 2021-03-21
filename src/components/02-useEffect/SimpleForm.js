import React, {useEffect, useState} from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email:''
    });

    const {name, email} = formState; // para no usar formState.name

    //cualquier cambio y con corchetes solo la primera vez
    useEffect(() => {
       //console.log('hey!');
    },[]);

    // cambio en el formState
    useEffect(() => {
        //console.log('formState!');
     },[formState]);
 
    // cambio en el email (porque esta desest..)
    useEffect(() => {
        console.log('solo cuando cambia el email!');
     },[email]);

    const handleInputChange=({target})=>{
        //console.log(e.target);
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };


    return (
        <>
        <h1>useEffect</h1>
        <hr/>

        <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />
        </div>
        {/* //si el name existe va a mostrar el componente mensaje               */}
        { (name==='123') && <Message/>}   
        </>
    )
}

