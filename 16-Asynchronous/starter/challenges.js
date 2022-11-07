'use strict';

const whereAmI = function (lat, long) {
    const url = `https://geocode.xyz/${lat},${long}?geoit=json`;
    fetch(url)
        .then(response => {
            console.log(response)
            if (!response.ok) throw new Error(`problem with geocoding ${response.status}`)
            return response.json()
        })
        .then(data => console.log(`you are in ${data.city}, ${data.country}`))
        .catch(err => {
            console.error(err);
            document.querySelector('.countriesContainer')
                .insertAdjacentText(
                    "beforeend", `Something went wrong ${err.message}. Try Again`);
        })
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);