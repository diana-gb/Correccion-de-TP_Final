import React from "react"
import './WhatsAppSpinner.css'

function WhatsAppSpinner({ size = 36, dotColor = "#25D366" }) {
    return (
        <div
        className="wa-spinner"
        style={{ "--dot-color": dotColor, "--size": `${size}px` }}
        >
        <div className="wa-bubble">
            <span className="wa-dot"></span>
            <span className="wa-dot"></span>
            <span className="wa-dot"></span>
        </div>
        </div>
    );
}

export default WhatsAppSpinner