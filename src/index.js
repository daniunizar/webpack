import _ from 'lodash';
import './style.css';
import img_lisa from './img/lisa.jpg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['HEllo', 'webpack'], ' ');
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