const country = "India";
const continent = "Asia";
let population = 1300;
const isIsland = false;
let language;

console.log(
    typeof country,
    typeof population,
    typeof isIsland,
    typeof language
);

language = "Hindi";

const halfPopulation = population / 2;
console.log(population++);

const finlandPopulation = 6;
console.log(population > finlandPopulation);

const avaragePopulation = 33;
console.log(population < avaragePopulation);

const description = country + ' is in ' + continent + ", and it's " + population + " million people speak " + language + "!";
console.log(description);

const descriptionNew = `${country} is in ${continent}, and it's ${population} million people speak ${language}!`;
console.log(descriptionNew);

if (population < 33) {
    console.log(`${country}'s population is ${avaragePopulation - population} million below avarage.`);
} else {
    console.log(`${country}'s population is above avarage.`)
}