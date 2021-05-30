import React,{useState,useEffect} from 'react'

function CategoryInput({storageName,initialValue}) {
    let [input,setInput] = useState(initialValue);
    console.log(storageName,initialValue)
      useEffect(()=>{
      let item = localStorage.getItem(storageName);
      setInput(item);
      },[])



     let inputChange = (e) => {
    //  e.preventDefault() // prevent event from happening again
    let target = e.target.value;
      setInput(target);
     localStorage.setItem(storageName,target);
   }


    return (
        <div>
            <input   value={input} onChange={ e => inputChange(e)} />
        </div>
    )
}

export default CategoryInput
