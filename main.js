// Defining the cars variable which is an array of objects
let cars = [
  {
    make: "Chrysler",
    model: "Chrysler Sebring",
    price: "30000",
    description:
      "A 2023 Chrysler Sebring, convertible luxury seda, promotes comfort and sportiness at an affordable price.",
    image: "./assets/chrysler.jpeg",
  },

  {
    make: "Subaru",
    model: "Subaru Impreza",
    price :"12490",
    description: "A 2020 model of the new impreza with a 2500cc engine. An unbeatable combination of all-weather capability, advanced features, and quality engineering.",
    image: "./assets/subaru.jpeg",
  },
  {
    make: "Mazda",
    model: "Mazda Axela",
    price: "15010",
    description:
      "A compact car, available as a sedan and hatchback.It boasts a harmonious blend of performance, fuel efficiency, and functionality ",
    image: "./assets/mazda.jpeg",
  },
  {
    make: "Bentley",
    model: "Bentley Continental GT",
    price: "45875",
    description:
      "A luxury hybrid coupe, with a new Ultra-Performance Hybrid V8 powertrain, that brings you 0-100 km/h in 3.2 seconds.",
    image: "./assets/bentley.jpeg",
  },
];
// Displaying the cars with their details
function displayCars({ make, description, price, model, image, index }) {
  // By styling one card the stylingis implemented by all the other cards
  return `
      <div class="card1">
        <img src="${image}" alt="">
        <div class="card-title">
          <h3>${make}</h3>
          <div class="card-body">
            <p>${model}</p> </br>
            <p>$ ${price}</p> </br>
            <p>${description}</p></br>
            <button class="heart-btn" id="like-btn-${index}">Like</button>
            </div>
          </div>
  
      </div>
  `;
}
let cardholder = document.getElementById("card");
let carmodels = cars.map((car) => {
  return displayCars(car);
});
cardholder.innerHTML = carmodels;


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.heart-btn');

  buttons.forEach((likeBtn, index) => {
      let likeCount = document.getElementById(`like-count-${index}`);
      let count = 0; // Initial like count

      likeBtn.addEventListener("click", function() {
          likeBtn.classList.toggle("liked");

          if (likeBtn.classList.contains("liked")) {
              count++; //Counting the likes i.e adding
              likeBtn.textContent = "Liked";
          } else {
              count--; // Counting the likes i.e subtracting
              likeBtn.textContent = "Like";
          }

          likeCount.textContent = count; // Update the displayed count
      });
  });
});

