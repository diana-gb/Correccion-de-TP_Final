import { createContext, useEffect, useState } from "react";
import { obtenerContactos } from "../servicios/servicioDeContactos";


export const ContextoListaDeContactos = createContext(
    {
        lista_contacto: [],
        cargandoListaContactos: false
    }
)

const ProveedorDeContextoLista = (propiedades) => {
    const [lista_contacto, cargarListaContactos] = useState([])
    const [cargandoListaContactos, cargandoConjuntoLista] = useState(false)

        const cargaDeListaContactos = () => {
            cargandoConjuntoLista(true)

            setTimeout (
                () => {
                    const respuesta_lista_contacto = obtenerContactos ()
                    cargarListaContactos (respuesta_lista_contacto)
                    cargandoConjuntoLista(false)
                },
                1000
            )
        }
        
    useEffect (
        () => {
            cargaDeListaContactos()
        },
        []
    )

    return (
        <ContextoListaDeContactos.Provider
        
            value={
                {
                    lista_contacto: lista_contacto,
                    cargandoListaContactos: cargandoListaContactos
                }
            }
            >
                {propiedades.children}       
        </ContextoListaDeContactos.Provider>
    )
}

export default ProveedorDeContextoLista 