"use strict";

//lists

let destinations = ["Berlin", "Tokyo", "Milwaukee", "Prague"];

let restaurants = [];

let transportation = ["personal car", "taxi", "train", "boat"];

let entertainment = ["drinks", "arcade", "sports event", "museum"];

//random generator
function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice;
};

//TODO generator
function dinnerGenerator(){
    let userHappy = false;

    while(userHappy===false){
        let randomFood = randomGenerator(listOfFood)
        let userResponse = prompt(`Your randomly generated dinner is ${randomFood}. Are you okay with that?`);

        if (userResponse.toLowerCase() === "yes"){
            alert(`Enjoy your ${randomFood}!`);
            userHappy = true;
        }

        else if (userResponse.toLowerCase() === "no"){
            userHappy = false;
        }
    }
};

//Displays the whole trip information

//test variables:
let randomDestination = "Berlin", randomRestaurant = "Oncle Yves", randomTransportation = "Boat", randomEntertainment = "dance battle";
let tripInfo = (
    `Destination: ${randomDestination}\nRestaurant: ${randomRestaurant}\nTransportation: ${randomTransportation}\nEntertainment: ${randomEntertainment}`);


function tripSatisfaction(){
    let userSatisfaction = false;
    alert(tripInfo);

    while(userSatisfaction === false){
        let userResponse = prompt("Are you satisfied with your trip? (Yes or No)");

        if (userResponse.toLowerCase() === "yes"){
            alert(`Final Trip:\n${tripInfo}`);
            userSatisfaction === true;
        }

        else if (userResponse.toLocaleLowerCase === "no"){
            userSatisfaction === false;
        };
    };
};

tripSatisfaction();