//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('red')//weather dark mode is enabled or not
  return (
    <>
    <Navbar mode={mode}/>
    <TextArea content="Type something"/>
    <About />
    </>
  );
}

export default App;
