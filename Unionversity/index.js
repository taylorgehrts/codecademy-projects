"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
let enrolledEvents = [];
function searchEvents(options) {
    let events = options.eventType === "course" ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === "number") {
            return event.id === options.query;
        }
        if (typeof options.query === "string") {
            return event.keywords.includes(options.query);
        }
    });
}
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
const searchResults = searchEvents({ query: 2, eventType: "course" });
console.log(searchResults);
enroll(searchResults[0]);
console.log(enrolledEvents);
console.log("You are enrolled in: ", enrolledEvents.map(event => event.title));
