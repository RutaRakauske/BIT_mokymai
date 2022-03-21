//  1 uzduotis
// Apibrėžkite funkcija pavadinimu hello(), kurią pašaukus, atspausdintų konsolėje "Hello World"
console.log("********** 1 uzduotis ***********")

hello();

function hello() {
  console.log("Hello World");
}

//  2 uzduotis
// Patobulinkite prieš tai parašyta funkcija hello(), kuri priimtų parametrą vardas, ir ją pašaukus, išspausdintų konsolėje "Hello ${vardas}.". Pašaukite funkcija du kartus, kad išspausdintų jūsų vardą, o vėliau jūsų mėgstamo aktoriaus vardą. 
console.log("********** 2 uzduotis ***********")

helloWorld("Ruta");
helloWorld("Tom");

function helloWorld(vardas) {
  console.log("Hello", vardas);
}

//  3 uzduotis
// Sukurkite du kintamuosiu vardas ir amžius. Žemiau apibrėžkite funkcija prabegoMetai(), kuri kiekviena karta pašaukta pakeltų metus per vienetą ir konsolėje atspausdintų jūsų vardą ir metus. Pamėginkite prabėgti kelis metus iš eilės. 
console.log("********** 3 uzduotis ***********")

const vardas = "Ruta";
let amzius = 20;

function  prabegoMetai(){
  ++amzius;
}

prabegoMetai();
console.log(amzius);
prabegoMetai();
console.log(amzius);
prabegoMetai();
console.log(amzius);

//  4 uzduotis
// Apibrėžkite funkcija pavadinimu fizzAndBazz(), kuri priimtų viena parametra string ir ją pašaukus su argumentu "fizz",  konsolėje atspausdintų "bazz", bet ją pašaukus su parametru "bazz", tuomet konsolėje atspausdintų "fizz", kitu atveju spausdintų "Please provide fizz or bazz" 
console.log("********** 4 uzduotis ***********")

fizzAndBazz("kazkas");
fizzAndBazz("bazz");

function fizzAndBazz(word){
  switch(word) {
    case "fizz":
      console.log("bazz");
      break;
    case "bazz":
      console.log("fizz");
      break;
    default:
      console.log("Please provide fizz or bazz");
  }
}

//  5 uzduotis
// Apibrėžkite funkcija kuri priimtų tris parametrus numerius ir konsolėje atspausdintų mažiausią numerį. 
console.log("********** 5 uzduotis ***********")

numbers(1,1,3);
numbers(1,2,3);

function numbers(number1, number2, number3){
  if (number1<number2 && number1<number3) {
    (console.log("maziausias numeris -", number1));
  }
  else if (number2<number1 && number2<number3) {
    (console.log("maziausias numeris -", number2));
  } 
  else if (number3<number1 && number3<number2) {
    (console.log("maziausias numeris -", number3));
  }
  else {
    console.log("visi skaiciai turi buti skirtingi");
  }
}

//  6 uzduotis
// Apibrėžkite funkcija kuri priimtų tris parametrus numerius ir konsolėje atspausdintų jų aritmetinį vidurkį.
console.log("********** 6 uzduotis ***********")

aritmetinisVid(1, 0, 3);
aritmetinisVid(1, 254, 3);

function aritmetinisVid(no1, no2, no3){
  let vidurkis = (no1 + no2 + no3)/3;
  console.log(vidurkis);
}

//  7 uzduotis
// Apibrėžkite funkcija kuri priimtų parametra numerį ir grąžintų vienetu aukštesnę vertę. Priskirkite grąžinimo rezultatą kintamąjam ir išspausdinkite kintamojo reikšmę ekrane. 
console.log("********** 7 uzduotis ***********")

function onePlus(no1){
  return no1 = no1 + 1;
}
console.log(onePlus(2));

//  8 uzduotis
// Apibrėžkite funkcija kuri priimtų du parametrus tekstus A ir B ir patikrintų kuris tekstas turi daugiau raidžių. ("labas".length)Na Išspausdinkite masyvo pavadinimą (A arba B) ir jo narių skaičių ekrane.
console.log("********** 8 uzduotis ***********")

function raides(A, B){
  if (A.length > B.length){
    console.log("A - ", A.length);
  }
  else if (B.length > A.length){
    console.log("B -", B.length);
  }
  else {
    console.log("iveskite skirtingo ilgio zodzius");
  }
}
raides("pirmas", "antras");
raides("dvidesimt", "antras");

//  9 uzduotis
//  Ši funkcija turi grąžinti true jei x yra lygus 7.
console.log("********** 9 uzduotis ***********")

function isSeven(x) {
    return x == 7? true:false;
}
console.log(isSeven(7));
console.log(isSeven(10));

//  10 uzduotis
// Apibrėžkite funkcija isEqual, kuri priimtu du parametrus ir grąžintų boolean true jeigu abu parametrai yra strict lygūs arba false jei ne. Pasitikrinkite funkcijos veikimą su console.log.
// isEqual(1, true) ➞ false
// isEqual(1,  1) ➞ true
console.log("********** 10 uzduotis ***********")

function isEqual(x, y){
  if (x===y) {
    return bool = true;
  }
  else {
    return bool = false;
  }
}
console.log(isEqual(1, true));
console.log(isEqual(1, 1));

//  11 uzduotis
// Apibrėžkite funkcija kuri priimtų tris parametrus prob, prize, pay ir grąžintų true jeigu prob padauginus iš prize  yra daugiau už pay, kitu atveju grąžintų false. 
console.log("********** 11 uzduotis ***********")

function price(prob, prize, pay){
  if ((prob * prize) > pay) {
    return bool = true;
  }
  else {
    return bool = false;
  }
} 

console.log(price(2,10,19));
console.log(price(2,3,19));

//  12 uzduotis
// Apibrėžkite funkcija kuri  priimtu parametrą minutes ir grąžintų vertę sekundėmis. Sukurkite kelis kintamuosius  šaukiant šią funkciją. Vėliau atspausdinkite kintamųjų reikšmes konsolėje.  
console.log("********** 12 uzduotis ***********")

function convertMinutes(minutes){
  let seconds = minutes * 60;
  return seconds;
}

const halfMin = convertMinutes(0.5);
console.log(halfMin);
const five = convertMinutes(5);
console.log(five);
const sixtyFive = convertMinutes(65);
console.log(sixtyFive);

//  13 uzduotis
// Apibrėžkite funkcija kuri priimtų numerį metus ir atspausdintų konsolėje ar tai lyginiai metai ar ne. 
console.log("********** 13 uzduotis ***********")

function evenYear(year){
  if (year % 2 === 0){
    console.log("Lyginis");
  }
  else {
    console.log("Nelyginis")
  }
}
evenYear(2002);
evenYear(2001);

//  14 uzduotis
//     Apibrėžkite funkcija kuri priimtų du parametrus, nuvažiuoti kilometrai ir benzino litro kaina, ir apskaičiuotų kiek jums kainavo kelionė.  Automobilio kuro vartojimą priskirkite kintamajam, o jo vertę pasirinkite pagal jūsų turimo automobilio kuro vartojimą.
console.log("********** 14 uzduotis ***********")

function fuelPrice(km, price){
  const consumption = 5;
  let total = km/(100/consumption) * price;
  return total;
}

console.log(fuelPrice (200, 1.80));