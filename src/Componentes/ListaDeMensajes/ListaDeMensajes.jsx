import React, { useEffect, useRef } from 'react'
import Mensaje from '../Mensaje/Mensaje'
import './ListaDeMensajes.css'
import Contacto from '../Contacto/Contacto'


const ListaDeMensajes = (propiedades) => {
    
    const mensajes = propiedades.mensajes || []

    const ListaDeMensajes_JSX = mensajes.map((mensaje) => (
        
            <Mensaje
            key={mensaje.id}
            author={mensaje.author}
            content={mensaje.content}
            timestamp={mensaje.timestamp}
            />
        
    )
)
const ReferenciaInferior = useRef (null)
useEffect(
    () => {
            ReferenciaInferior.current.scrollIntoView({behavior: "smooth"})
    },
    [propiedades.mensajes]
)


    return (
        <div className='messages-list'>
            {ListaDeMensajes_JSX}
            <div ref={ReferenciaInferior}></div>
        </div>
    )
}

export default ListaDeMensajes
