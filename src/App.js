import { useState } from 'react'

import './style/App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {

  const [contacts, setContacts] = useState([]);
  let addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  return (
    <div id='container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;