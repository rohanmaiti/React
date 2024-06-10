import React,{Component} from "react";

class ClassComp extends Component{

    constructor(){
        super();
        this.state = {
            name:""
        }  
    }

    changeState = (e)=>{
        this.setState({
            name:e.target.value
        })
    }

    render(){
        
        return(
            <div>
                console.log(this.state);
                <input type="text" value={this.state.name} onChange={this.changeState}/>
                <h1>{this.state.name}</h1>
            </div>
            

        )
    }
}
export default ClassComp;