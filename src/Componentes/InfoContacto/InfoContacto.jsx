import React, { useState } from 'react'
import ICONOS from '../../Constantes/iconos'
import './InfoContacto.css'

const InfoContacto = () => {
    const [is_open, setIsOpen]= useState(false)
    const toggleMenu = () =>{
        setIsOpen(!is_open)
}


    return (
    <div>
        <button className="header-icon">
            <ICONOS.video/> 
        </button>
        <button className="header-icon">
            <ICONOS.lupa />
        </button>
        <button
        className="header-icon"
        onClick={toggleMenu}>
            <ICONOS.puntos />
        </button>
        {
            is_open &&
            <div className='info-content'>
                No hay informacion del contacto <br /> Es posible que te hayan bloqueado <br/>
                <span>ir a contactos <a href="/"><ICONOS.flecha/></a></span>
            </div>
        }
    </div>
)
}

export default InfoContacto