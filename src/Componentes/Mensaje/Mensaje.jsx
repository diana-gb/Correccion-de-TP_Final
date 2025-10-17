import ICONOS from '../../Constantes/iconos'
import './Mensaje.css'
function Mensaje(propiedades){

    return(
            <div className={'message_container'+ (propiedades.author === 'Semilleria PG+' ? '-right' : '-left')}>
                <div className="message-content">
                    <h3 className="message-author">{propiedades.author}</h3>
                    <p className="message-text">{propiedades.content}</p>
                    <span className="message-hour">{propiedades.timestamp}</span>
                </div>
            </div>
            )
} 
export default Mensaje