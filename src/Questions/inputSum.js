
import React,{Component} from "react";
class XYZ extends Component{
    constructor(){
        super();
        this.state = {
            val1 : "",
            val2:"",
            sum:""
        }
    }
    changeState1 = (e)=>{
        this.setState({val1:e.target.value})
        
    }
    changeState2 = (e)=>{
        this.setState({val2:e.target.value})
        
    }
    sum =()=>{
        this.setState({sum:parseInt(this.state.val1) + parseInt(this.state.val2)})
    }
    render(){
        return  (
            <div>
                <input type="text"  value={this.state.val1}  onChange={this.changeState1} />
                <input type="text"  value={this.state.val2} onChange={this.changeState2} />
                <button onClick={this.sum}>Click Me</button>
                <h1>{this.state.sum}</h1>
                
          </div>
        )
    }
}

export default XYZ;