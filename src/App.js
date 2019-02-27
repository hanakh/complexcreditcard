import React, { Component } from 'react';
import Cart from './cart'; 
import Form from './form'; 
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={ 
    
      cardnumber1:'******** ',
      cardnumber2:'********',
      cardnumber3:'****'
     }
  }
getnumber1=(parm)=>{
  this.setState({cardnumber1:parm })
}
getnumber2=(parm)=>{
  this.setState({cardnumber2:parm})
}
getnumber3=(parm)=>{
  this.setState({cardnumber3:parm})
}
  render() {
    return (
      <div className="App">      
     <Cart cardnumber1={this.state.cardnumber1} 
       cardnumber2={this.state.cardnumber2}
        cardnumber3={this.state.cardnumber3 } />
     <Form getnumber1={this.getnumber1} 
         getnumber2={this.getnumber2}
         getnumber3={this.getnumber3} />
     </div> );
  }
}
export default App;
