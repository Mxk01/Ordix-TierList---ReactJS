import React,{useState,useEffect} from 'react'

function Category({categoryName}) {
    let bgColor; 
    let [input,setInput] = useState(categoryName);
   

    useEffect(()=>{
        // REMEMBER! ! ! shows error useState can't be called inside a callback,can be called inside react
        // functional component
        
      
        // display updated values from localstorage so each time user access websites he will see the changes 
        let result = localStorage.getItem('category');
         // set the input to updated value from storage
         setInput(result)
      
    })
     
    let changeInput = (e) => {
   
        e.preventDefault() // prevent event from happening again
        let target = e.target.value;
 
  
        localStorage.setItem('category', target);
        setInput(target);
        
    }

    {/* Managing category colors */}
    switch(categoryName)
    {
       case 'Your characters': 
       bgColor = '#e74c3c';
       break;

       case 'Plus Ultra': 
       bgColor = '#fbc531';
       break;

       default:
        bgColor = '#78e08f' 
        break;
    }
    
    
    return (
        <div className="category"

        style={{
            backgroundColor:`${bgColor}`,
            color:'white',
            padding:'1rem'
            }}>
         </div>
    )
}

export default Category
