import { useState,useEffect } from 'react';
import './App.css';
import NavBar  from'./components/NavBar.js';
import MyHero from './components/MyHero';
import Jujutsu  from './components/Jujutsu';
import Naruto  from './components/Naruto';
import Bleach  from './components/Bleach';
import OnePiece  from './components/OnePiece';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TokyoRevengers from './components/TokyoRevengers';

function App() {
 
  return (
    <Router> 
    <div className="App">
      
      <NavBar/>
    

    <main className="flexbox">
    <Switch>
          <Route path="/">
          <div id="credits">Website icon made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from  <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
          </Route>
          <Route path="/my-hero-academia">
          <MyHero/>
          </Route>
          
          <Route path="/JK">
            <Jujutsu />
          </Route>

          <Route path="/naruto">
            <Naruto />
          </Route>

          
          <Route path="/bleach">
            <Bleach />
          </Route>
        
          <Route path="/one-piece">
            <OnePiece />
          </Route>


          <Route path="/tokyo-revengers">
            <TokyoRevengers />
          </Route>
         </Switch>
        
       {/* <Jujutsu/> */}
      
    </main>
    </div>
    </Router>
  );
}

export default App;
