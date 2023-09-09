import React,{useState} from "react";
import ClassComp from "./Compo/ClassComp"
import './Style.css';


function DisplayData1(){
  
   const[count1,setcount1]=useState(false)
   console.log(count1)
 return(
   <>
 
  < button  className="btn2"onClick={()=>setcount1(!count1)}>To see Styling in Class Component</button>
   
    {count1?<ClassComp/>:""}

   </>
    
 )
}
export default DisplayData1