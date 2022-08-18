// this is the base website js page. It will include a header with nav links, a blank body(where the other content will be loaded by other files), and a footer.it will export a function to initialize the website to the index.js file
import Icon from './assets/tella-bone2.jpg'
import displayContact from './contact';
import displayHome from './home';
import displayMenu from './menu';



function createHeader() {
    const header = document.createElement('header')
    header.classList.add('header')

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('icon')

    const name = document.createElement('h1')
    name.textContent = "Tella's Tacos"
    name.classList.add('title')

    
    header.appendChild(myIcon)
    header.appendChild(name)
    header.appendChild(createNav())
    

    return header

}

function createNav(){

    const nav = document.createElement('nav')
    nav.classList.add('nav')
    
    // each of these btns will need an event listener that loads the appropriate js file and marks the page as active
    const homebtn = document.createElement('button')
    homebtn.classList.add('homebtn')
    homebtn.classList.add('navBtn')

    homebtn.textContent = 'Home'
    homebtn.addEventListener("click", function(event) {
        // check for if it is the active page
        if(event.target.classList.contains('active')) return;
        activeBtn(homebtn)
        // load home content function here
        displayHome()
    })

    const contactbtn = document.createElement('button')
    contactbtn.classList.add('contactbtn')
    contactbtn.classList.add('navBtn')

    contactbtn.textContent = 'Contact'
    contactbtn.addEventListener("click", function(event) {
        // check for if it is the active page
        if(event.target.classList.contains('active')) return;
        activeBtn(contactbtn)
        // load contact content function here
        displayContact()

    })

    const menubtn = document.createElement('button')
    menubtn.classList.add('menubtn')
    menubtn.classList.add('navBtn')

    menubtn.textContent = 'Menu'
    menubtn.addEventListener("click", function(event) {
        // check for if it is the active page, if yes, do nothing, if not set it to active
        if(event.target.classList.contains('active')) return;
        activeBtn(menubtn)
        // load menu content function here
        displayMenu()
    })

    nav.appendChild(homebtn)
    nav.appendChild(contactbtn)
    nav.appendChild(menubtn)

    return nav

    
}

function activeBtn(button) {
    
    // loops through the nav buttons, removes the active class if its not the button selected and sets the active class on the selected btn
    const buttons = document.querySelectorAll(".navBtn")
    buttons.forEach((button) =>{
        if (button !== this) {
            button.classList.remove('active')
        }
    })
    button.classList.add('active')
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    
    const gitshoutout = document.createElement('a')
    gitshoutout.classList.add('gitshoutout')
    gitshoutout.href = 'https://github.com/TheFivePips'
    gitshoutout.textContent = 'Check out my github page!'
    
   
    
    footer.appendChild(gitshoutout)
//   maybe add some other things in here like an adresss, tm, etc
  
    return footer;
}

function initializeWebsite() {
    // put all the static website elements(header,nav, main, footer) onto the page and then display the home page
    const contentDiv = document.getElementById('content')

    contentDiv.appendChild(createHeader())
    contentDiv.appendChild(createMain())
    contentDiv.appendChild(createFooter())

    // set the first btn with navBtn class to active with activebtn()
    activeBtn(document.querySelector('.navBtn'))
    // displayHome() import this function from the home js file
    displayHome()

}


// export initializewebsite function
export default initializeWebsite;