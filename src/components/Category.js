import React,{useState,useEffect} from 'react'

function Category({categoryName}) {
    let bgColor; 
    let [input,setInput] = useState(categoryName);
   

    useEffect(()=>{
        // REMEMBER! ! ! shows error useState can't be called inside a callback,can be called inside react
        // functional component
        
        let categoryArr = [];
        categoryArr.push(input);
        console.log(categoryArr)
     
        let result = localStorage.getItem('category');
         
         setInput(result)
        // setInput(input)
        /*
         
         setTimeout( () => {  
         document.removeEventListener('change',setInput(categoryName));
         },400);
        */   
    })
     
    let changeInput = (e) => {
   
        e.preventDefault() // prevent event from happening again
        let target = e.target.value;
        let categoryArr = []; 

        // categoryArr.push(target);
        // console.log(categoryArr);
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
            {/* <input value={ input } onChange={(e)=>{ changeInput(e)}}/> */}
         </div>
    )
}

export default Category
