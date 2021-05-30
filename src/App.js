import { useState,useEffect } from 'react';
import './App.css';
import NavBar  from'./components/NavBar.js';
import MyHero from './components/MyHero';
import Jujutsu  from './components/Jujutsu';


function App() {
 
  return (
    <div className="App">
      
      <NavBar/>
      
    <main className="flexbox">
      
        <MyHero/>
       {/* <Jujutsu/> */}
      
    </main>
    </div>
  );
}

export default App;
