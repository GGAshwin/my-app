//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
    <Navbar />
    <TextArea content="Type something"/>
    <About />
    </>
  );
}

export default App;
