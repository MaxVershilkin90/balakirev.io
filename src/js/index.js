import {e as a} from '../js/module_1.js';
import {slider} from '../js/modules/slider.js';
import {mobile} from '../js/modules/mobile.js';
import {menu} from '../js/modules/menu.js';

document.addEventListener("DOMContentLoaded", function() {

  console.log('This is the main js file.');
  console.log(a);

  slider ();

  menu ();

  mobile();

})
