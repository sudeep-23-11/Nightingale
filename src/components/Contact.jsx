import React from 'react'

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
            <img id='edit' src="icons/edit.svg" alt="loading" />
            <img id='delete' src="icons/delete.svg" alt="loading" />
        </div>
    )
}