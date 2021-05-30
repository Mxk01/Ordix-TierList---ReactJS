 import React from 'react'
 
 function Board({id,className,children}) {

     const cardDropped = (e) =>{
        e.preventDefault();

         let id = e.dataTransfer.getData('card_id');
         let droppedCard = document.getElementById(id);
         let dropZone = e.target;
         dropZone.appendChild(droppedCard);
        //  dropZone.appendChild(droppedCard);
     }


     let dragOver = e => {
        e.preventDefault();
    }
     return (
         <div
         style={{marginLeft:'0px'}}
         id={id}
         className={className}
         onDrop={cardDropped}
         onDragOver={dragOver}

         >
             {children}
         </div>
     )
 }
 
 export default Board
 