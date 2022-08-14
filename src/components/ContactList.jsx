import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import '../style/contact-list-style.css'
import Contact from './Contact'

export default function ContactList(props) {

    let deleteContactHandler = (id) =>{
        setSearch("");
        props.searchHandler(search);
        props.deleteContactHandler(id);
    }

    const [search, setSearch] = useState("");
    useEffect(() => {
        props.searchHandler(search);
    }, [search])

    return (
        <div id='contact-list'>
            <h1>Contact List</h1>
            <Link to="/add-contact"><button type='button'>Create contact</button></Link>
            <input type="text" placeholder='Search' autoFocus value={search} onChange={(e) => setSearch(e.target.value)}/>
            <img id='search' src="icons/search.svg" alt="loading" />
            {props.contacts.map((data)=>{
                return <Contact key={data.id} contact={data} deleteContactHandler={deleteContactHandler} getId={props.getId}/>
            })}
        </div>
    )
}