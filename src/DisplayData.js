import React,{useState} from "react";
import ClassComp from "./Compo/ClassComp"
import FuncCom from "./Compo/FuncCom"
import './Style.css';


function DisplayData(){
   const[count,setcount]=useState(false)
   const[count1,setcount1]=useState(false)
   console.log(count)
 return(
   <>
   <button  className="btn1"onClick={()=>setcount(!count)}>To see Styling in functional Component</button>
   <button  className="btn2"onClick={()=>setcount1(!count1)}>To see Styling in Class Component</button>
   {count? <FuncCom/>: ""}
    {count1?<ClassComp/>:""}
<div className="App">
       
    </div>
   </>
    
 )
}
export default DisplayData