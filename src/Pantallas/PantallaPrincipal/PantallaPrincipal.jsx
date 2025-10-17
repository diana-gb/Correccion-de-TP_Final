import React from 'react'
import ListaDeContactos from '../../Componentes/ListaDeContactos/ListaDeContactos'
import './PantallaPrincipal.css'
import BarraNav from '../../Componentes/BarraNav/BarraNav'
import NavLateral from '../../Componentes/NavLateral/NavLateral'
const PantallaPrincipal = () => {
  return (
    <div className='home-screen_container'>
      <div className='home-screen_container_navLateral'>
        <NavLateral/>
      </div>
        <div className='home-screen_container-left'>
            <div className='content-lef_header'>
              <BarraNav/>
            </div>
            <div className='content-left_content'>
              <ListaDeContactos/>
            </div>
        </div>
        <div className='home-screen_container-right'>
            <span className='content-right_content'>No hay contacto seleccionado</span>
        </div>
    </div>
  )
}


export default PantallaPrincipal