import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/chatWindow";
import { render } from "@testing-library/react";

function App() {
  return (
    <div>
      <Navbar />
      <ChatWindow />
    </div>
  );
}

export default App;
