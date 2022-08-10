import React, { useState } from 'react'

import '../style/add-contact-style.css'

export default function AddContact(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [work, setWork] = useState("");

    let submitHandler = () => {
        props.addContactHandler({
            name: name, email: email, phone: phone, work: work
        });
        setName("");
        setEmail("");
        setPhone("");
        setWork("");
    }

    return (
        <div id='add-contact'>
            <h1>Add Contact</h1>
            <label htmlFor="name"><h2>Name</h2></label><br />
            <input type="text" name='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} autoFocus/><br />
            <label htmlFor="email"><h2>Email</h2></label><br />
            <input type="email" name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/><br />
            <label htmlFor="phone"><h2>Phone number</h2></label><br />
            <input type="tel" name='phone' placeholder='Enter phone number' value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={10}/><br />
            <label htmlFor="work"><h2>Work info</h2></label><br />
            <input type="text" name='work' placeholder='Enter work info' value={work} onChange={(e) => setWork(e.target.value)}/><br />
            <button type="submit" onClick={submitHandler}>Add</button>
        </div>
    )
}