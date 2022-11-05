'use strict';
/*
// Asynchronous JavaScript, AJAX & APIs
- SYNCHRONOUS CODE
--> Code executed line by line
--> if a line of code takes 5 sec to execute then the entire script will load after 5 sec

- ASYNCHROOUS CODE
--> Task runs in the background(timer, events)
--> Doesn't block the execution
--> We need callback function to execute after some time, but not all callback functions are async

AJAX
--> Asynchronous JavaScript And XML
--> Allow us to communicate with remote web servers and get data

API
--> Application Programming Interface
--> API is a way of talking computers with other computers
--> DOM API, Geolocation API, Own Class API, Online API
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const countryName = document.querySelector('.country-name');

///////////////////////////////////////
// AJAX call : XMLHttpRequest

const getCountryData = function (countryName) {
  const endpoint = `https://restcountries.com/v3.1/name/${countryName}`;
  const request = new XMLHttpRequest();
  request.open("GET", endpoint);
  // const data = request.send(); cant do this because of async js it takes time to make a request so it keeps going down
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Displaying UI
    countriesContainer.style.opacity = 1;
    const currentCurrency = Object.values(data.currencies)[0];
    console.log(currentCurrency);
    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.continents[0]}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 10000000).toFixed(2)} Crores</p>
            <p class="country__row"><span>💰</span>${currentCurrency?.symbol} ${currentCurrency?.name}</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]} </p>
            
          </div>
        </article>
          `
    countriesContainer.insertAdjacentHTML("beforeend", html);
  })
}
getCountryData("india");
getCountryData("usa");
getCountryData("britain");
