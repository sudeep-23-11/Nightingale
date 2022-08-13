import React from 'react'

import '../style/contact-style.css'

export default function Contact(props) {

    let submitHandler2 = (id) => {
        props.deleteContactHandler(id);
    }

    return (
        <div id='contact'>
            <img src="icons/user.svg" alt="loading" />
            <div>
                <h2>{props.contact.name}</h2>
                <h4>{props.contact.email}</h4>
                <h4>{props.contact.phone}</h4>
                <h4>{props.contact.work}</h4>
            </div>
            <button type='button'><img src="icons/edit.svg" alt="loading"/></button>
            <button type='button'><img src="icons/delete.svg" alt="loading" onClick={() => submitHandler2(props.id)}/></button>
        </div>
    )
}