export const procesoPesado = (iteraciones) =>{
    console.log('nueva iteracion: ',iteraciones);
    for(let i=0 ; i<iteraciones;i++){
        console.log('Ahi vamos...');
    }
    return `${iteraciones} iteraciones realizadas.`
}