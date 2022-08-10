import React from 'react'

import '../style/add-contact-style.css'

export default function AddContact() {
    return (
        <div id='add-contact'>
            <h1>Add Contact</h1>
            <label htmlFor="name"><h2>Name</h2></label><br />
            <input type="text" name='name' placeholder='Enter name' autoFocus/><br />
            <label htmlFor="email"><h2>Email</h2></label><br />
            <input type="email" name='email' placeholder='Enter email'/><br />
            <label htmlFor="phone"><h2>Phone number</h2></label><br />
            <input type="tel" name='phone' placeholder='Enter phone number' maxLength={10}/><br />
            <label htmlFor="work"><h2>Work info</h2></label><br />
            <input type="text" name='work' placeholder='Enter work info'/><br />
            <button type="submit">Add</button>
        </div>
    )
}