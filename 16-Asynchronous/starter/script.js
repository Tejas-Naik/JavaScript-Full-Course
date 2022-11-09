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
const renderCountry = function (data, className = "") {
  // Displaying UI
  const currentCurrency = Object.values(data.currencies)[0];
  console.log(currentCurrency);
  const html = `
    <article class="country ${className}">
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
  countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Country not found (${response.status})`)
    }
    return response.json();
  })
}

/*
const getCountryAndNeighbour = function (countryName) {
  // AJAX Call country 1
  const endpoint = `https://restcountries.com/v3.1/name/${countryName}`;
  const request = new XMLHttpRequest();
  request.open("GET", endpoint);
  // const data = request.send(); cant do this because of async js it takes time to make a request so it keeps going down
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders?.[0];

    // AJAX Call country 2
    const endpoint = `https://restcountries.com/v3.1/alpha/${neighbour}`;
    const request2 = new XMLHttpRequest();
    request2.open("GET", endpoint);
    // const data = request.send(); cant do this because of async js it takes time to make a request so it keeps going down
    request2.send();

    request2.addEventListener("load", function () {
      const [dataNeighbour] = JSON.parse(this.responseText);
      console.log(dataNeighbour);
      renderCountry(dataNeighbour, "neighbour");
    })

  })
}
getCountryAndNeighbour("india");


//Callback Hell
//--> calling one AJAX Call inside the other one (nested callbacks)

setTimeout(() => {
  console.log("1 Second Passed");
  setTimeout(() => {
    console.log("2 Seconds Passed");
    setTimeout(() => {
      console.log("3 Seconds Passed");
      setTimeout(() => {
        console.log("4 Seconds Passed")
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

// Example from Python course
const lat = 40.712776;
const long = -74.005974;
const endpoint = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`;

const request = new XMLHttpRequest();
request.open("GET", endpoint);
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(request.responseText);
  console.log(`Sunrise: ${data.results.sunrise} \nSunset: ${data.results.sunset}`);
})


// Promises and Fetch API
// XMTHTTPRequest
// const endpoint = `https://restcountries.com/v3.1/name/${countryName}`;
// const request = new XMLHttpRequest();
// request.open("GET", endpoint);
// request.send();


// What are Promises?
// An object that is used as a placeholder for the future resilt of an asynchronous operation

// Promise LifeCycle
// PENDING => SETTELED
// FULFILLED(200)  ^  REJECTED(404)

// Fetch
// const request = fetch(`https://restcountries.com/v3.1/name/india`);
//console.log(request);

// Consuming Promises
// const getCountryData = function (country) {
//   // All fetches return promises and we can call then on promises
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     }).then(function (data) {
//       console.log(data);
//       renderCountry(data[0])
//     })
// }
// getCountryData("india");


// Chaining Promises
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     // then takes 2 callback functions 1st (success) 2nd (rejected)
//     .then(
//       (response) => {
//         console.log(response);

//         if (!response.ok) {
//           // this error will trigger catch function and the message in the `` will be the arg for catch fnct
//           throw new Error(`Country not found (${response.status})`)
//         }

//         response.json()
//       })
//     // (err) => alert(err)) // we will handle errors for all promises at the end
//     .then((data) => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       console.log(neighbour);
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], "neighbour"))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//       console.log("Finally completed");
//     })
// }

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country Not Found")
    // (err) => alert(err)) // we will handle errors for all promises at the end
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      console.log(neighbour);

      if (!neighbour) throw new Error(`No neighbour found`)

      // Country 2
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    })
    .then(data => renderCountry(data[0], "neighbour"))
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong ${err.message}. Try Again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
      console.log("Finally completed");
    })
}


// Fetch one more example
const lat = 40.712776;
const long = -74.005974;
const endpoint = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`;

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const sunrise = data.results.sunrise;
    const sunset = data.results.sunset;
    console.log(`Sunrise: ${sunrise} \nSunset: ${sunset}`);
  })

// Handling Rejected Promises
btn.addEventListener("click", function () {
  getCountryData("china");
})

// Throwing Errors Manually
getCountryData("dfddffd")
// CODING CHALLENGE #1
const whereAmI = function (lat, long) {
  const url = `https://geocode.xyz/${lat},${long}?geoit=json`;
  fetch(url)
    .then(response => {
      console.log(response)
      if (!response.ok) throw new Error(`problem with geocoding ${response.status}`)
      return response.json()
    })
    .then(data => {
      console.log(`you are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
    })
    .then(response => {
      console.log("Country");
      if (!response.ok)
        throw new Error(`Country not found. ${response.status}`)
        return response.json()
      }).then(data => renderCountry(data[0]))
      .catch(err => {
      console.error(err);
    })
  }
  
  whereAmI(52.508, 13.381);
  // whereAmI(19.037, 72.873);
  // whereAmI(-33.933, 18.474);
  */

// Asynchronous BTS : The Event Loop
/*
- Only one thread in a time in JS
- there are 3 execution contexts
- 1. Call Stack 2. Web APIs 3. Callback Queues

- Asynchronous codes executed backgroundly in web APIs context
- when its loading/timer/waiting finishes then it is put in callback queue

Event Loop:
- it looks if the call stack is empty or not
- if it is, it puts the callbacks in the execution context - event loop take
- Promises are not stored in callback queue
- they are stored in Microtasks queue
- it has priority over callback queue

// Event Loop in practice
console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Reserved promise 1").then(res => console.log(res));

Promise.resolve("Reserved promise 2").then(res => {
  for (let i = 0; i < 1000000000; i++) { }
  console.log(res);
})

console.log("Test end");
*/

/*
Steps in which the code will be executed
1. GLOBAL CONTEXT CODE (2 console.log())
2. Promises because they are above tier of Callback functions
3. Callback queues (timer)
*/
// BUILDING A SIIMPLE PROMISE
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(function () {
    // 50% chance of winning
    if (Math.random() > .5) {
      resolve("You win");
    } else {
      reject(new Error("Try again next time"));
    }
  }, 2000)
})

lotteryPromise
  .then(response => console.log(response))
  .catch(err => console.error(err));

// Promisifying SetTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}

wait(2).then(() => {
  console.log("I waited for 2 seconds");
  return wait(1)
}).then(() => console.log("Waited another second"));

// Immideate resolve/reject
Promise.resolve("abc").then(res => console.log(res));
Promise.reject(new Error("Problem!")).catch(err => console.error(err));

