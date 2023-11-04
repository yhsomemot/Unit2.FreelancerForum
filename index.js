//The program initializes an array of possible names and an array of possible occupations
//we could map but we would end up with duplication which we don't want. (so its better to separate it all.)

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",];

const occupations = ["gardener", "programmer", "teacher", "driver"];

//The  program initializes an array of at least two freelancers with names, occupations, and starting prices.

const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  //deleted the other because we already have them 
];

//document.query selector is correctly used to select existing DOM (rubric pseudo code.)
const averagePriceSpan = document.querySelector("span");
const freelancersTbody = document.querySelector("tbody");

// console.log(averagePriceSpan.textContent) to see that the span is correct.
// console.log(freelancersTbody)

//a function is written that correctly calculates the average startin price of the freelancers array.
function getAverageStartingPrice() {
  return (freelancers.reduce(
    (total, freelancer) => freelancer.price + total, 0) / freelancers.length
  ).toFixed(0); //to make the decimal place to zero. 
}
//console.log(getAverageStartingPrice())

//place render below because everything else needs to be defined first ^^^ (render is the final output?)
//The initial array of freelancers is rendered on to the page.
function render() {
  //render the freelancers
  const freelancerRows = freelancers.map((freelancer) => {
    const freelancerRow = document.createElement("tr");
    freelancerRow.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>${freelancer.price}</td>
  `;

    return freelancerRow;
  });
  freelancersTbody.replaceChildren(...freelancerRows);
  //console.log(freelancerRows)

  //update the average price
  averagePriceSpan.textContent = getAverageStartingPrice();
}
render();


//a function is written that generates a freelancer with a random name, occupation, and starting price.
//this object is pushed into the freelancers array.
function addFreelancer() {
  if (freelancers.length < 3) {
    freelancers.push({
      name: "Carol",
      occupation: "programmer",
      price: 70,
    });

    return; //if we wanted to include carol right after and before the random names 
  }
  const name = names[Math.floor(Math.random() * names.length)]; //getting a random index?
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 75) + 25; //never get a price that is less than 25
  freelancers.push({ name, occupation, price });
}

//An interval is set to add a freelancer and rerender every few seconds. 
setInterval(() => {
  addFreelancer();
  render();
}, 3000);






//do I have to make one for each section of the array?

// function freelancerNxtLine() {
//   const freelancerPost = document.querySelector("#freelancerPost");
//   if (currentIndex < freelancers.length) {
//     freelancerPost.innerHTML += freelancers[currentIndex] + "<br>";
//     currentIndex++;
//   } else {
//     clearInterval(freelancerID);
//   }
// }

// const freelancerID = setInterval(freelancerNxtLine, 3000);



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