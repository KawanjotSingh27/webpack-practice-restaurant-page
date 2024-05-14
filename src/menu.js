import menu from "./menuPizza.jpg";

const containerMenu=document.createElement("div");

const menuIcon=new Image();
menuIcon.src=menu;
menuIcon.style.width="500px";
menuIcon.style.height="auto";

const text=document.createElement("p");
text.textContent=`
Our Pizzas
At our pizzeria, we pride ourselves on offering a wide variety of delicious pizzas to satisfy every palate. Here's a closer look at our mouth-watering options:

Margherita
Our Margherita pizza is a classic choice, featuring a simple yet flavorful combination of fresh tomatoes, mozzarella cheese, and aromatic basil leaves. This timeless favorite highlights the essence of traditional Italian pizza-making.

Hawaiian
For those who enjoy a sweet and savory mix, our Hawaiian pizza is the perfect choice. It comes topped with juicy pineapple chunks, savory ham, and a sprinkle of cheese, delivering a unique flavor combination that’s sure to delight.

Pepperoni
A perennial favorite, our Pepperoni pizza is loaded with slices of spicy pepperoni, melty mozzarella, and a rich tomato sauce. It’s a must-try for anyone who loves a bit of heat with their pizza.

Mushroom
Vegetable lovers will adore our Mushroom pizza, which boasts a generous helping of fresh mushrooms, onions, bell peppers, and a blend of cheeses. It’s a perfect harmony of earthy flavors and creamy textures.

Carbonara
Inspired by the classic pasta dish, our Carbonara pizza features a rich topping of crispy bacon, egg, mozzarella, and a touch of black pepper. This indulgent option is sure to satisfy those seeking a hearty and comforting meal.

Bolognese
Our Bolognese pizza is a meat lover’s dream, topped with savory ground beef, tomatoes, and a mix of herbs and spices. This pizza takes the flavors of traditional Bolognese sauce and brings them to a delectable, cheesy canvas.

Vegetarian
Our Vegetarian pizza is a vibrant medley of fresh vegetables, including bell peppers, onions, mushrooms, olives, and tomatoes, all layered over a bed of gooey cheese and tangy tomato sauce. It’s a delightful and healthy choice for veggie enthusiasts.

Meat Feast
For the ultimate carnivorous experience, our Meat Feast pizza is loaded with a variety of meats, including pepperoni, ham, sausage, and bacon. Every bite is packed with savory goodness, making it a top pick for meat lovers.

Seafood
Experience the taste of the ocean with our Seafood pizza, topped with a delicious assortment of shrimp, calamari, mussels, and a touch of garlic. This pizza is perfect for seafood aficionados seeking a gourmet twist.

No matter which pizza you choose, you’re in for a treat. Come visit us and discover your new favorite pizza today!`

containerMenu.appendChild(menuIcon);
containerMenu.appendChild(text);

export {containerMenu};