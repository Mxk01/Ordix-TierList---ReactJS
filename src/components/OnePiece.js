import React from 'react'
import Card from './Card';
import CategoryInput from './CategoryInput';
import Category from './Category';
import Board from './Board';


function OnePiece() {
  // EASY SOLUTION MAKES SECTIONS FOR OTHER ROUTES E.G NANATSU NO TAIZAI,ETC   
  return (
        <div>
             <div className="section" /* draggable="true" */>
    <Category categoryName="Plus Ultra" className="category"/>
     <CategoryInput storageName={"thirteen"}  initialValue={"Strawhats"} /> 
      <Board
       id="board-1"
       className="board"

      >
       
          
          </Board>

          </div>
       

          <div className="section">
    <Category categoryName="Villain" className="category"/>
    
    <CategoryInput storageName={"fourteen"}  initialValue={"Shichibukai"} /> 
      <Board
       id="board-3"
       className="board"

      >

        
       
          </Board>

          </div>



          <div className="section">
    <Category categoryName="Your characters" className="category"/>
    <CategoryInput storageName={"fifteen"}  initialValue={"Gorosei"} /> 
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
        url={"https://wallpaperaccess.com/full/4726498.png"}>
         
         </Card>

         
         <Card  
        id="card-2" 
        className="card"
        draggable="true"
        url={"https://avatarfiles.alphacoders.com/856/85667.jpg"}>
         
         </Card>

         <Card  
        id="card-3" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/f5/c7/e7/f5c7e750a5f09d7caa46ba4e5a86af86.jpg"}>
         
         </Card>

         <Card  
        id="card-4" 
        className="card"
        draggable="true"
        url={"https://media.comicbook.com/2018/10/sanji-one-piece-1139192-1280x0.jpeg"}>
         
         </Card>

         <Card  
        id="card-5" 
        className="card"
        draggable="true"
        url={"https://comicvine.gamespot.com/a/uploads/scale_medium/11117/111178336/5858927-one.piece.full.1358183.jpg"}>
         
         </Card>

         
         <Card  
        id="card-6" 
        className="card"
        draggable="true"
        url={"https://media.comicbook.com/2019/06/3uvmt2n-1173747-1280x0.jpeg"}>
         
         </Card>

         <Card  
        id="card-7" 
        className="card"
        draggable="true"
        url={"https://pbs.twimg.com/media/EfkfF70WsAMWCNG.jpg"}>
         
         </Card>

         <Card  
        id="card-8" 
        className="card"
        draggable="true"
        url={"https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg"}>
         
         </Card>
         
         
          </Board>

          </div>
        </div>
    )
}

export default OnePiece
