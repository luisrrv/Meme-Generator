import React from "react";
import './App.css';
import Nav from './components/Nav';
import Meme from './components/Meme';
import Footer from './components/Footer';

function App(props) {
  const [darkMode, setDarkMode] = React.useState(true)
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }
  console.log(darkMode);
  return (
    <div className="App" id={darkMode ? "" : "light"}>
     <Nav darkMode={darkMode} toggleDarkMode ={toggleDarkMode} />
     <Meme darkMode={darkMode} toggleDarkMode ={toggleDarkMode} />
     <Footer darkMode={darkMode} toggleDarkMode ={toggleDarkMode} />
    </div>
  );
}

export default App;
