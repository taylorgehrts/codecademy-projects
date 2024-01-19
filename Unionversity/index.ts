import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventsOptions = {
  query: string | number;
  eventType: "course" | "group";
};


let enrolledEvents: (Course | StudyGroup)[] = [];


function searchEvents(options: SearchEventsOptions) {
  let events: (Course | StudyGroup)[] =
    options.eventType === "course" ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return event.id === options.query;
    }
    if (typeof options.query === "string") {
      return event.keywords.includes(options.query);
    }
  });
}

function enroll(event: Course | StudyGroup){
  enrolledEvents = [...enrolledEvents, event]
}

const searchResults = searchEvents({ query: 2, eventType: "course" });

console.log(searchResults)

enroll(searchResults[0])

console.log( enrolledEvents)
console.log("You are enrolled in: ", enrolledEvents.map(event => event.title));