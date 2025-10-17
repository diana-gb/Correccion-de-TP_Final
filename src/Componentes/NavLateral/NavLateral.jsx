import React from 'react'
import ICONOS from '../../Constantes/iconos'
import './NavLateral.css'


const NavLateral = () => {
  return (

<nav className='navLateral_container'>
        <div className='navLateral_content_top'>
            <bottom  className='content-top_iconTop'><ICONOS.mensaje/> </bottom>
            <bottom className='content-top_icon'><ICONOS.emptyCircle/></bottom>
            <bottom className='content-top_icon'><ICONOS.circle/></bottom>
            <bottom className='content-top_icon'><ICONOS.group/></bottom>
        </div>
        <div className='navLateral_content_bottom'>
            <button className='content-bottom_icon'><ICONOS.setting/></button>
            <img src='/Logo.png' alt="Logo"/>
        </div>
</nav>

  )
}

export default NavLateral