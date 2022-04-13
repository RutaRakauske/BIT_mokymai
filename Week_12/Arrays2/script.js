// 1 užduotis
// Given two arguments, return an array which contains these two arguments.
// makePair(1, 2) ➞ [1, 2]
console.log(`**************** 1 užduotis ****************`)

function makePair(a, b) {
  const pairArray = [];
  pairArray.splice(0, 0, a, b);
  return pairArray;
}

console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

// 2 užduotis
// Write a function to add 1 to every element in the array.
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
console.log(`
**************** 2 užduotis ****************`)

function incrementItems(inputArray) {
  const updatedArray = inputArray.map(element => element + 1);
  console.log(updatedArray);
}
incrementItems([0, 1, 2, 3]);
incrementItems([2, 4, 6, 8]);
incrementItems([-1, -2, -3, -4]);

// 3 užduotis
// Write a function that takes an array and returns the types of values (data types) in a new array.
// arrayValuesTypes([1, 2, "null", []])➞ ["number", "number", "string", "object"]
console.log(`
**************** 3 užduotis ****************`)

function arrayValuesTypes(inputArray) {
  const updatedArray = inputArray.map(element => typeof element);
  console.log(updatedArray);
}

arrayValuesTypes([1, 2, "null", []]);
arrayValuesTypes(["214", true, false, 2, 2.15, [], null]);
arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]);

// 4 užduotis
// Duotas masyvas 
// Naudokite .splice() arba .slice()
// -> Idėkite du naujus masyvo narius 'Pietus', 'Dar biskeli Darbas', tarp 'Darbas' ir 'Poilsis'. Isspausdinkite masyva ekrane. 
//    -> Istrinkite Manksta is masyvo. 
//    -> Sukurkite funkcija kuri priimtu parametra masyva ir istrintu paskutinius du narius is masyvo ir grazintu masyva atgal. Jei masyvas turi maziau neigu du narius, grazintu tuscia masyva. 

console.log(`
**************** 4 užduotis ****************`)

const rutina = [
  'Kelimasis',
  'Manksta',
  'Pusryciai',
  'Darbas',
  'Poilsis',
  'Miegas',
];
// ->
rutina.splice(4, 0, "Pietūs", "Dar biškeli Darbas");
console.log(rutina);
// ->
rutina.splice(1, 1);
console.log(rutina);
// ->
function delete2(inputArray) {
  const arr = inputArray.slice();
  arr.splice(-2, 2);
  return arr;
  // Ilga salyga todel ir pasimeciau :) 
  //   if (inputArray.length < 2) {
  //     inputArray.splice(0, 2);
  //     return inputArray;
  //   }
  //   else {
  //     const arrayLength = inputArray.length;
  //     inputArray.splice(arrayLength - 2, 2);
  //     return inputArray;
  //   }
  }

  console.log(delete2(rutina));
  console.log(delete2(["miegas"]));

  // 5 užduotis
  // Duotas masyvas 
  //     -> Sukurkite nauja kintamaji fruitsBasket, kurio reiksme butu 'fruits', masyvo kopija. 
  //     -> Atlikite fruits.push("blueberies"); veiksmą.
  //     -> Išspausdinkite fruits ir fruitsBasket masyvus, ar reikšmė pasikeitė? Jei reikšmės abiejų masyvų lygios tuomet kopija nebuvo teisinga. 
  //     -> Sukurkite nauja masyva iš Orange ir Apple. Išspausdinkite nauja masyva ekrane. 
  //     -> Išrušiuokite fruits masyvo narius pagal abėcėlę. A-Z
  //     -> Išrušiuokite fruits masyvo narius abėcėlės atvirkštine tvarka. Z-A.

  console.log(`
**************** 5 užduotis ****************`)
  // -> 
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const fruitsBasket = fruits.slice();
  // -> 
  fruits.push("blueberies");
  console.log(fruits);
  console.log(fruitsBasket);
  // -> 
  const newFruits = new Array("Orange", "Apple");
  console.log(newFruits);
  // -> 
  // case-sensitive sorting
  fruits.sort();
  console.log(fruits);

  // case-insensitive sorting
  const sortLowerAZ = (a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1;

  fruits.sort(sortLowerAZ);
  console.log(fruits);
  // -> 
  const sortOptions = (a, b) => a > b ? -1 : 1;

  fruits.sort(sortOptions);
  console.log(fruits);

  // case-insensitive sorting
  const sortLowerZA = (a, b) => a.toLowerCase() > b.toLowerCase() ? -1 : 1;

  fruits.sort(sortLowerZA);
  console.log(fruits);

  // 6 užduotis
  // Duotas masyvas 
  // -> Išrušiuokite cities masyva pagal paskutine miesto pavadinimo raidę. ['New Haven', 'Costa Mesa'] => ['Costa Mesa', 'New Haven' ]
  //     Bonus: apsukite miestu pavadinimų raides vietomis.  'New Haven' => nevaH weN.
  // -> Sukurkite naują masyvą kuris būtų sudarytas iš kiekvieno miesto pirmų raidžių, raidės būtų pateiktos kaip mažosios. 
  // -> Sukurkite funkcija kuri kaip parametrą priimtų raidę, ir grąžintų visus miestus, kurie prasideda šita raide. Jei miesto tokia raide nėra, grąžintų tuščią masyvą. 
  // -> Sukurkite funkcija kuri priimtų parametrą pavadinimas: string, ir atspausdintų ekrane kad toks miestas sąraše yra, arba tokio miesto sąraše nėra. 

  console.log(`
**************** 6 užduotis ****************`)

  const cities = [
    'New Haven', 'Costa Mesa', 'Fremont', 'Irvine', 'Macon', 'Cambridge', 'Pueblo', 'Kailua', 'Chula Vista', 'Cathedral City', 'Modesto', 'Montgomery', 'Elkhart', 'Fairfield', 'Frederick', 'Jacksonville', 'Pensacola', 'North Port', 'Muskegon', 'Lakeland', 'Cape Coral', 'Hickory', 'Reno', 'Norfolk', 'Hesperia', 'Fort Walton Beach', 'Independence', 'Concord', 'Port Orange', 'Portsmouth', 'Escondido', 'Appleton', 'Downey', 'Clarksville', 'Ontario', 'Mesa', 'Philadelphia', 'Lubbock', 'Provo', 'Roseville', 'New Orleans', 'Lewisville', 'Nashua', 'Hayward', 'Dayton', 'McAllen', 'Fort Smith', 'Athens', 'Havre de Grace', 'Boston', 'Redding', 'Salt Lake City', 'Newburgh', 'Little Rock', 'New London', 'Bonita Springs', 'Amarillo', 'Greenville', 'Fresno', 'Billings', 'Orlando', 'Kissimmee', 'Las Cruces', 'Anaheim', 'McHenry', 'Fontana', 'Odessa', 'Memphis', 'Ann Arbor', 'Poughkeepsie', 'Hemet', 'Danbury', 'Lakewood'
  ];

  // ->
  const sortLastLetter = (a, b) => a.charAt(a.length - 1) > b.charAt(b.length - 1) ? 1 : -1;

  cities.sort(sortLastLetter);
  console.log(cities);

  // -> Bonus
  const backwardsCities = cities.map(element => {
    // const splitEl = element.split("");
    // const reverseEl = splitEl.reverse();
    // const jointEl = reverseEl.join("")
    // return jointEl;
    return element
      .split("")
      .reverse()
      .join("");
  });
  console.log(backwardsCities);

  // ->
  const citiesLetter = cities.map(element => element[0].toLowerCase());

  console.log(citiesLetter);

  // ->
  function filterArray(cityLetter) {
    const fillteredCities = cities.filter(element => element[0].toLowerCase() === cityLetter.toLowerCase());
    return fillteredCities;
  }

  console.log(filterArray("x"));
  console.log(filterArray("s"));

  // ->
  function findCity(cityName) {
    const fillteredCities = cities.filter(element => element.toLowerCase() === cityName.toLowerCase());
    if (fillteredCities.length > 0) console.log("Miestas yra sąraše");
    else console.log("Miesto sąraše nėra");
  }

  findCity("Lakeland");
  findCity("Lakelandx");

  // 7 užduotis
  // Sukurkite nauja masyva panaudodami Array konstruktorių ir fill funkcija. Pamėginkite apie šį metoda surasti informacija https://developer.mozilla.org/en-US/docs/Web/JavaScript užrašuose. 
  // -> Užpildykite array skaičiais nuo 1 iki 100;
  // -> Parašykite scripta kuris masyvui sukeistų vietomis kiekvienus du narius. [1,2,3,4,5,6] => [2,1,4,3,6,5]
  // Panaudokite .reduce();
  console.log(`
**************** 7 užduotis ****************`)
  // ->
  const numberArray = new Array(100).fill(1).map((element, index) => ++index);

  console.log(numberArray);

  // ->
  // By setting the initial value to an empty array we can then push each value (current). Return previous to empty array.
  // Guide of reduce - https://www.freecodecamp.org/news/reduce-f47a7da511a9/
  const changedNo = numberArray.reduce((previous, current) => {
    if (current % 2 === 0) {
      previous.push(current - 1);
      return previous;
    }
    else {
      previous.push(current + 1);
      return previous;
    }
  }, []);

  console.log(changedNo);