import React from 'react'
import Card from './Card';
import CategoryInput from './CategoryInput';
import Category from './Category';
import Board from './Board';


function Jujutsu() {
  // EASY SOLUTION MAKES SECTIONS FOR OTHER ROUTES E.G NANATSU NO TAIZAI,ETC   
  return (
        <div>
             <div className="section" /* draggable="true" */>
    <Category categoryName="Gojo level" className="category"/>
     <CategoryInput storageName={"fourth"}  initialValue={"Gojo Level"} /> 
      <Board
       id="board-4"
       className="board"

      >
       
          
          </Board>

          </div>
       

          <div className="section">
    <Category categoryName="Sukuna Fingers" className="category"/>
    
    <CategoryInput storageName={"fifth"}  initialValue={"Sukuna Fingers"} /> 
      <Board
       id="board-5"
       className="board"

      >

        
       
          </Board>

          </div>



          <div className="section">
    <Category categoryName="Your characters" className="category"/>
    <CategoryInput storageName={"sixth"}  initialValue={"Sorcerers"} /> 
      <Board
       id="board-6"
       className="board"

      >

        {/* array of image links   ,use string templates to add id 
           map through card 
          */}
       
             <Card  
        id="card-4" 
        className="card"
        draggable="true"
        url={"https://1.bp.blogspot.com/-0cisGaNLncM/YDfjnAEws8I/AAAAAAAAAQE/X_8Rl1QQTdg9kq2dJBCjCPpL6OcGCSRDQCLcBGAsYHQ/s1280/Black%2BFlash%2B%255B00h15m14s%255D.png"}>
         
         </Card>

         
         <Card  
        id="card-5" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/1d/53/e9/1d53e9819aa7793904dd5c3f14b05e12.gif"}>
         
         </Card>

         <Card  
        id="card-6" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/97/2b/d4/972bd4090f293e83e3ca9900b1efc2c9.jpg"}>
         
         </Card>

         <Card  
        id="card-7" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/5c/37/68/5c3768388305bf480f93b7511027ac3b.jpg"}>
         
         </Card>

         <Card  
        id="card-8" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/474x/3f/71/59/3f7159db35d2989e231b161adf5635b9.jpg"}>
         
         </Card>

         <Card  
        id="card-9" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/9b/9b/72/9b9b72550f979e976f17da44ebde25bf.jpg"}>
         
         </Card>
         
         
          </Board>

          </div>
        </div>
    )
}

export default Jujutsu; 
