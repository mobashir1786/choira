import React from "react";
import Header from "./components/Header";
import './App.css'
import Footer from "./components/Footer";
import { useState } from "react";
import Middle from "./components/Middle";

function App() {
  const [user, setUser] = useState("comp1");
  console.log(user);
  return (
    <div className="App">
    <Header handleChange={setUser}/>
    <Middle user={user}/>
    <Footer/>
    </div>
  );
}

export default App;
