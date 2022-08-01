'use strict';

//////////////////////////////////
// Default Parameters
//////////////////////////////////
const bookings = [];
const createBooking = function (flightNumber = "LH123", numPassangers = 1, price = 999 / numPassangers) {
    // // before es6
    // flightNumber = flightNumber || "------";
    // numPassangers = numPassangers || 1;
    // price ||= 199;

    const booking = {
        flightNumber,
        numPassangers,
        price
    }
    console.log(booking);
    bookings.push(booking)
}

createBooking("LF333");
createBooking("LF121", 76, 499);
createBooking();
createBooking("LF121", 16);
createBooking("LF121", 12);
createBooking("LF121", undefined, 12);  // default passangers

