// contains contact content
import Map from './assets/map.jpg'
function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const map = new Image()
    map.src = Map
    map.classList.add('map')

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = 'Phone: 1-555-666-1234'

    const email = document.createElement('p')
    email.textContent = 'Email: TellasTacos@boglyfe.com'

    const adress = document.createElement('p')
    adress.textContent = 'Address: 123 Sheisalreadyinyourhouse Lane, Everywhere, USA'

    const hours = document.createElement('p')
    hours.textContent = 'Hours of Operation: Open every third half-moon from 4am untill the prophecy is fullfilled.'

    contactInfo.appendChild(phoneNumber)
    contactInfo.appendChild(email)
    contactInfo.appendChild(adress)
    contactInfo.appendChild(hours)
    
    contact.appendChild(map)
    contact.appendChild(contactInfo)

    return contact

}

function displayContact(){
    const main = document.getElementById('main')
    main.textContent = ""
    main.appendChild(createContact())

}

export default displayContact