// 1 uzduotis
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
console.log("***********1 uzduotis************")

const firstName = "John";
const lastName = "Travolta";

if (firstName > lastName){
  console.log(lastName);
}
else {
  console.log(firstName);
}

// 2 uzduotis
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms.
console.log("***********2 uzduotis************")

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

// 3 uzduotis
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
console.log("***********3 uzduotis************")

const initials = firstName.charAt(0) + lastName[0];
console.log(initials);

// 4 uzduotis
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
console.log("***********4 uzduotis************")

const threeLastLetters = firstName.slice(-3) + lastName.slice(-3);
console.log(threeLastLetters);

// 5 uzduotis
// Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
console.log("***********5 uzduotis************")

const text = "An American in Paris";
const regex = /a/gi;
console.log(text.replace(regex, "*"));

// 6 uzduotis
// Sukurti kintamąjį su stringu: “An American in Paris”. Suskaičiuoti visas “a” (didžiąsias ir mažąsias) raides. Rezultatą atspausdinti.
console.log("***********6 uzduotis************")

console.log((text.match(regex)).length);

// 7 uzduotis
// Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
console.log("***********7 uzduotis************")

const balsesRegex = /[aeiyou]/gi;
const text2 = "Breakfast at Tiffany's";
const text3 = "2001: A Space Odyssey";
const text4 = "It's a Wonderful Life";

console.log(text.replace(balsesRegex, ""));
console.log(text2.replace(balsesRegex, ""));
console.log(text3.replace(balsesRegex, ""));
console.log(text4.replace(balsesRegex, ""));

// 8 uzduotis
// Suskaičiuoti kiek string’e “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gasdinti Pietų Centro, geriant sultis pas save kvartale”.
console.log("***********8 uzduotis************")

const text5 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
const text6 = "Tik nereikia gasdinti Pietų Centro, geriant sultis pas save kvartale";


function compareWords(text){
  const array = (text.split(" "));
  const arrayLength = array.length;
  let counter = 0;
  let words = 0;
  while (counter !== arrayLength){
    if (array[counter].length <= 5){
      words++;
      counter++;
    }
    else {
      counter++
    }
  }
  console.log(words);
}

compareWords(text5);
compareWords(text6);

// 9 uzduotis
// Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
console.log("***********9 uzduotis************")

// const regexReplace = /a-z/g;
const latinLetters = "abcdefghijklmnopqrstuvwxyz";

function random(lettersList, stringLength){
  let counter = 0;
  let word = "";
  while(counter !== stringLength){
    let letter = lettersList[generateRandom(0, 25)];
    word = word + letter;
    counter++;
  }
  console.log(word);
}

function generateRandom(min, max) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor(rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

random(latinLetters, 3);

