import React,{Component} from 'react';
import './App.css';
import Form from './form'; 
import { Icon } from "antd";


const renderCardNumber = number => {
  number = number.toString()
  let resultStr = ''
  for(let i =0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + ' '
  }
  return resultStr.trim()
}

const valid = number => {
  number = number.toString()
  return number.slice(0, 2) + '/' + number.slice(2)
}


const Cart =({cardnumber1,cardnumber2,cardnumber3}) => {
return (
    <div class="carte">
     <h1 class="phrase">CREDIT CARD</h1>
     <div class="pus1">
     <img src="https://static4.depositphotos.com/1003857/292/i/950/depositphotos_2922078-stock-photo-creditcard-chip.jpg?fbclid=IwAR2DVqImIylDmxP0yLAJO1AtVSLTc8fencxIzUtycvgBfPU9ImIAZQFnVEY" width="70" height="50"></img></div>
<div class="part">
     <div class="chiffres">
     <h1 class="chiff1">{renderCardNumber(cardnumber1)}</h1>
     <h2 class="chiff">{cardnumber2}</h2>
     <h2 class="chiff">Cardholder</h2>
     </div>
     <div class="part2">
     <div class="date">     
     <h6>VALID<br/>THRU</h6>
     <div class="icone">
     <Icon type="caret-right" /></div>
     </div>
     <div class="month">    
     <h6>MONTH/YEAR<br/><span>{valid(cardnumber3)}</span></h6><br/>
     </div></div>
     <div class="pus">
    <img src="https://www.elektrischvaren-accu.nl/Files/6/88000/88645/FileBrowser/betalingslogo/credit-card-logo.jpg"width="90" height="100"></img>
     </div>
     </div>
   </div>
   
    
);

}
export default Cart;