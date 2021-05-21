const car = {
  company: "현대",
  model: "그랜저",
  price: 5000000
}

console.log(car);

const mycar = {
  ...car
};

console.log(car === mycar);