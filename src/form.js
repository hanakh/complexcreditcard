import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number1:'' ,
            number2:'', 
            number3:''        
    }   
}
handelchange1=(event)=>{
this.setState({number1:event.target.value.replace(/(.{4})/g,"$1 ")})
this.props.getnumber1(event.target.value)
}
handelchange2=(event)=>{
    this.setState({number2:event.target.value})
    this.props.getnumber2(event.target.value)
    }
 handelchange3=(event)=>{
    this.setState({number3:event.target.value})
    this.props.getnumber3(event.target.value)
        }
render()
{   return <div>
        <input type='text' maxLength="8" onChange={this.handelchange1}/>
        <br></br>
        <input type='text' maxLength="4" onChange={this.handelchange2} />
        <br></br>
        <input type='text' maxLength="4" onChange={this.handelchange3} />
    </div>}
}
export default Form;
