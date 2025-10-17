import React, { useState } from 'react'
import './BarraNav.css'
import ListaDeContactos from '../ListaDeContactos/ListaDeContactos'
import ICONOS from '../../Constantes/iconos'

const BarraNav = () => {
    const [is_open, setIsOpen]= useState(false)
    const toggelMenu = () =>{
        setIsOpen(!is_open)
    }

    return (
    <header>
        <h2>WhatsApp</h2>
        <nav className='nav-pc'>
            <button className='btn_nav-pc'><ICONOS.add/></button>
            <button className='btn_nav-pc'><ICONOS.puntos/></button>
        </nav>
{/*         <button
            onClick={toggelMenu} 
            className='btn-menu'>
            <ICONOS.puntos/>
        </button>

{  
    is_open &&
    <nav className='nav-mobil'>
            <ListaDeContactos/>
    </nav>
} */}
    </header>
)
}

export default BarraNav