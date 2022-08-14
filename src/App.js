import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from 'uuid';

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
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }
  let deleteContactHandler = (id) =>
  {
    const newContacts = contacts.filter((data) => {
      return data.id !== id;
    })
    setContacts(newContacts);
  }
  let updateContactHandler = (contact) => {
    const newContacts = contacts.map((data) => {
      if (data.id !== id)
      return data;
      else
      return {id: id, ...contact};
    })
    setContacts(newContacts);
  }

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  let searchHandler = (search) => {
    setSearch(search);
    if (search.length)
    {
      const newResults = contacts.filter((data) => {
        return Object.values(data).join(" ").toLowerCase().includes(search.toLowerCase());
      })
      setResults(newResults);
    }
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
                  <ContactList contacts={search.length ? results : contacts} deleteContactHandler={deleteContactHandler} getId={getId} searchHandler={searchHandler}/>
              } />
              <Route exact path="/contact-list" element={
                  <ContactList contacts={search.length ? results : contacts} deleteContactHandler={deleteContactHandler} getId={getId} searchHandler={searchHandler}/>
              } />
              <Route exact path="/add-contact" element={
                  <AddContact addContactHandler={addContactHandler}/>
              } />
              <Route exact path="/update-contact" element={
                  <UpdateContact contact={contacts.filter((data) => {return data.id === id})[0]} updateContactHandler={updateContactHandler}/>
              } />
          </Routes>
      </Router>
    </div>
  );
}

export default App;