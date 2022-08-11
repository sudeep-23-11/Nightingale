import React, { useState } from 'react'

import '../style/update-contact-style.css'

export default function UpdateContact(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [work, setWork] = useState("");

    let submitHandler = () => {
        if (name === "" || email === "" || phone === "" || work === "")
        {
            alert("Please fill every field");
            return;
        }
        props.updateContactHandler({
            name: name, email: email, phone: phone, work: work
        });
        setName("");
        setEmail("");
        setPhone("");
        setWork("");
    }

    return (
        <div id='update-contact'>
            <h1>Update Contact</h1>
            <label htmlFor="name"><h2>Name</h2></label><br />
            <input type="text" name='name' placeholder='Enter name' autoFocus value={name} onChange={(e) => setName(e.target.value)}/><br />
            <label htmlFor="email"><h2>Email</h2></label><br />
            <input type="email" name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/><br />
            <label htmlFor="phone"><h2>Phone number</h2></label><br />
            <input type="tel" name='phone' placeholder='Enter phone number' maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)}/><br />
            <label htmlFor="work"><h2>Work info</h2></label><br />
            <input type="text" name='work' placeholder='Enter work info' value={work} onChange={(e) => setWork(e.target.value)}/><br />
            <button type="submit" onClick={submitHandler}>Update</button>
        </div>
    )
}