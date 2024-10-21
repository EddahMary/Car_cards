let cars = [
  {
    make: "Chrysler",
    model: "Chrysler Sebring",
    description:
      "A 2023 Chrysler Sebring, convertible luxury seda, promotes comfort and sportiness at an affordable price.",
    image: "./assets/chrysler.jpeg",
  },

  {
    make: "Subaru",
    model: "Subaru Impreza",
    description: "A 2020 model of the new impreza with a 2500cc engine. An unbeatable combination of all-weather capability, advanced features, and quality engineering.",
    image: "./assets/subaru.jpeg",
  },
  {
    make: "Mazda",
    model: "Mazda Axela",
    description:
      "A compact car, available as a sedan and hatchback.It boasts a harmonious blend of performance, fuel efficiency, and functionality ",
    image: "./assets/mazda.jpeg",
  },
  {
    make: "Bentley",
    model: "Bentley Continental GT",
    description:
      "A luxury hybrid coupe, with a new Ultra-Performance Hybrid V8 powertrain, that brings you 0-100 km/h in 3.2 seconds.",
    image: "./assets/bentley.jpeg",
  },
];
function displayCars({ make, description, model, image }) {
  return `
      <div class="card1">
        <img src="${image}" alt="">
        <div class="card-title">
          <h3>${make}</h3>
          <div class="card-body">
            <p>${model}</p> </br>
            <p>${description}</p>  
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
