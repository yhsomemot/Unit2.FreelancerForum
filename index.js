//const freelancers = [{
//name: "Bob", occupation: "Teacher", price: "30",
//name: "Carol", occupation: "Programmer", price: "70"
//}];
 
const freelancers = [ "Bob Teacher $50", "Carol Programmer $70"];
let currentIndex = 0;

//do I have to make one for each section of the array?

function freelancerNxtLine() {
  const freelancerPost = document.querySelector("#freelancerPost");
  if (currentIndex < freelancers.length) {
    freelancerPost.innerHTML += freelancers[currentIndex] + "<br>";
    currentIndex++;
  } else {
    clearInterval(freelancerID);
  }
}

const freelancerID = setInterval(freelancerNxtLine, 3000);



// const stringArray = ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"];
// let currentIndex = 0;

// function printNextLine() {
//   const outputDiv = document.getElementById("output");
//   if (currentIndex < stringArray.length) {
//     outputDiv.innerHTML += stringArray[currentIndex] + "<br>";
//     currentIndex++;
//   } else {
//     clearInterval(intervalID);
//   }
// }

// const intervalID = setInterval(printNextLine, 1000); // Change 1000 to the desired interval in milliseconds




// const squares = document.querySelector("#squares");
// const squareElements = shapes.map((shape) => {
//   const element = document.createElement("li");
//   element.classList.add(shape.color, shape.size);
//   return element;
// });