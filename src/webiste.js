// this is the base website js page. It will include a header with nav links, a blank body(where the other content will be loaded by other files), and a footer.it will export a function to initialize the website to the index.js file

function header() {
    const nav = document.createElement('nav')
    nav.classList.add('navbar')

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('icon')


    nav.appendChild(myIcon)

}

import './style.css';
import Icon from './forknknife.png';
import BackgroundImg from './restaurant.jpg';

const contentDiv = document.getElementById("content")



const restImg = new Image()
restImg.src = BackgroundImg;


const navlinksUL = document.createElement('ul')
navlinksUL.classList.add('navUL')
navlinksUL.innerHTML= `
<li><a href=''>Home</a></li>
<li><a href=''>Contact</a></li>
<li><a href=''>Menu</a></li>`

nav.appendChild(navlinksUL)

contentDiv.appendChild(nav)