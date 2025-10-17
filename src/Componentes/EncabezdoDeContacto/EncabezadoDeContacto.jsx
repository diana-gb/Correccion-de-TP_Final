
import React from 'react'
import Contacto from '../Contacto/Contacto'
import { useParams } from 'react-router'
import { obtenerContactoId } from '../../servicios/servicioDeContactos'
import'./EncabezadoDeContacto.css'
import ICONOS from '../../Constantes/iconos'
import InfoContacto from '../InfoContacto/InfoContacto'


const EncabezadoDeContacto = (propiedades) => {

    const contactos = propiedades.contactos
    const {id_contacto} = useParams()

    const contactoActual = obtenerContactoId (id_contacto)
    
    return(
        <div className="contact-header">
            <div className='contact-header_contact'>
                <a href="/" className='icon_a'><ICONOS.flecha2/></a>
                <img
                    className="contact-header_img"
                    src={contactoActual.img_profile}
                    alt={contactoActual.name}
                />
                <div className="contact-header_info">
                    <h3>{contactoActual.name}</h3>
                    <span>Últ. vez: {contactoActual.last_time_connected}</span>
                </div>
                
            </div>
            <div className="contact-header_actions">
                <InfoContacto/>
            </div>
        </div>
    )

}

export default EncabezadoDeContacto
