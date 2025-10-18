import React, { useContext } from 'react'
import { obtenerContactos } from '../../servicios/servicioDeContactos'
import { Link } from 'react-router'
import { ContextoListaDeContactos } from '../../Contexto/ContextoListaDeContactos'
import './ListaDeContactos.css'
const ListaDeContactos = () => {

    const {lista_contacto, cargandoListaContactos} = useContext(ContextoListaDeContactos)

    
    return (

        <div>
            {
        cargandoListaContactos
        ? <span><whatsAppSpinner/></span>
        : lista_contacto.map(
                    (contacto) => {
                        return (
                            <ItemContacto
                                contacto={contacto}
                                key= {contacto.id}
                            />                       
                        ) 
                    }
                )
        }
    </div>
)
}

const ItemContacto = (props) => {

    const contacto = props.contacto
            return (
                <Link to={'/contacto/'+ contacto.id} >
                <div className='contact-list_contact-container'>
                        <img src={contacto.img_profile} alt={contacto.name}/>
                        <div className='contact-list_contact-info'>
                            <h3 className='contact_name'>{contacto.name}</h3>
                            <span className='contact_state'>En linea: {contacto.is_connected ? 'Si' : 'No'}</span>
                        </div>
                        <hr />
                </div>
                </Link>
                )
}

export default ListaDeContactos