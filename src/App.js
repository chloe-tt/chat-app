import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact 
      name = "David Lolilol"
      avatar ="https://randomuser.me/api/portraits/men/34.jpg"
      online
      status
      />
    <div className="App">
      <Contact 
      name = "Camile Mdr"
      avatar ="https://randomuser.me/api/portraits/women/34.jpg"
      />
     <Contact 
      name = "Marine Pozo"
      avatar ="https://randomuser.me/api/portraits/women/4.jpg"
      />
    </div>
  );
}

export default App;
