const toTitleCase = require("to-title-case");

const someTitle = "the lord of the rings: the two towers";

const titleized = toTitleCase(someTitle);

console.log("raw title", someTitle);
console.log("processed title", titleized);