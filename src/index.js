import 'jquery';
import $ from 'jquery';
window.$ = $;
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    element.innerHTML = _.join(['Este div y texto están generados con lodash, librería importada en index.js.', 'La imagen que sigue está importada desde index.js'], ' ');
    element.classList.add('hello');
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = img_lisa;
 
   element.appendChild(myIcon);
 
    return element;
  }
  document.body.appendChild(component());  

function mostrarInfo(){
  console.log("Mostramos documento XML importado:");
  console.log(Data);
  console.log("Mostramos documento SCV importado");
  console.log(Notes);
}
mostrarInfo();

//usamos jquery
$("#title").hide();
console.log("Hemos ocultado los títulos con id 'title' y 'title_html' con jQuery importado");