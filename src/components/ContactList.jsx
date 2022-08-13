import React from 'react'

import '../style/contact-list-style.css'
import Contact from './Contact'

export default function ContactList(props) {
    return (
        <div id='contact-list'>
            <h1>Contact List</h1>
            {props.contacts.map((data, idx)=>{
                return <Contact key={idx} id={idx} contact={data} deleteContactHandler={props.deleteContactHandler}/>
            })}
        </div>
    )
}