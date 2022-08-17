// this fiile contains the home page content
import tellaPic from './assets/tella-pic.jpg'


function homePage() {
    const home = document.createElement('div')
    home.classList.add('home')

    const tellaSmile = new Image()
    tellaSmile.src = tellaPic
    tellaSmile.classList.add('tella-smile')

    const about = document.createElement('p')
    about.textContent = `Tella's Tacos was first opened in Lousiana, when the chef, Tella, was found in a bog making her special home-made tacos for all of the swamp creatures. Naturally we capitilized on this once in a lifetime opportunity to have a dog make everyone tacos. The first store opened in Austin, Texas in 2015 to rave reviews and has since expanded to every single grocery store in the country.`
    about.classList.add('about')


    
    home.appendChild(tellaSmile)
    home.appendChild(about)

    return home
}

function displayHome(){
    const main = document.getElementById('main')
    main.textContent = "",
    main.appendChild(homePage())
}

export default displayHome