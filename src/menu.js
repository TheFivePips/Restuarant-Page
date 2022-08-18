// contains menu content
import Barbacoa from './assets/barbacoa.jpg'
import Birria from './assets/birria.jpg'
import Breakfast from './assets/breakfast.jpg'
import Carnitas from './assets/carnitas.jpg'
import Fish from './assets/fish.jpg'

function createFoodItem(name, description, src, price){
    const foodItem = document.createElement("div");
    foodItem.classList.add("menu-item");

    const foodName = document.createElement("h3");
    foodName.textContent = name;
    foodName.classList.add('foodName')

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
    foodDescription.classList.add('foodDescription')

    const foodImage = new Image();
    foodImage.src = src
    foodImage.alt = `${name}`;

    const foodPrice = document.createElement('p')
    foodPrice.textContent = `$${price}`
    foodPrice.classList.add('foodPrice')

    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodName);
    foodItem.appendChild(foodDescription);
    foodItem.appendChild(foodPrice)

    return foodItem
}

// create a menue using createfooditem
function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createFoodItem(
        "Barbacoa",
        "Your choice of slow cooked beef or lamb seasoned with garlic, onion, lime juice, apple cider vinegar chipotle peppers in adobo sauce, chili powder, cumin, oregano, and a littttle bit of ground cloves",
        Barbacoa,
        '6.99'
      )
    );
    menu.appendChild(
      createFoodItem(
        "Birria",
        "traditional soup or stew made from a combination of chili pepper-based goat meat adobo, garlic, cumin, bay leaves, and thyme, and cooked at a low heat. Birria is slow-stewed in a pot, and differs from barbacoa, which is cooked underground",
        Birria, 
        '8.99'
      )
    );
    menu.appendChild(
      createFoodItem(
        "Breakfast Taco",
        "Build your own with a choice of eggs, potato, bacon, cheese, and any choice of additional meat and two veggies",
        Breakfast,
        '2.99'
      )
    );
    menu.appendChild(
      createFoodItem(
        "Carnitas",
        "Braised pork shoulder with salt, ground cumin, chili powder, garlic powder, dried oregano, onion powder, black pepper, and some fresh limes for garnish",
        Carnitas,
        '9.99'
      )
    );
    menu.appendChild(
      createFoodItem(
        "Fish Taco",
        "White fish with shredded cabbage, and crema. topped with your choice of three veggies",
        Fish,
        '7.99'
      )
    );

    return menu
}


function displayMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default displayMenu;
