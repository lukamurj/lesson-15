//first assignment
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
}

//second assignment
for (let i = 0; i < 100; i++) {
  console.log(i);
}

//third assignment
let a = 0;
while (a < 50) {
  console.log(a);
  a++;
}

//forth assignment
a = 0;
do {
  console.log(a);
  a++;
} while (a < 150);

//fifth assignment

let Arr = [];
for (let i = 1; i < 1000; i++) {
  Arr.push(i * i);
  //Arr.push(i ** 2);
}
