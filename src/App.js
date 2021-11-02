//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react' //imrs

function App() {
  const [mode, setmode] = useState({
    color:'black',
    background:'white'
  })
  const toggle=()=>{
    if(mode.color==='black'){
  console.log('if changed')
      setmode({
        color:'white',
        background:'black',
      })
      document.body.style.background='black'
    }
    else{
  console.log('else changed')
      setmode({
        color:'black',
        background:'white'
      })
      document.body.style.background='white'
    }
  }
  return (
    <>
    <Navbar mode={mode} toggle={toggle}/>
    <TextArea content="Type something" mode={mode}/>
    <About />
    </>
  );
}

export default App;
