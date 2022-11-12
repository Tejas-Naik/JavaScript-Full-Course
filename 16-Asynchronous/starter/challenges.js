'use strict';

// const whereAmI = function (lat, long) {
//     const url = `https://geocode.xyz/${lat},${long}?geoit=json`;
//     fetch(url)
//         .then(response => {
//             console.log(response)
//             if (!response.ok) throw new Error(`problem with geocoding ${response.status}`)
//             return response.json()
//         })
//         .then(data => console.log(`you are in ${data.city}, ${data.country}`))
//         .catch(err => {
//             console.error(err);
//             document.querySelector('.countriesContainer')
//                 .insertAdjacentText(
//                     "beforeend", `Something went wrong ${err.message}. Try Again`);
//         })
// }

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// CODING Challenge #2
const imgContainer = document.querySelector(".images");
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img')
        img.src = imgPath;

        img.addEventListener("load", function () {
            imgContainer.append(img)
            resolve(img);
        })

        img.addEventListener("error", function () {
            reject(new Error("Image not found"));
        })
    })
}

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    })
}

let currentImg;
/*
createImage("img/img-1.jpg")
    .then(img => {
        currentImg = img;
        console.log("Image 1 loaded");
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = "none";
        return createImage("img/img-2.jpg");
    }).then(img => {
        currentImg = img;
        console.log("Image 2 loaded");
        return wait(2)
    }).then(() => {
        currentImg.style.display = "none";
        return createImage("img/img-3.jpg");
    }).then(img => {
        currentImg = img;
        console.log("Image 3 loaded");
        return wait(2)
    }).then(() => {
        currentImg.style.display = "none";
    })
    .catch(err => console.error(err))
    
    const loadNPause = async function () {
        try {
            // Load image 1
            let img = await createImage('img/img-1.jpg');
            console.log("Image 1 loaded");
            await wait(2);
            img.style.display = 'none';
            
            // Load image 2
            img = await createImage('img/img-2.jpg');
            console.log("Image 2 loaded");
        await wait(2);
        img.style.display = 'none';

        // Load image 1
        img = await createImage('img/img-3.jpg');
        console.log("Image 3 loaded");
        await wait(2);
        img.style.display = 'none';
        
    } catch (err) {
        console.error(err.message);
    }
}

loadNPause();
*/


