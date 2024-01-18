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
foodElement.innerHTML = favFood;
let newfood = "Watermelon";
favFood.push(newfood);
foodElement.innerHTML += `<br>${favFood}`;






