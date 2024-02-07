import React from "react";
import Chat from "./Components/Homepage/Chat";
import Social from "./Components/Homepage/Social";

import Form from "./Components/Homepage/Form";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <>
      <Homepage />
      <Chat />
      <Social />
      <Form />
    </>
  );
}

export default App;
