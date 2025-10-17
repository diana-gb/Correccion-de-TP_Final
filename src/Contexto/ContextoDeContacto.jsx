import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { obtenerContactoId } from "../servicios/servicioDeContactos";

export const ContextoDeContacto = createContext(
    {
        cargandoContacto: false,
        contactoDetalle: null,
        crearNuevoMensaje: (nuevo_mensaje) => {}
    }
)

const ProveedorContextoDeContacto = (propiedades) => {

    const [cargandoContacto, cargandoConjuntoContacto] = useState(false)
    const [contactoDetalle, cargarDetalleContactos] = useState (null)

    const {id_contacto }= useParams() 

    function cargarContactoPorId (contacto_id){
        cargandoConjuntoContacto(true)

        setTimeout(
        () => {
            const contacto = obtenerContactoId(contacto_id)
            cargarDetalleContactos(contacto)
            cargandoConjuntoContacto(false)
        },
        2000
        )
    }

        useEffect(
        () => { 
            cargarContactoPorId(id_contacto)
        },        
        [id_contacto]
        
    )

    
    const crearNuevoMensaje = (nuevo_mensaje) => {

        const objeto_nuevo_mensaje = {
        content: nuevo_mensaje.contenido,
        author: 'Semilleria PG+',
        timestamp: nuevo_mensaje.hora,
        id: contactoDetalle.message.length + 1 
        }

        const mensajes_clonados = [...contactoDetalle.message]
        mensajes_clonados.push(objeto_nuevo_mensaje)
        cargarDetalleContactos({...contactoDetalle, message: mensajes_clonados})
    }


    return (
        <ContextoDeContacto.Provider
        value={
            {
            cargandoContacto: cargandoContacto,
            contactoDetalle: contactoDetalle,
            crearNuevoMensaje: crearNuevoMensaje
            }
        }
        >
            <Outlet/>
        </ContextoDeContacto.Provider>
    )
}

export default ProveedorContextoDeContacto