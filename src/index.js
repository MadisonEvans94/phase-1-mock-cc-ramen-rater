// write your code here

/* 
TODO: 

CORE DELIVERABLES 
1. fetch from server
2. render ramen to the dom 
3. add event listener to ramenImg and console log details once clicked 
4. write a helper function "populateDetail" which populates the details div 
5. add form input and put data into menu (does not have to persist)

ADVANCED DELIVERABLES 
1. populate image with first ramen
2. update the featured ramen 
*/

document.addEventListener("DOMContentLoaded", init);

//constants from DOM
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const ramenDetailImg = document.querySelector("#ramen-detail img");
const ramenDetailName = document.querySelector("#ramen-detail h2");
const ramenDetailRestaurant = document.querySelector("#ramen-detail h3");
const ramenDetailRating = document.getElementById("rating-display");
const ramenComment = document.getElementById("comment-display");
const ramenForm = document.querySelector("form");
const inputName = document.getElementById("new-name");
const inputRestaurant = document.getElementById("new-restaurant");
const inputImg = document.getElementById("new-image");
const inputRating = document.getElementById("new-rating");
const inputComment = document.getElementById("new-comment");
const deleteRamen = document.getElementById("delete-ramen");

// render function
function renderRamen(ramenObj) {
  const ramenImg = document.createElement("img");
  ramenImg.src = ramenObj.image;
  ramenImg.addEventListener("click", () => {
    populateDetail(ramenObj);
  });
  ramenMenu.appendChild(ramenImg);
}

//form submission
ramenForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");

  console.log(
    inputComment.value,
    inputImg.value,
    inputName.value,
    inputRating.value,
    inputRestaurant.value
  );

  renderRamen({
    id: 6,
    name: inputName.value,
    restaurant: inputRestaurant.value,
    image: inputImg.value,
    rating: inputRating.value,
    comment: inputComment.value,
  });
});

//populate details on click
function populateDetail(ramenObj) {
  ramenDetailImg.src = ramenObj.image;
  ramenDetailName.textContent = ramenObj.name;
  ramenDetailRestaurant.textContent = ramenObj.restaurant;
  console.log(ramenDetailRating);
  ramenDetailRating.textContent = ramenObj.rating;
  ramenComment.textContent = ramenObj.comment;
}

//update the featured ramen
document.getElementById("edit-ramen").addEventListener("submit", (e) => {
  e.preventDefault();
  const updatedRating = e.target.children[2];
  const updatedComment = e.target.children[4];
  runUpdate(updatedRating, updatedComment);
});

function runUpdate(rating, comment) {
  console.log("updated");
  //display update
  document.getElementById("comment-display").textContent = comment.value;
  document.getElementById("rating-display").textConent = rating.value;
  //menu update?
  // ehhhh not enough time to do this one :(
}

//delete featured ramen
deleteRamen.addEventListener("click", () => {
  console.log(
    "ramen deleted :( ... i actually didn't have enough time to implement this one either, but I think I know how"
  );
});

// on load function (pulling data from server)
function init() {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((ramenObjArray) => {
      console.log(ramenObjArray);
      ramenObjArray.forEach((ramenObj) => {
        renderRamen(ramenObj);
        if (ramenObj.id === 1) {
          populateDetail(ramenObj);
        }
      });
    });
}
