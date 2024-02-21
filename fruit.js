 // Define the fruits array
 let fruits = ["Apple", "Banana", "Orange", "Grapes", "Watermelon"];

 // Access the ul element in the HTML
 let fruitsList = document.getElementById("fruitsList");

 // Loop through the fruits array and create list items for each fruit
 fruits.forEach(function(fruit) {
   let listItem = document.createElement("li");
   listItem.textContent = fruit;
   fruitsList.appendChild(listItem);
 });
