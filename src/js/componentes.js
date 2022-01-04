import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';


/**
 * exportar funcion
 */


 export const agregarNombre = ( nombre ) => {

    console.log('creando etiqueta!!!');

    let header = document.createElement('h1');
    header.innerHTML = `hola ${nombre}`;
    
    document.body.appendChild( header );

    //img
    const img = document.createElement('img');
    img.src = webpacklogo;

    document.body.appendChild( img );



}