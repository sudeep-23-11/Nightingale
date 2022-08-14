import React from 'react'
import { Link } from "react-router-dom";

import '../style/contact-style.css'

export default function Contact(props) {
    return (
        <div id='contact'>
            <img id='user' src="icons/user.svg" alt="loading" />
            <div>
                <h2>{props.contact.name}</h2>
                <h4>{props.contact.email}</h4>
                <h4>{props.contact.phone}</h4>
                <h4>{props.contact.work}</h4>
            </div>
            <Link id='update' to="/update-contact"><img src="icons/update.svg" alt="loading" onClick={() => props.getId(props.contact.id)}/></Link>
            <img id='delete' src="icons/delete.svg" alt="loading" onClick={() => props.deleteContactHandler(props.contact.id)}/>
        </div>
    )
}