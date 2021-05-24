import _ from 'lodash';
import './style.css';
import img_lisa from './img/lisa.jpg';

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

