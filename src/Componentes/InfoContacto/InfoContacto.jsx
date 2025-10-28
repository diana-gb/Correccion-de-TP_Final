import React, { useState } from 'react'
import ICONOS from '../../Constantes/iconos'
import './InfoContacto.css'
import ListaDeContactos from '../ListaDeContactos/ListaDeContactos'

const InfoContacto = () => {
    const [is_open, setIsOpen]= useState(false)
    const toggleMenu = () =>{
        setIsOpen(!is_open)
}


    return (
    <div className='icons_container'>
        <button className="header-icon">
            <ICONOS.video/> 
        </button>
        <button className="header-icon">
            <ICONOS.lupa />
        </button>
        <button className='header-icon'>
            <ICONOS.puntos/>
        </button>
        <button
        className="btn_header-icon"
        onClick={toggleMenu}>
            <ICONOS.puntos />
        </button>
        {
            is_open &&
                <ul>
                    <li>
                        <button><ICONOS.info/> Info. del contacto</button>
                    </li>
                    <li>
                        <button><ICONOS.check/> Seleccionar mensaje </button>
                    </li>
                    <li>
                        <button><ICONOS.belloff/> Silenciar notificaciones</button>
                    </li>
                    <li>
                        <button><ICONOS.timer/> Mensajes temporales</button>
                    </li>
                    <li>
                        <button><ICONOS.close/> Cerrar chat</button>
                    </li>

                    <hr />

                    <li>
                        <button><ICONOS.report/> Reportar</button>
                    </li>
                    <li>
                        <button><ICONOS.block/> Bloquear</button>
                    </li>
                    <li>
                        <button><ICONOS.minus/> Vaciar chat</button>
                    </li>
                    <li>
                        <button><ICONOS.trash/> Eliminar chat</button>
                    </li>
                </ul>
        }
    </div>
)
}

export default InfoContacto