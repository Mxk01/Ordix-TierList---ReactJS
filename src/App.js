import { useState,useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'

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
  let location = useLocation(); 
  let history = useHistory(); 
  useEffect(()=>{

    let {pathname} = location; 
    history.push(pathname);

  },[]);
 
  return (
     <div className="App">
      
      <NavBar/>
    

    <main className="flexbox">
    <Switch>
        
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
   );
}

export default App;
