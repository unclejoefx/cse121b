/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = "Uwa Joseph Uwa";
const currentYear = "2024";
const profilePicture = "images/uwajoe.jpg";


/* Step 3 - Element Variables */

const yearElement = document.querySelector("#year");
const nameElement = document.querySelector("#name");
const imageElement = document.querySelector("img");
const foodElement = document.querySelector("#food")


/* Step 4 - Adding Content */
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);






/* Step 5 - Array */
let favFood = ["Beans", "White Soup", "Pizza", "Afang Soup", "Fried Rice", "Egusi Soup", "Banana", "Ice cream", "Strawberry"];
foodElement.innerHTML = favFood.join('<br>'); // Display the array elements with line breaks

// Add a new food to the array
let newfood = "Watermelon";
favFood.push(newfood);
foodElement.innerHTML += `<br>${newfood}`;

// Remove the first and last elements
const firstFood = favFood.shift();
const lastFood = favFood.pop();

// Render the removed elements in addition to the previous array values (with a line break)
foodElement.innerHTML += `<br>${firstFood}`;
foodElement.innerHTML += `<br>${lastFood}`;







