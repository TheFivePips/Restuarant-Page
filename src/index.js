import './style.css';
import Icon from './forknknife.png';
import BackgroundImg from './restaurant.jpg';

const contentDiv = document.getElementById("content")

const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList.add('icon')

const restImg = new Image()
restImg.src = BackgroundImg;

const nav = document.createElement('nav')
nav.classList.add('navbar')
nav.appendChild(myIcon)

const navlinksUL = document.createElement('ul')
navlinksUL.classList.add('navUL')
navlinksUL.innerHTML= `
<li><a href=''>Home</a></li>
<li><a href=''>Contact</a></li>
<li><a href=''>Menu</a></li>`

nav.appendChild(navlinksUL)

contentDiv.appendChild(nav)