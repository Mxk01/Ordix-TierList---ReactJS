import React from 'react'
import Card from './Card';
import CategoryInput from './CategoryInput';
import Category from './Category';
import Board from './Board';


function TokyoRevengers() {
  // EASY SOLUTION MAKES SECTIONS FOR OTHER ROUTES E.G NANATSU NO TAIZAI,ETC   
  return (
        <div>
             <div className="section" /* draggable="true" */>
    <Category categoryName="Plus Ultra" className="category"/>
     <CategoryInput storageName={"sixteen"}  initialValue={"Toman"} /> 
      <Board
       id="board-1"
       className="board"

      >
       
          
          </Board>

          </div>
       

          <div className="section">
    <Category categoryName="Villain" className="category"/>
    
    <CategoryInput storageName={"seventeen"}  initialValue={"Draken Fans"} /> 
      <Board
       id="board-3"
       className="board"

      >

        
       
          </Board>

          </div>



          <div className="section">
    <Category categoryName="Your characters" className="category"/>
    <CategoryInput storageName={"eighteen"}  initialValue={"Takemitchy suck"} /> 
      <Board
       id="board-4"
       className="board"

      >

        {/* array of image links   ,use string templates to add id 
           map through card 
          */}
       
             <Card  
        id="card-1" 
        className="card"
        draggable="true"
        url={"https://r7s4k2g2.stackpathcdn.com/wp-content/uploads/2021/02/Tokyo-Revengers-Anime-Announces-More-Cast-Debut-Date-740x600.jpg"}>
         
         </Card>

         
         <Card  
        id="card-2" 
        className="card"
        draggable="true"
        url={"https://i.ytimg.com/vi/gZrvLnxgLVI/maxresdefault.jpg"}>
         
         </Card>

         <Card  
        id="card-3" 
        className="card"
        draggable="true"
        url={"https://i.ytimg.com/vi/FD9vTPINl6Y/maxresdefault.jpg"}>
         
         </Card>

         <Card  
        id="card-4" 
        className="card"
        draggable="true"
        url={"https://somoskudasai.com/wp-content/uploads/2021/04/03_02.jpg"}>
         
         </Card>
         
         
          </Board>

          </div>
        </div>
    )
}

export default TokyoRevengers
