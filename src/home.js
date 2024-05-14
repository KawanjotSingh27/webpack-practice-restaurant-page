import pizza from "./pizza.jpg";

const containerHome=document.createElement("div");

const heading=document.createElement("h1");
heading.textContent="Welcome to Kawanjot's Pizzeria";

const pizzaIcon=new Image();
pizzaIcon.src=pizza;
pizzaIcon.style.width="500px";
pizzaIcon.style.height="auto";

const text=document.createElement("p");
text.textContent=`
At Kawanjot's Pizzeria, we take pride in serving the finest, handcrafted pizzas made from the freshest ingredients. Our secret lies in our time-honored recipes, a passion for excellence, and a commitment to quality that you can taste in every bite.

Why Choose Us?
Authentic Taste: Our pizzas are crafted with traditional methods, ensuring an authentic and unforgettable flavor experience. From our classic Margherita to our gourmet specialty pizzas, every slice is a testament to culinary perfection.

Fresh Ingredients: We believe that great pizza starts with great ingredients. That's why we use only the freshest, locally-sourced vegetables, premium meats, and the highest quality cheeses. Our dough is made fresh daily, and our sauces are prepared from scratch using family recipes.

Variety and Innovation: Whether you're a fan of classic flavors or looking to try something new, we've got you covered. Our menu features a wide range of options, including vegetarian, vegan, and gluten-free choices, so everyone can enjoy a delicious meal.

Warm and Inviting Atmosphere: Kawanjot's Pizzeria is more than just a place to eat; it's a place to gather with friends and family. Our cozy, welcoming environment makes it the perfect spot for any occasion, from casual lunches to special celebrations.

Exceptional Service: Our friendly and dedicated staff are here to ensure you have a wonderful dining experience. We strive to make every visit memorable with prompt service and a personal touch.

Our Promise
At Kawanjot's Pizzeria, our goal is simple: to provide you with the best pizza and an exceptional dining experience. We are committed to making every meal a moment to savor, filled with delicious flavors and fond memories.

Come visit us and discover why Kawanjot's Pizzeria is the favorite choice for pizza lovers. We can't wait to serve you!`

containerHome.appendChild(heading);
containerHome.appendChild(pizzaIcon);
containerHome.appendChild(text);

export {containerHome};