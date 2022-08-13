import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './style/App.css';
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import UpdateContact from "./components/UpdateContact";

function App() {

  const KEY = process.env.REACT_APP_LOCAL_STORAGE_KEY;

  const [id, setId] = useState(null);
  let getId = (id) => setId(id);

  const [contacts, setContacts] = useState([]);
  let addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }
  let deleteContactHandler = (id) =>
  {
    const newContacts = contacts.filter((data, idx) => {
      return idx !== id;
    })
    setContacts(newContacts);
  }
  let updateContactHandler = (contact) => {
    const newContacts = contacts.map((data, idx) => {
      if (idx !== id)
      return data;
      else
      return contact;
    })
    setContacts(newContacts);
  }

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(KEY));
    if (storedContacts)
    setContacts(storedContacts);
  }, [])
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div id='container'>
      <Header />
      <Router>
          <Routes>
              <Route path="/" element={
                  <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler} getId={getId}/>
              } />
              <Route exact path="/contact-list" element={
                  <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler} getId={getId}/>
              } />
              <Route exact path="/add-contact" element={
                  <AddContact addContactHandler={addContactHandler}/>
              } />
              <Route exact path="/update-contact" element={
                  <UpdateContact contact={contacts[id]} updateContactHandler={updateContactHandler}/>
              } />
          </Routes>
      </Router>
    </div>
  );
}

export default App;