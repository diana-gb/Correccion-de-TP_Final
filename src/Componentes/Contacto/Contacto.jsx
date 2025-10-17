

function Contacto (propiedades){

    return(
        <div className="contact-container">
            <div className='contact-content'> 
            <img src={propiedades.img} alt={propiedades.author}/>
            <span className="contact-name">{propiedades.author}</span>
            <span className="contact-hour">{propiedades.timestamp}</span>
            </div> 
        </div>
    )
}

export default Contacto