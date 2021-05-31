 import React from 'react'
 
 function Card({id,draggable,className,children,url}) {

    const dragStart = (e) =>{
        
        // Getting current card
        let draggedCard = e.target;
        // Getting card id;
        let id = draggedCard.id;

      
     
        // setting the id for the card to be retrieved in Board.js and searched via id on the DOM and appended to drop zone
      e.dataTransfer.setData('card_id',id);
      localStorage.setItem("card_id", id);
      console.log(localStorage.getItem('card_id'))


    }

    const cardDraggedOver = (e) => { e.stopPropagation()};
     return (
         <div 
         className="image__bg"
         style={{ 
           background: `url(${url})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
        }}
         onDragStart={dragStart}
         /* The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).*/
         id={id}
         draggable={draggable}
         onDragOver={cardDraggedOver}
         className={className}>
        {children}
        
         </div>
     )
 }
 
 export default Card
 