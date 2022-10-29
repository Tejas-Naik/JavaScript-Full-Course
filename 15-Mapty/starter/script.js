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

// Project Architechture
class App {
    #map;
    #mapEvent;

    constructor() {
        this._getPosition();
        // Rendering Workout input form
        form.addEventListener("submit", this._newWorkout.bind(this))
        inputType.addEventListener("change", this._toggleElevationField)
    }

    _getPosition() {
        // Using Geolocation
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function () {
                    alert("Could not get your location")
                }
            )

    }
    _loadMap(position) {
        const { coords: { latitude, longitude } } = position;
        console.log(latitude, longitude);
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        // Using leaflet to display map
        this.#map = L.map('map').setView(coords, 13);
        // let marker = L.marker(coords).addTo(map);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.#map);

        // Handling Clicks on the map
        this.#map.on("click", this._showForm.bind(this))
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    }

    _newWorkout(e) {
        e.preventDefault()

        // Clearing the fields
        inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = "";

        // Display marker
        const { lat, lng } = this.#mapEvent.latlng;
        L.marker([lat, lng]).addTo(this.#map)
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
    }
}

const app = new App();

