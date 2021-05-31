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
    <CategoryInput storageName={"ninth"}  initialValue={"Default"} /> 
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
         
         <Card  
        id="card-5" 
        className="card"
        draggable="true"
        url={"https://www.nawpic.com/media/2020/itachi-nawpic-2.jpg"}>
         
         </Card>

         
         <Card  
        id="card-6" 
        className="card"
        draggable="true"
        url={"https://i.ytimg.com/vi/GV2wzNQ0JnQ/maxresdefault.jpg"}>
         
         </Card>

         <Card  
        id="card-7" 
        className="card"
        draggable="true"
        url={"https://i.ytimg.com/vi/esJOOQG42r0/maxresdefault.jpg"}>
         
         </Card>

         <Card  
        id="card-8" 
        className="card"
        draggable="true"
        url={"https://pm1.narvii.com/6515/5fdf64ac3d3cb8e4a52859b31a360d397a2df33b_hq.jpg"}>
         
         </Card>
         
         <Card  
        id="card-9" 
        className="card"
        draggable="true"
        url={"https://pbs.twimg.com/profile_images/3289666294/889432ee3df0a75228b6a46bea73ff99.jpeg"}>
         
         </Card>

         
         <Card  
        id="card-10" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/ae/51/78/ae51783bf29b4a42e5b5e1c33f7090d2.jpg"}>
         
         </Card>

         <Card  
        id="card-11" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/474x/a8/1c/5f/a81c5fc3f6c2a1c43733f5bd4d5bffd7.jpg"}>
         
         </Card>

         <Card  
        id="card-12" 
        className="card"
        draggable="true"
        url={"https://pbs.twimg.com/profile_images/631203976835407872/QCDoW3w6.jpg"}>
         
         </Card>
         
         
          </Board>

          </div>
        </div>
    )
}

export default Naruto
