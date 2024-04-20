// Add a bubble
// Date
// longest date

let bubbleData = [];

function createBubble() {
  // create a div and append bubble
  const bubble = document.createElement("div");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.appendChild(bubble);

  // get current date
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  let day = days[date.getDay()];

  // Style button
  bubble.id = "bubble";
  bubble.style.width = "100px";
  bubble.style.height = "100px";
  bubble.style.borderRadius = "50px";
  bubble.style.backgroundColor = "hsl(162, 95%, 62%)";
  bubble.style.display = "flex";
  bubble.style.alignItems = "center";
  bubble.style.justifyContent = "center";
  bubble.style.color = "black";
  bubble.style.fontFamily = "Franklin Gothic Medium";
  bubble.style.boxShadow = "5px 5px 5px hsl(162, 95%, 42%)";
  bubble.innerHTML = `${day}`;
  console.log("hello");

  // Push the data to an array
  bubbleData.push([day]);
  console.log(bubbleData);
}

let edit = document.getElementById("edit");
function changeText() {
  let data = prompt("Add habit");
  edit.textContent = `${data}`;
}

edit.addEventListener("click", changeText);
