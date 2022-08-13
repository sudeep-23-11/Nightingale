import { useState, useEffect } from 'react'

import './style/App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import UpdateContact from "./components/UpdateContact";

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
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/>
    </div>
  );
}

export default App;