import React from 'react'
import Card from './Card';
import CategoryInput from './CategoryInput';
import Category from './Category';
import Board from './Board';


function MyHero() {
  // EASY SOLUTION MAKES SECTIONS FOR OTHER ROUTES E.G NANATSU NO TAIZAI,ETC   
  return (
        <div>
             <div className="section" /* draggable="true" */>
    <Category categoryName="Plus Ultra" className="category"/>
     <CategoryInput storageName={"first"}  initialValue={"Plus Ultra"} /> 
      <Board
       id="board-1"
       className="board"

      >
       
          
          </Board>

          </div>
       

          <div className="section">
    <Category categoryName="Villain" className="category"/>
    
    <CategoryInput storageName={"second"}  initialValue={"U.A."} /> 
      <Board
       id="board-3"
       className="board"

      >

        
       
          </Board>

          </div>



          <div className="section">
    <Category categoryName="Your characters" className="category"/>
    <CategoryInput storageName={"third"}  initialValue={"Villains"} /> 
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
        url={"https://v.dreamwidth.org/10422635/2521381"}>
         
         </Card>

         
         <Card  
        id="card-2" 
        className="card"
        draggable="true"
        url={"https://64.media.tumblr.com/834261a55a466c6a6005f37e4acf2823/tumblr_inline_plwyouR2Oc1uwearn_100.png"}>
         
         </Card>

         <Card  
        id="card-3" 
        className="card"
        draggable="true"
        url={"https://64.media.tumblr.com/0da7a283a1b96d57355fa46aa4ffda7a/tumblr_inline_p3avdx3qWN1u476tr_100.png"}>
         
         </Card>

         <Card  
        id="card-4" 
        className="card"
        draggable="true"
        url={"https://i1.sndcdn.com/avatars-aM6XKSqinJNZ6toA-1NkwsA-t500x500.jpg"}>
         
         </Card>
         
         <Card  
        id="card-5" 
        className="card"
        draggable="true"
        url={"https://img1.looper.com/img/gallery/my-hero-academia-the-reason-all-might-is-the-most-powerful-teacher/intro-1596067346.jpg"}>
         
         </Card>

         
         <Card  
        id="card-6" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/80/cd/f2/80cdf28df12981f9b5936cbde1784945.jpg"}>
         
         </Card>

         <Card  
        id="card-7" 
        className="card"
        draggable="true"
        url={"https://media.comicbook.com/2018/07/my-hero-academia-endeavor-1119853-1280x0.jpeg"}>
         
         </Card>

         <Card  
        id="card-8" 
        className="card"
        draggable="true"
        url={"https://www.animationmagazine.net/wordpress/wp-content/uploads/My-Hero-Academia3-100x100.jpg"}>
         
         </Card>
         
         <Card  
        id="card-9" 
        className="card"
        draggable="true"
        url={"https://i.pinimg.com/originals/10/00/4d/10004d5991084d54d51b2127693ad46b.jpg"}>
         
         </Card>

         
        
         
         
          </Board>

          </div>
        </div>
    )
}

export default MyHero
