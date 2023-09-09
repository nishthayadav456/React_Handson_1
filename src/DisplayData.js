import React,{useState} from "react";

import FuncCom from "./Compo/FuncCom"
import './Style.css';


function DisplayData(){
   const[count,setcount]=useState(false)
  
   console.log(count)
 return(
   <>
   <button  className="btn1"onClick={()=>setcount(!count)}>To see Styling in functional Component</button>
 
   {count? <FuncCom/>: ""}
   
  
   </>
    
 )
}
export default DisplayData