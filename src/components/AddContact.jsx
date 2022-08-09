import React from 'react'

export default function AddContact() {
    return (
        <div>
            <label htmlFor="name">Name</label><br />
            <input type="text" name='name' placeholder='Enter name' autoFocus/><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" name='email' placeholder='Enter email'/><br />
            <label htmlFor="phone">Phone number</label><br />
            <input type="tel" name='phone' placeholder='Enter phone number' maxLength={10}/><br />
            <label htmlFor="work">Work info</label><br />
            <input type="text" name='work' placeholder='Enter work info'/><br />
            <button type="submit">Add</button>
        </div>
    )
}