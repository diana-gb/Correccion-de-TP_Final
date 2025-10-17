import React, { useContext } from 'react'
import { ContextoListaDeContactos } from '../../Contexto/ContextoListaDeContactos'
import './FormNuevoMensaje.css'
import ICONOS from '../../Constantes/iconos'


const FormNuevoMensaje = (propiedades) => {

    const onSubmitNuevoMensaje = (event) =>{
        event.preventDefault()
        const formulario =  event.target
        const mensaje_valor = formulario.texto.value
        
        const horaActual= new Date().toLocaleTimeString( [], {
            hour: '2-digit',
            minute:'2-digit'
        })
        
        propiedades.crearNuevoMensaje({
            contenido: mensaje_valor,
            hora: horaActual
        })


        formulario.reset()
    }

return (
    <div>
        <form onSubmit={onSubmitNuevoMensaje} className="chat_form">
            <label htmlFor="mensaje" className='label_form'><ICONOS.mas size={24}/><ICONOS.face size={24}/></label>
            <textarea className="chat_textarea" id="mensaje" name='texto' placeholder="Escribe un mensaje..."/>
            <button className="btn-send"><ICONOS.send/></button>
        </form>
    </div>
)
}

export default FormNuevoMensaje

