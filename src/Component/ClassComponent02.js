import React,{Component} from 'react';
class ClassComponent extends Component{
    render(){
        return (
            <div>
            <h1>This is a class Component</h1>
            <h2>this is argument : village name {this.props.vill}</h2>
            <input type="text" id="textbox"></input>
            <p></p>
            </div>
        )
    }
}
console.log(this);
export default ClassComponent;