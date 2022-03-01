"use strict";

//lists

let destinations = ["Berlin", "Tokyo", "Milwaukee", "Prague"];

let restaurants = ["Oncle Yves", "Culvers", "Angie's", "U Fleku"];

let transportation = ["personal car", "taxi", "train", "boat"];

let entertainment = ["drinks", "arcade", "sports event", "museum"];

//trip information library
let tripInfo = {};

//random generator
function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice;
};

//Destination generator
function destinationGenerator(){
    let userHappy = false;

    while(userHappy===false){
        let randomDestination = randomGenerator(destinations)
        let userResponse = prompt(`Your randomly generated location is ${randomDestination}. Are you okay with that?`);

        if (userResponse.toLowerCase() === "yes"){
            alert(`Enjoy traveling to ${randomDestination}!`);
            userHappy = true;

            //updates the destination to the tripInfo dictionary
            tripInfo["Destination"] = randomDestination;
            return randomDestination, tripInfo;
        }

        else if (userResponse.toLowerCase() === "no"){
            userHappy = false;
        }
    }
};

//Restaurant generator
function restaurantGenerator(){
    let userHappy = false;

    while(userHappy===false){
        let randomRestaurant = randomGenerator(restaurants)
        let userResponse = prompt(`Your randomly generated restaurant is ${randomRestaurant}. Are you okay with that?`);

        if (userResponse.toLowerCase() === "yes"){
            alert(`Enjoy eating at ${randomRestaurant}!`);
            userHappy = true;

            tripInfo["Restaurant"] = randomRestaurant;
            return randomRestaurant, tripInfo;
            
        }

        else if (userResponse.toLowerCase() === "no"){
            userHappy = false;
        }
    }
};

//Transpo generator
function transportationGenerator(){
    let userHappy = false;

    while(userHappy===false){
        let randomTransportation = randomGenerator(transportation)
        let userResponse = prompt(`Your randomly generated method of transportation is ${randomTransportation}. Are you okay with that?`);

        if (userResponse.toLowerCase() === "yes"){
            alert(`Enjoy traveling by ${randomTransportation}!`);
            userHappy = true;

            tripInfo["Transportation"] = randomTransportation;
            return randomTransportation, tripInfo;
        }

        else if (userResponse.toLowerCase() === "no"){
            userHappy = false;
        }
    }
};

//Entertainment generator
function entertainmentGenerator(){
    let userHappy = false;

    while(userHappy===false){
        let randomEntertainment = randomGenerator(entertainment)
        let userResponse = prompt(`Your randomly generated entertainment is ${randomEntertainment}. Are you okay with that?`);

        if (userResponse.toLowerCase() === "yes"){
            alert(`Enjoy ${randomEntertainment}!`);
            userHappy = true;

            tripInfo["Entertainment"] = randomEntertainment;

            return randomEntertainment, tripInfo;
        }

        else if (userResponse.toLowerCase() === "no"){
            userHappy = false;
        }
    }
};

//function to change a part of the trip
function changeTrip(){
   
    let userInput = prompt("Which would you like to change:\nPress 1 for Destination\nPress 2 for Restaurant\nPress 3 for Transportation\nPress 4 for Entertainment");
   
    switch(userInput){
        
        case "1":
            //destination change
            destinationGenerator(destinations);
            break;
        case "2":
            //restaurant
            restaurantGenerator(restaurants)
            break;
        case "3":
            //transpo
            transportationGenerator(transportation)
            break;
        case "4":
            //entertainment
            entertainmentGenerator(entertainment)
            break;
    }
    
};

//displays initial alert of trip information and prompts user if they want to keep it
function tripSatisfaction(){
    let userSatisfaction = false;

    while(userSatisfaction === false){
        let userResponse = prompt(`Your current trip details are:\n${JSON.stringify(tripInfo, undefined, 2)}\nAre you satisfied with your trip? (Yes or No)`);

        if (userResponse.toLowerCase() === "yes"){
            alert(`Final Trip:\n${JSON.stringify(tripInfo,undefined,2)}`);
            userSatisfaction = true;
        }

        else if (userResponse.toLowerCase() === "no"){
            userSatisfaction = false;
            changeTrip();
        };
    };
};

//initializes all of the random elements and stores them in a dictionary
function startUp(){
    tripInfo = {
        Destination: randomGenerator(destinations),
        Restaurant: randomGenerator(restaurants),
        Transportation: randomGenerator(transportation),
        Entertainment: randomGenerator(entertainment)
    };
    
    return tripInfo;
};

startUp();
tripSatisfaction();