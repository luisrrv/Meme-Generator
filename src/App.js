import React from "react";
import './App.css';
import Nav from './components/Nav';
import Meme from './components/Meme';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
     <Meme />
     <Footer />
    </div>
  );
}

export default App;
