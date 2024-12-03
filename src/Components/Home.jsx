import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
const Home = () => {
   const[name,setName]=useState('')
   const[list,setList]=useState([])
   const handleSubmit=()=>{
  
     setList((list)=>{
      if(!name.trim()){
        alert( 'add list')
      }

      const update=[...list,name.trim()]
      setName(' ')
    
        return update
    

  })

   }
const handleDelete=(i)=>{
  const updatelist= list.filter((elm,id)=>{  
    return i!=id;
    
})
setList(updatelist)
  
  

 
}

  return (
    <>

   
      <div className="box">
        <h1>ToDo-app</h1>

        <div className="search">
            <div className="fun">

            <input  className='inp' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>Add</button>
            </div>
           
        </div>
        <div className="dis">
           
            
             {list!=[] && list.map((item,i)=>{  return <>
            
            <div className="content">
            
            <p key={i} className='list'>{item}</p>
            <MdDelete onClick={()=>handleDelete(i)}/>
          
            </div>



           

               </>
         
        } )}
              
            
        </div>
      </div>
    </>
  )
}

export default Home
