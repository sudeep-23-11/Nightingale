import React from 'react'

import '../style/contact-style.css'

export default function Contact(props) {
    return (
        <div id='contact'>
            <img src="icons/delete.svg" alt="loading" />
            <img src="icons/edit.svg" alt="loading" />
            <h2>{props.contact.name}</h2>
            <h5>{props.contact.email}</h5>
            <h5>{props.contact.phone}</h5>
            <h5>{props.contact.work}</h5>
        </div>
    )
}