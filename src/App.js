import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './style/App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {

  const KEY = process.env.REACT_APP_LOCAL_STORAGE_KEY;

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
                  <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/>
              } />
              <Route exact path="/contact-list" element={
                  <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/>
              } />
              <Route exact path="/add-contact" element={
                  <AddContact addContactHandler={addContactHandler}/>
              } />
          </Routes>
      </Router>
    </div>
  );
}

export default App;