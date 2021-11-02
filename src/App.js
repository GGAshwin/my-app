//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  const [darkMode, setdarkMode] = useState('light')//weather dark mode is enabled or not
  return (
    <>
    <Navbar mode={darkMode}/>
    <TextArea content="Type something"/>
    <About />
    </>
  );
}

export default App;
