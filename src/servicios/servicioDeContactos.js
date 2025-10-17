
import React from 'react'
import contactos from '../Componentes/datos/datoDeContacto'

export function obtenerContactos (){

    return contactos
}

export function obtenerContactoId (contacto_id){

    for (const contacto of contactos){
        if(Number(contacto.id) === Number(contacto_id)){
            return contacto
        }
    }
}