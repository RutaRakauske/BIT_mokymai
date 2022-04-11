// 1 užduotis
// Sukurkite nauja string masyva su 3mis vaisiais.
console.log(`**************** 1 užduotis ****************`)

const fruits = ["apple", "orange", "banana"];
console.log(fruits);

// 2 užduotis
// Panaudokite skirtingus masyvo kurimo budus.
console.log(`
**************** 2 užduotis ****************`)

const fruits2 = ["apple", "orange", "banana", ""];
const fruits3 = [];
fruits3 [0] = "apple";
fruits3 [1] = "orange";
fruits3 [2] = "banana";
const fruits4 = new Array("apple", "orange", "banana")

// 3 užduotis
// Išspausdinkite pirma ir paskutini masyvo narį ekrane. 
console.log(`
**************** 3 užduotis ****************`)

console.log("Pirmas narys: " + fruits.shift() + ". Paskutinis narys: " + fruits.pop());

// 4 užduotis
// Atspausdinkite kiekviena masyvo narį ekrane.  
console.log(`
**************** 4 užduotis ****************`)

for(let i = 0; i < fruits2.length; i++){
  console.log(fruits2[i]);
}

// 5 užduotis
// Pakeiskite antra ir paskutini narį naujais nariais (priskirkite kitokius vaisiu pavadinimus.)  
console.log(`
**************** 5 užduotis ****************`)

fruits2[2] = "melon";
fruits2[fruits2.length - 1] = "peach";
console.log(fruits2);

// 6 užduotis
// Išspausdinkite ekrane masyvo ilgį. 
console.log(`
**************** 6 užduotis ****************`)

console.log(fruits2.length);

// 7 užduotis
// Pridėkite naują masyvo narį jo pabaigoje. 
console.log(`
**************** 7 užduotis ****************`)

fruits2.push("lemon");
console.log(fruits2);

// 8 užduotis
// Pridėkite naują masyvo narį pradžioje.  
console.log(`
**************** 8 užduotis ****************`)

fruits2.unshift("pomegranate");
console.log(fruits2);

// 9 užduotis
// Ištrinkite paskutinį masyvo narį.  
console.log(`
**************** 9 užduotis ****************`)

fruits2.pop();
console.log(fruits2);

// 10 užduotis
// Naudodami cikla sukurkite naują masyvą kurį sudarytų nariai iš pirmojo masyvo kurie turi nelyginį indeksą. 
console.log(`
**************** 10 užduotis ****************`)
const newFruits = [];

for (let i = 0; i < fruits2.length; i++){
  if (i % 2 !== 0){
    newFruits.push(fruits2[i]);
  }
  else{
    console.log("lyginis");
  }
}

console.log(newFruits);

// 11 užduotis
// apsukite masyvo narių eiliškumą atvirkščiai.
console.log(`
**************** 11 užduotis ****************`)

console.log(fruits2.reverse());

// 12 užduotis
// Panaudodami cikla apsukite naujo sukurto masyvo narius/žodžius eilės tvarka (abcd->dcba)
// Hint: panaudokite split() funkcija.

console.log(`
**************** 12 užduotis ****************`)

for (let i = 0; i < fruits2.length; i++){
  fruits2.splice(i, 0, fruits2[(fruits2.length - 1)]);
  fruits2.pop();
}
console.log(fruits2);

// 13 užduotis
// Sujunkite šiuos masyvus į viena: ['ant', 'bison', 'camel', 'duck', 'bison'] ir ['horse', 'cow', 'cat']

console.log(`
**************** 13 užduotis ****************`)

const animals = ['ant', 'bison', 'camel', 'duck', 'bison'];
const homeAnimals = ['horse', 'cow', 'cat'];

const mergeAnimals = [].concat(animals, homeAnimals);
console.log(mergeAnimals);

// 14 užduotis
// Sukurkite masyva iš 200 narių, kurį sudarytų skaičiai nuo 1 iki 200. 
console.log(`
**************** 14 užduotis ****************`)

const twoHundreds = [];

for (let i = 1; i < 201; i++){
  twoHundreds.push(i);
}
// console.log(twoHundreds);

// 15 užduotis
// Naujai sukurto masyvo kiekvieno nario skaičių padauginkite iš 2-jų. 
console.log(`
**************** 15 užduotis ****************`)

for (let i = 1; i < twoHundreds.length; i++){
  twoHundreds[i] = twoHundreds[i] * 2;
}
// console.log(twoHundreds);