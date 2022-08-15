// this is the base website js page. It will include a header with nav links, a blank body(where the other content will be loaded by other files), and a footer.it will export a function to initialize the website to the index.js file

function createHeader() {
    const header = document.createElement('header')
    header.classList.add('header')

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('icon')

    const name = document.createElement('h1')
    name.textContent = "Tella's Tacos"

    
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
    homebtn.textContent = 'Home'
    homebtn.addEventListener("click", function(event) {
        // check for if it is the active page
        // load home content function here
    })

    const contactbtn = document.createElement('button')
    contactbtn.classList.add('contactbtn')
    contactbtn.textContent = 'Contact'
    contactbtn.addEventListener("click", function(event) {
        // check for if it is the active page
        // load home content function here
    })

    const menubtn = document.createElement('button')
    menubtn.classList.add('menubtn')
    menubtn.textContent = 'Menu'
    menubtn.addEventListener("click", function(event) {
        // check for if it is the active page
        // load home content function here
    })

    nav.appendChild(homebtn)
    nav.appendChild(contactbtn)
    nav.appendChild(menubtn)

    
}

function activeBtn () {
    // not defined yet
    // loops through the nav buttons and sets the active class
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
//   maybe add some other things in here like an adresss, tm, etc
  
    return footer;
}

function initializeWebsite() {
    // put all the static website elements(header,nav, main, footer) onto the page and then display the home page
    const contentDiv = document.getElementById('content')

    contentDiv.appendChild(createHeader())
    contentDiv.appendChild(createMain())
    contentDiv.appendChild(createFooter())

    // displayHome() import this function from the home js file

    // set the home page to active with activebtn()
}


// export initializewebsite function