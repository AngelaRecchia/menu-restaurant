import {fullMenu} from "./data/menu.js"

// DOM elements
const catBox = document.getElementById("catBox")

// selected category
let selected = "All";

// DATA: menu
const menu = fullMenu

// DATA: extract categories from menu
const categories = ["All"]

menu.forEach(item => {
    if (!categories.includes(item.category)) categories.push(item.category)
});

// DOM: print categories
for(let cat of categories) {
    catBox.innerHTML += `<div id="${cat}"class="catName my-2"><span class="black p-2">${cat}</span></div>`
}

// DOM: on category click print plates
for(let cat of categories) {
    document.getElementById(cat).addEventListener("click", updatePlates)
}

printPlates(menu)
document.getElementById("All").classList.add("selected")

// DOM: print plates
function printPlates(plates) {
    
    plateBox.innerHTML = ""
    plates.forEach(plate => {
        plateBox.innerHTML += `<div class="card_plate text-white col">
        <div class="position-relative">
            <img src="${plate.image}" class="plateImg w-100">
            <i class="fas fa-cart-plus cart"></i>
        </div>
        <div class="infos">
            <div class="text-uppercase name">${plate.name}</div>
            <div class="descr m-3">${plate.description}</div>
            <div class="price">${plate.price}</div>
        </div>

    </div>`
    })
}

// DOM update on category click
function updatePlates(evt) {
    const cat = evt.currentTarget.id

    if (cat != selected) {
        document.getElementById(selected).classList.remove("selected")
        document.getElementById(cat).classList.add("selected")
        selected = cat

        if (cat == "All") printPlates(menu)
        else printPlates(menu.filter(item => item.category == cat))
    }
}



