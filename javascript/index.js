let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}

// Here x is 10
document.getElementById("letexample").innerHTML = x;

document.getElementById("operators").innerHTML = 2 ** 4;

let funcVal = myFunction(4, 3);
document.getElementById("funcVal").innerHTML = funcVal;

function myFunction(a, b) {
  return a * b;
}

const car = { type: "Fiat", model: "500", color: "white" };
document.getElementById("objString").innerHTML = JSON.stringify(car);
document.getElementById("objProperty").innerHTML = car.type;

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("textLength").innerHTML = text.length;

let textSlice = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
document.getElementById("slice").innerHTML = part;

function myReplaceFunction() {
  let text = document.getElementById("replaceText").innerHTML;
  document.getElementById("replaceText").innerHTML = text.replace(
    "Microsoft",
    "W3Schools"
  );
}

function myFunctionUpperCase() {
  let text = document.getElementById("upperCase").innerHTML;
  document.getElementById("upperCase").innerHTML = text.toUpperCase();
}

let textIndexOf = "Please locate where 'locate' occurs!";
let indexOf = textIndexOf.indexOf("locate", 15);
document.getElementById("indexOf").innerHTML = indexOf;

let firstName = "John";
let lastName = "Doe";

let tempLiteral = `Welcome ${firstName}, ${lastName}!`;

document.getElementById("literal").innerHTML = tempLiteral;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arrayToString").innerHTML = fruits.toString();

const fruitsPush = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruitsPush;
fruitsPush.push("Kiwi");
document.getElementById("demo2").innerHTML = fruitsPush;

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo3").innerHTML = points;

points.sort(function (a, b) {
  return b - a;
});
document.getElementById("demo4").innerHTML = points;

const numbers = [45, 4, 9, 16, 25];
const myFilterFunction = (value) => {
  return value > 18;
};
const over18 = numbers.filter(myFilterFunction);

document.getElementById("demo5").innerHTML = over18;

hois = 5;
elem = document.getElementById("demoHoisting");
elem.innerHTML = hois;

var hois;

let text1 =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

const obj1 = JSON.parse(text1);
document.getElementById("demoJSON").innerHTML =
  obj1.employees[1].firstName + " " + obj1.employees[1].lastName;

const letters = new Set(["a", "b", "c"]);

let textSet = "";
letters.forEach(function (value) {
  textSet += value + "<br>";
});

document.getElementById("set").innerHTML = textSet;

//
const fruitsMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

let textMap = "";
for (const x of fruitsMap.entries()) {
  textMap += x + "<br>";
}

document.getElementById("map").innerHTML = text;

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("class").innerHTML =
  "My car is " + myCar.age() + " years old.";

setTimeout(myCallbackFunction, 3000);

function myCallbackFunction() {
  document.getElementById("callback").innerHTML = "Hello there !!";
}

const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("Hello there !!");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("demoPromise").innerHTML = value;
});

async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hello there !!");
    }, 3000);
  });
  document.getElementById("demoAsyncAwait").innerHTML = await myPromise;
}

myDisplay();

function myDisplayer(something) {
  document.getElementById("callbackfunc").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

function myValidateFunction() {
  let x = document.getElementById("numb").value;
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("valid").innerHTML = text;
}

document.getElementById("browser").innerHTML =
  "Browser inner window width: " +
  window.innerWidth +
  "px<br>" +
  "Browser inner window height: " +
  window.innerHeight +
  "px";

document.getElementById("pixeldepth").innerHTML =
  "Screen pixel depth is " + screen.pixelDepth;

function myAlertFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demoalert").innerHTML = txt;
}

const textJSON = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(textJSON);
obj.birth = new Date(obj.birth);
document.getElementById("json").innerHTML = obj.name + ", " + obj.birth;

const objNew = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(objNew);
document.getElementById("demoStringify").innerHTML = myJSON;

const myJSONParse = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSONParse);
document.getElementById("demoParse").innerHTML = myObj.name;
