import './style/App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {

  let contacts = [
    {
      name: "Sudeep Srivastava",
      email: "sudeepsri23@gmail.com",
      phone: "8004171499",
      work: "student"
    },
    {
      name: "Aryan Singh",
      email: "aryanc403@gmail.com",
      phone: "8983904934",
      work: "friend"
    }
  ];

  return (
    <div id='container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;