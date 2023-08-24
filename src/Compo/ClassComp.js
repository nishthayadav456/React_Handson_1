
import React,{Component} from "react"
class ClassComp extends Component{
    render(){
        return(
            <div className='box2'>
                <h2 className="fun">This is created using Class Component</h2>
                <p className='ss'>This is done using external css</p>
                <p style={{color:"blue"}}>This is done using inline css</p>
            </div>
        )
    }
}
export default ClassComp