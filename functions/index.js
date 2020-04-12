const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.getFourSquareID = functions.https.onRequest(() => {
    return functions.config().foursquare.clientid;
})

exports.getFourSquareSecret = functions.https.onRequest(() => {
    return functions.config().foursquare.clientsecret;
})

exports.getOpenWeatherID = functions.https.onRequest((request, response) => {
    response.send(functions.config().openweather.key);
})