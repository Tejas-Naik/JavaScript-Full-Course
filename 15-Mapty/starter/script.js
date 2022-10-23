'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// How to plan a project
/*
1. User Stories - description of the app from the users perspective
2. Features - What features we want to implement
3. Flowchart - create a flowchart of all the features and how to build
4. Architechture - how to implement the flowchart
from all the above 4 steps you will be done implementing

5. Development.
*/

// Using Geolocation
navigator.geolocation.getCurrentPosition(
    function (position) {
        const { coords: { latitude, longitude } } = position;
        console.log(latitude, longitude);
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
        alert("Could not get your location")
    }
)