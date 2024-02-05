/* Profile Object  */

let myProfile = {
    name: "Uwa Joseph Uwa",
    photo: "images/uwajoe.jpg",
    favoriteFoods: [
        "Beans", "fried rice", "Plantain with sauce", "Fresh Fish Soup", "Watermelon", "Bannana", "Milk", "Afang Soup",
    ],
    hobbies: [
        "Reading", "Swimming", "Coding", "Soccer", "Travelling", "Fishing", "Cycling", "Cooking",
    ],
    placesLived: [
        {
            place: "Calabar, Nigeria",
            length: "10 years"
        },
        {
            place: "Tema, Ghana",
            length: "3 weeks"
        },
        {
            place: "Abuja, Nigeria",
            length: "1 year"
        },
        {
            place: "Uyo, Nigeria",
            length: "18 years"
        }
    ]
};

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement('li');
    listItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(listItem);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(listItem);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dtElement);
    document.querySelector('#places-lived').appendChild(ddElement);

})