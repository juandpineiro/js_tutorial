let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Returns an array of URLs from an input array of states
// function listOfUrls(elements) {
//   return elements.map(element => `https://example.com/${urlify(element)}`);
// }
// console.log(listOfUrls(states))

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Return the Dakotas using String#includes
function dakotasIncludes(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}
console.log(dakotasIncludes(states));

// Return the Dakotas using regex and split array length
function dakotasRegex(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(dakotasRegex(states));