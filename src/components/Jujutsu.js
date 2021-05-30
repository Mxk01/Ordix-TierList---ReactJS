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
    <Category categoryName="Plus Ultra" className="category"/>
     <CategoryInput storageName={"first"}  initialValue={"Plus Ultra"} /> 
      <Board
       id="board-4"
       className="board"

      >
       
          
          </Board>

          </div>
       

          <div className="section">
    <Category categoryName="Villain" className="category"/>
    
    <CategoryInput storageName={"second"}  initialValue={"U.A."} /> 
      <Board
       id="board-5"
       className="board"

      >

        
       
          </Board>

          </div>



          <div className="section">
    <Category categoryName="Your characters" className="category"/>
    <CategoryInput storageName={"third"}  initialValue={"Villains"} /> 
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
        url={"https://v.dreamwidth.org/10422635/2521381"}>
         
         </Card>

         
         <Card  
        id="card-5" 
        className="card"
        draggable="true"
        url={"https://64.media.tumblr.com/834261a55a466c6a6005f37e4acf2823/tumblr_inline_plwyouR2Oc1uwearn_100.png"}>
         
         </Card>

         <Card  
        id="card-6" 
        className="card"
        draggable="true"
        url={"https://64.media.tumblr.com/0da7a283a1b96d57355fa46aa4ffda7a/tumblr_inline_p3avdx3qWN1u476tr_100.png"}>
         
         </Card>

         <Card  
        id="card-7" 
        className="card"
        draggable="true"
        url={"https://www.animationmagazine.net/wordpress/wp-content/uploads/My-Hero-Academia3-100x100.jpg"}>
         
         </Card>
         
         
          </Board>

          </div>
        </div>
    )
}

export default Jujutsu; 
