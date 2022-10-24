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
let map, mapEvent;
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
if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const { coords: { latitude, longitude } } = position;
            console.log(latitude, longitude);
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude];

            // Using leaflet to display map
            map = L.map('map').setView(coords, 13);
            // let marker = L.marker(coords).addTo(map);

            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            // Handling Clicks on the map
            map.on("click", function (mapE) {
                mapEvent = mapE
                form.classList.remove("hidden");
                inputDistance.focus();

            })
        },
        function () {
            alert("Could not get your location")
        }
    )
// Rendering Workout input form
form.addEventListener("submit", function (e) {
    e.preventDefault()

    // Clearing the fields
    inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = "";

    // Display marker
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng]).addTo(map)
        // .bindPopup("Workout")
        .bindPopup(
            L.popup(
                {
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: "running-popup"
                })
        )
        .setPopupContent("Workout")
        .openPopup();
    form.classList.add("hidden")
})

inputType.addEventListener("change", function () {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
})