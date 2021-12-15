// DOM elements
const catBox = document.getElementById("catBox");

// DATA
const menu = [
    {
        "name": "Margherita",
        "description": "Salsa di pomodoro, mozzarella di bufala campana DOP, pomodorini confit, gocce di pesto e basilico",
        "price": "$11.00",
        "image": "https://www.buttalapasta.it/wp-content/uploads/2017/11/pizza-margherita.jpg",
        "category": "Pizza"
    },
    {
        "name":"Capricciosa",
        "description": "Salsa di pomodoro, mozzarella fiordilatte, prosciutto cotto, carciofi in olio, funghi freschi e olive leccine",
        "price": "$12.00",
        "image": "https://www.melarossa.it/wp-content/uploads/2021/02/pizza-capricciosa.jpg",
        "category": "Pizza"
    },
    {
        "name": "Half Baked Cookie",
        "description": "with bitter chocolate, almond biscuit, caramelised popcorn and Madagascar vanilla ice cream",
        "price": "$12.00",
        "image": "https://www.portraitmagazine.com/pub/photo/thumb/43-recipe-half-baked-cookie-001_cropto_768x569.jpg",
        "category": "Dessert"
    },
    {
        "name": "Souffle",
        "description": "Valrhona chocolate, Madagascar vanilla ice cream and caramel sauce",
        "price": "$15.00",
        "image": "https://bellodolceicecream.com/wp-content/uploads/2018/01/Bello-Dolce-Souffle.gif",
        "category": "Dessert"
    },
    {
        "name": "Cheesecake",
        "description": "oven baked cheesecake with salted caramel ice cream and strawberry confit",
        "price": "$13.00",
        "image": "https://projectveganbaking.com/wp-content/uploads/2021/04/04.jpeg",
        "category": "Dessert"
    }
]


// extract categories from menu
const categories = [];

menu.forEach(item => {
    if (!categories.includes(item.category)) categories.push(item.category)
});

// DOM: print categories
for( cat of categories) {
    catBox.innerHTML += `<div id="${cat}"class="catName my-2"><span class="black p-2">${cat}</span></div>`
}

// DOM: on category click print plates
for( cat of categories) {
    document.getElementById(cat).addEventListener("click", printPlates)
}
// DOM: print plates
function printPlates(evt) {
    const plates =  menu.filter(item => item.category == evt.currentTarget.id)
    console.log("evt");
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


