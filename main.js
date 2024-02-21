// Define the numbers array
let numbers = [1, 2, 3, 4, 5];
  
// Function to display the numbers array
function displayNumbers() {
  document.getElementById("numbersArray").textContent = numbers.join(", ");
}

// Add event listener for the "Add Element" button
document.getElementById("addButton").addEventListener("click", function() {
  let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  numbers.push(randomNumber); // Add the random number to the end of the array
  displayNumbers(); // Display the updated array
});

// Add event listener for the "Remove Element" button
document.getElementById("removeButton").addEventListener("click", function() {
  numbers.pop(); // Remove the last element from the array
  displayNumbers(); // Display the updated array
});

// Add event listener for the "Find Index" button
document.getElementById("findButton").addEventListener("click", function() {
  let index = numbers.indexOf(3); // Find the index of the number 3 in the array
  if (index !== -1) {
    alert("Index of number 3: " + index);
  } else {
    alert("Number 3 not found in the array.");
  }
});

// Display the initial numbers array
displayNumbers();