// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const stories = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (story) => {
  return replaceAll(story.title, ' ', '-');
};

class StoryApi {
  static getAllStories() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], stories));
    });
  }

  static saveStory(story) {
    story = Object.assign({}, story); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      // Simulate server-side validation
      const minStoryTitleLength = 1;
      if (story.title.length < minStoryTitleLength) {
        reject(`Title must be at least ${minStoryTitleLength} characters.`);
      }

      if (story.id) {
        const existingStoryIndex = stories.findIndex(a => a.id == story.id);
        stories.splice(existingStoryIndex, 1, story);
      } else {
        //Just simulating creation here.
        //The server would generate ids and watchHref's for new courses in a real app.
        //Cloning so copy returned is passed by value rather than by reference.
        story.id = generateId(story);
        story.watchHref = `http://www.pluralsight.com/courses/${story.id}`;
        stories.push(story);
      }

      resolve(story);
    });
  }

  static deleteStory(storyId) {
    return new Promise((resolve, reject) => {
      const indexOfStoryToDelete = stories.findIndex(story => {
        story.id == storyId;
      });
      stories.splice(indexOfStoryToDelete, 1);
      resolve();
    });
  }
}

export default StoryApi;
