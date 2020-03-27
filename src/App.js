import React from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <Contact
        name="David Lol"
        avatar="https://randomuser.me/api/portraits/men/3.jpg"
        online
        status
      />
      <Contact
        name="Camille Lolilol"
        avatar="https://randomuser.me/api/portraits/women/34.jpg"
      />
      <Contact
        name="Eliot Mdr"
        avatar="https://randomuser.me/api/portraits/men/38.jpg"
        online
        status
      />
      <ContactList />
    </div>
  );
}

export default App;
