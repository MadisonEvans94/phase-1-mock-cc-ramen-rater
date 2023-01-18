// write your code here

/* 
TODO: 
1. fetch from server
2. render ramen to the dom 
3. add event listener to ramenImg and console log details once clicked 
4. write a helper function "populateDetail" which populates the details div 
*/

document.addEventListener("DOMContentLoaded", init);
const imgSection = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const ramenDetailImg = document.querySelector("#ramen-detail img");
const ramenDetailName = document.querySelector("#ramen-detail h2");
const ramenDetailRestaurant = document.querySelector("#ramen-detail h3");
const ramenDetailRating = document.getElementById("rating-display");
const ramenComment = document.getElementById("comment-display");

// render function
function renderRamen(ramenObj) {
  const ramenImg = document.createElement("img");
  ramenImg.src = ramenObj.image;
  ramenImg.addEventListener("click", () => {
    populateDetail(ramenObj);
  });
  imgSection.appendChild(ramenImg);
}

//populate details on click
function populateDetail(ramenObj) {
  ramenDetailImg.src = ramenObj.image;
  ramenDetailName.textContent = ramenObj.name;
  ramenDetailRestaurant.textContent = ramenObj.restaurant;
  console.log(ramenDetailRating);
  ramenDetailRating.textContent = ramenObj.rating;
  ramenComment.textContent = ramenObj.comment;
}

// on load function (pulling data from server)
function init() {
  console.log("test");

  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((ramenObjArray) => {
      console.log(ramenObjArray);
      ramenObjArray.forEach((ramenObj) => renderRamen(ramenObj));
    });
}
