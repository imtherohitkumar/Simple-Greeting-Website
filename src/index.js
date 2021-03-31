import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
let currDate = new Date();
currDate = currDate.getHours();
let greeting = ''
let cssStyle ={};
if(currDate>=5 && currDate<12){
    greeting = 'Good Morning';
    cssStyle.color='green';
}else if(currDate>=12 && currDate<16){
  greeting = 'Good afternoon';
  cssStyle.color='red';
}else if(currDate>=16 && currDate<20){
  greeting = 'Good Evening';
  cssStyle.color='orange';
}else{
  greeting = 'Good Night';
  cssStyle.color='black';
}


ReactDOM.render(
  <>
  <div>
<h1>hello sir,<span style={cssStyle}>{greeting}</span></h1>
</div>
  </>,
  document.getElementById("root")
);