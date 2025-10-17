import BarraNav from "../../Componentes/BarraNav/BarraNav"
import React, { useContext, useEffect } from "react"
import FormNuevoMensaje from "../../Componentes/FormNuevoMensaje/FormNuevoMensaje"
import ListaDeMensajes from "../../Componentes/ListaDeMensajes/ListaDeMensajes"
import { useState } from "react"
import { useParams } from "react-router"
import { obtenerContactoId } from "../../servicios/servicioDeContactos"
import ListaDeContactos from "../../Componentes/ListaDeContactos/ListaDeContactos"
import './PantallaDeMensajes.css'
import { ContextoDeContacto } from "../../Contexto/ContextoDeContacto"
import EncabezadoDeContacto from "../../Componentes/EncabezdoDeContacto/EncabezadoDeContacto"
import contactos from '../../Componentes/datos/datoDeContacto'
import WhatsAppSpinner from "../../Componentes/WhatsAppSpinner/WhatsAppSpinner"
import CargandoContenido from '../../Componentes/CargandoContenido/CargandoContenido'
import NavLateral from "../../Componentes/NavLateral/NavLateral"


function PantallaDeMensajes() {

const {cargandoContacto, contactoDetalle, crearNuevoMensaje} = useContext(ContextoDeContacto)


  return (
        <div className="message-screen">
            <div className="message-screen_container-navLateral">
            <NavLateral/>
            </div>
            <div className="message-screen_left">
                <div className="message-screen_left-header">
                  <BarraNav/>
                </div>
                <div className="message-screen_contact-list_container">
                  <ListaDeContactos/>
                </div>
            </div>
            <div className="message-screen_message_container">
              <EncabezadoDeContacto/>
              
                  {
                    cargandoContacto ? 
                    <CargandoContenido/> 
                    :( contactoDetalle && contactoDetalle.message ? 
                      <ListaDeMensajes mensajes={contactoDetalle.message} />
                      
                      : 
                      <WhatsAppSpinner/>
                    )
                  }
              <div>
                <FormNuevoMensaje crearNuevoMensaje={crearNuevoMensaje}/>
              </div>
            </div>
        </div>
  )
}

export default PantallaDeMensajes
