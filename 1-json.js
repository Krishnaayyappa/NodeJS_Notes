const fs = require("fs");

// const details = {
//     name: "hari",
//     place: "india",
//     age:"25"
// }

// const detailsJson = JSON.stringify(details);

// fs.writeFileSync("1-jason.json", detailsJson);

const detailsFetched = fs.readFileSync("1-jason.json");

const detailsFetchedJson = detailsFetched.toString();

const detailsFetchedObject = JSON.parse(detailsFetchedJson);

console.log(detailsFetchedObject);

detailsFetchedObject.name = "krishna";
detailsFetchedObject.age = "27";
detailsFetched.place = "canada";

fs.writeFileSync("1-jason.json", JSON.stringify(detailsFetchedObject));




