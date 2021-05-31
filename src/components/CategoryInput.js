import React,{useState,useEffect} from 'react'

function CategoryInput({storageName,initialValue}) {
    let [input,setInput] = useState(initialValue);
      useEffect(()=>{

        // getting item from localstorage 
      let item = localStorage.getItem(storageName);
        // changing input value to item  
      setInput(item);
      },[])



     let inputChange = (e) => {
    //  e.preventDefault() // prevent event from happening again
    let target = e.target.value;
    // changing input value to what we typed  
    setInput(target);
    // storing the name of the item that we want and content of it  (input value)
     localStorage.setItem(storageName,target);
   }


    return (
        <div>
            <input   value={input} onChange={ e => inputChange(e)} />
        </div>
    )
}

export default CategoryInput
