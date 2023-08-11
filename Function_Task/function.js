//1. Write a JavaScript function to print the “Hello World” message
function display() {
  console.log("Hello World");
}
display();

//2. Write a function that returns the square of a number
function squarenumber(number) {
  return number * number;
}
console.log(squarenumber(8));

//3. Write a function to convert Celsius to Fahrenheit
//Method 1
function fahrenheit(Celsius) {
  let result = (Celsius * 9) / 5 + 32;
  console.log(result, "Celsius to Fahrenheit");
}
fahrenheit(20);

//4. Write a function to find the area of a given Rectangle
function areaOfRect(width, height) {
  let area = width * height;
  console.log(area, "area of a given Rectangle");
}
areaOfRect(10, 20);

//5. Write a function to find the area and perimeter of a Circle
const PI = 3.141592;
function Circle(radius) {
  var areaCircle = PI * radius * radius;
  var perimeter = 2 * PI * radius;
  console.log(areaCircle, "area of a Circle");
  console.log(perimeter, "perimeter of a Circle");
}
Circle(2);

//6. Write a function to reverse a number
let value = 12345;
