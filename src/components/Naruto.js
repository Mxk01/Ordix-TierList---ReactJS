import React from 'react'
import Card from './Card';
import CategoryInput from './CategoryInput';
import Category from './Category';
import Board from './Board';


function Naruto() {
  // EASY SOLUTION MAKES SECTIONS FOR OTHER ROUTES E.G NANATSU NO TAIZAI,ETC   
  return (
        <div>
             <div className="section" /* draggable="true" */>
    <Category categoryName="Plus Ultra" className="category"/>
     <CategoryInput storageName={"seventh"}  initialValue={"Academy"} /> 
      <Board
       id="board-1"
       className="board"

      >
       
          
          </Board>

          </div>
       

          <div className="section">
    <Category categoryName="Villain" className="category"/>
    
    <CategoryInput storageName={"eighth"}  initialValue={"Hokage"} /> 
      <Board
       id="board-3"
       className="board"

      >

        
       
          </Board>

          </div>



          <div className="section">
    <Category categoryName="Your characters" className="category"/>
    <CategoryInput storageName={"ninth"}  initialValue={"Jounins"} /> 
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
        url={"https://i.pinimg.com/originals/aa/db/0f/aadb0f5e8c7e3359ab7587ef471c06c0.gif"}>
         
         </Card>

         
         <Card  
        id="card-2" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/474x/07/c8/7e/07c87e40d619dd6e8985d6e5e3864818.jpg"}>
         
         </Card>

         <Card  
        id="card-3" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/4a/02/ae/4a02aeae96971b6528811c08f91c42ce.jpg"}>
         
         </Card>

         <Card  
        id="card-4" 
        className="card"
        draggable="true"
        url={"https://i.ytimg.com/vi/tMkURmaHKgs/maxresdefault.jpg"}>
         
         </Card>
         
         
          </Board>

          </div>
        </div>
    )
}

export default Naruto
