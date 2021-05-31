import React from 'react'
import Card from './Card';
import CategoryInput from './CategoryInput';
import Category from './Category';
import Board from './Board';


function Bleach() {
  // EASY SOLUTION MAKES SECTIONS FOR OTHER ROUTES E.G NANATSU NO TAIZAI,ETC   
  return (
        <div>
             <div className="section" /* draggable="true" */>
    <Category categoryName="Plus Ultra" className="category"/>
     <CategoryInput storageName={"ten"}  initialValue={"Shinigami"} /> 
      <Board
       id="board-1"
       className="board"

      >
       
          
          </Board>

          </div>
       

          <div className="section">
    <Category categoryName="Villain" className="category"/>
    
    <CategoryInput storageName={"eleven"}  initialValue={"Arrancars"} /> 
      <Board
       id="board-3"
       className="board"

      >

        
       
          </Board>

          </div>



          <div className="section">
    <Category categoryName="Your characters" className="category"/>
    <CategoryInput storageName={"twelve"}  initialValue={"Quincies"} /> 
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
        url={"https://i1.sndcdn.com/artworks-000487963443-pwxkc5-t500x500.jpg"}>
         
         </Card>

         
         <Card  
        id="card-2" 
        className="card"
        draggable="true"
        url={"https://i.ytimg.com/vi/jBnqNrUDZGg/mqdefault.jpg"}>
         
         </Card>

         <Card  
        id="card-3" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/06/49/bc/0649bcc94cd9b82de3cd1df9b7b5130b.jpg"}>
         
         </Card>

         <Card  
        id="card-4" 
        className="card"
        draggable="true"
        url={"https://d.wattpad.com/story_parts/218095957/images/1430fc2a67f64a81.jpg"}>
         
         </Card>
         
         <Card  
        id="card-5" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/10/9b/15/109b15239f389292ad0031c5f63cb859.jpg"}>
         
         </Card>

         
         <Card  
        id="card-6" 
        className="card"
        draggable="true"
        url={"https://i.quotev.com/img/q/u/14/7/8/Pu_i.jpg"}>
         
         </Card>

         <Card  
        id="card-7" 
        className="card"
        draggable="true"
        url={"https://www.giantbomb.com/a/uploads/scale_medium/0/5756/221267-shunsuikyoraku.jpg"}>
         
         </Card>

         <Card  
        id="card-8" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/04/95/88/0495888861b36cee0d08529e0a82f836.jpg"}>
         
         </Card>
         
         
          </Board>

          </div>
        </div>
    )
}

export default Bleach
