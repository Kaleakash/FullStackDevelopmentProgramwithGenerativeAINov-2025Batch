import { Component } from "react";

// inheritance 
class ClassStyleComponent extends Component{

    constructor(props){
        super(props);     // it use to call super class constructor. 
        this.state = {name:"Rahul"}  // state is object
    }
    //setState({name:"Rahul Kumar"});
    changeName  = ()=> {
        this.setState({name:"Rahul Kumar"})
    }

    // it is pre defined function which return jsx. 
    render() {
        
        return(
            <div>
                <p>This is Class Style Component</p>
                <p>Name from state is {this.state.name} and id is {this.props.id}
                    desgination is {this.props.desg}
                </p>
                <input type="button" value="Change Name JS" onclick="changeName()"/>
                <input type="button" value="Change Name React JS" onClick={this.changeName}/>
            </div>
        )
    }
}

export default ClassStyleComponent;