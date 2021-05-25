import 'jquery';
import $ from 'jquery';
window.$ = $;
import _ from 'lodash';
import './style.css';
import img_lisa from './img/lisa.jpg';
window.img_lisa = img_lisa;//No funciona como esperábamos
import Data from './data.xml';
window.Data = Data;
import Notes from './data.csv';
import moment from 'moment';
window.moment = moment;
function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = img_lisa;
 
   element.appendChild(myIcon);
 
    return element;
  }
  document.body.appendChild(component());  

function mostrarInfo(){
  console.log(Data);
  console.log(Notes);
}
mostrarInfo();

//usamos jquery
$("#title").hide();