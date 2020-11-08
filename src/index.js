//const element=document.createElement('h1');
//element.innerText="Hello, platzi badges!";
//const container=document.getElementById('app');
//container.appendChild(element);

import React from 'react'; //analogo a createElement
import ReactDOM from 'react-dom'; //analogo a appendChild


//este pseudo html es jsx, para usar éste es necesario importar React!
const element= <h1>Hello, Platzi badges from  React!</h1>
const container=document.getElementById('app');

//ReactDOM.render(__qué__,__donde__);
ReactDOM.render(element,container);