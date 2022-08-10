import { useState, useEffect } from 'react'

import './style/App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import UpdateContact from "./components/UpdateContact";

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  let addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts)
    setContacts(storedContacts);
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div id='container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;