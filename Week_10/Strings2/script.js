// 1 uzduotis
// Žodis bando slėptis tarp didžiųjų raidžių, parašykite funkcija kuri atpažintų pasislėpusį žodį ir jį grąžintų. Funkcijos rezultatą išspausdinkite ekrane. Žodžio kurio ieškome simboliai yra parašyti mažosiomis raidėmis, žodis pasislėpęs tarp didžiųjų raidžių, tačiau išlaiko tokį patį raidžių eiliškumą.
console.log(`
***********1 uzduotis************`)

function raskZodi(string){
  let word = "";
  let letter = "";
  let counter = 0;
  while(counter !== string.length){
    letter = string[counter];
    if (letter > letter.toUpperCase()){
      word = word + letter;
    }
    else {
    }
    counter++;
  }
  console.log(word);
}

raskZodi("ERFSFGpSFGSDFGaSDFGsSDFGlSERTaBBXpWEtFSAiADCXsXVB");
raskZodi("OIPjQEQDDaQDSCADvASFDCaCCHJKGHJsYTRRcWQrASDFiADFQpQRWĮWtTWEYETR");

// 2 uzduotis
// Duotame sakinyje yra žodis nemo Nemo, parašykite funkcija kuri nustatytų kuriame sakinio žodyje yra Nemo. Jei Nemo neradote, išspausdinkite “Negaliu rasti Nemo”, jei radote, išspausdinkite “Radau Nemo.
console.log(`
***********2 uzduotis************`)

function raskNemo(string){
  let counter = 0;
  let bool = false;
  let array = string.split(" ");
  while (counter !== array.length){
    // bool = (array[counter]).includes("Nemo");
    if((array[counter]).includes("Nemo")){
      console.log("Radau Nemo " + (++counter) + " žodyje!");
      bool = true;
    }
    else{
    }
    counter++;
  }
  if (bool){
  }
  else{
    console.log("Negaliu rasti Nemo");
  }
}

raskNemo("I am Notnemo");
raskNemo("I am finding Nemo !");
raskNemo("Nemo is me");

// 3 uzduotis
// Sukurkite funkcija kuri suskaičiuotų kiek žodyje yra balsių. Funkcijos priima string parametrą ir gražiną balsių skaičių. Funkcijos argumentuose bus dedamas tik vienas žodis. Funkcijos rezultatą išspausdinkite ekrane. 
// Pastaba: naudokite tik anglų k. abėcėle. Balsės: a, e, i, o, u, y. 
console.log(`
***********3 uzduotis************`)
const balsesRegex = /[aeiyou]/gi;

function countVowels(string){
  counter = 0;
  wordsCount = 0;
  while(counter !== string.length){
    if ((string[counter]).search(balsesRegex) === 0){
      wordsCount++;
    }
    else{
    }
    counter++;
  }
  console.log(wordsCount);
}

countVowels("Celebration");
countVowels("Palm");
countVowels("Prediction");

// 4 uzduotis
// Sukurkite funkcija kuri ištrintų visas balses iš sąkinio. Funkcija priima parametrą string, ir gražina ta patį string tik be balsių. Atsakymą išspausdinkite ekrane. 
console.log(`
***********4 uzduotis************`)

const sampleText = "I have never seen a thin person drinking Diet Coke.";

function trinkBalses(string){
  let deletedString = string.replace(balsesRegex, "");
  return deletedString;
}
console.log(trinkBalses(sampleText));

// 5 uzduotis - 1 dalis
// Sukurkite funkcija kuri surastų žodį “bomb”. “Bomb” gali būti paduotas įvairiai iš didžiosios ar mažosios raidės. Jei žodis bomb yra, tuomet išspausdinkite ekrane “Duck!!!” ir grąžinkite skaičių kuris pasakytų kelintas tai buvo žodis. Jei bomb nebuvo rastas, gražinkite -1.
console.log(`
***********5 uzduotis - 1 dalis************`)

function bomb(string){
  let bool = false;
  let array = string.split(" ");
  for (let i = 0; i < array.length; i++){
    if ((array[i].toLowerCase()).includes("bomb")){
      console.log("Duck!!! // " + (++i));
      bool = true;
    }
    else{
    }
  }
  if (bool){
  }
  else{
    console.log("There is no bomb, relax. // -1")
  }
}

bomb("There is a bomb.");
bomb("There is a BomB!!!");
bomb("This goes boom!!!");

// 5 uzduotis - 2 dalis
// Sukurkite funkcija “deminer” kuri priimtų du parametrus string sakinį ir callback funkcija check. Deminer funkcija pasinaudodama callback funkcija indentifikuotų ar yra bombą, sakinyje kurį priima kaip antra parametrą, ir jei taip, tuomet pakeistų žodį “bomb” su žodžiu “puf” ir grąžintų originalų sakinį su pakeistais žodžiais. Jei funkcija check nerastų bombos, tuomet tiesiog gražina orginalų sakinį. 
console.log(`
***********5 uzduotis - 2 dalis************`)

function deminer(string, callback){
  let replaced = "";
  if (callback){
    replaced = string.replace("bomb", "puf");
  }
  else{
    replaced = string;
  }
console.log(replaced);
}

function check(string){
  let bool = false;
  let array = string.split(" ");
  for (let i = 0; i < array.length; i++){
    if ((array[i].toLowerCase()).includes("bomb")){
      return bool = true;
    }
    else{
    }
  }
}

deminer("There is a bomb.", check("There is a bomb."));
deminer("There is a BomB!!!", check("There is a BomB!!!"));
deminer("This goes boom!!!", check("This goes boom!!!"));

// 6 uzduotis
// Sukurkite funkcija kuri priimtu žodį iš mažųjų raidžių ir grąžintų ta patį žodį iš didžiosios raidės. 
console.log(`
***********6 uzduotis************`)

function capitalize(string){
  let stringUpper = string.replace(string[0], string[0].toUpperCase());
  return stringUpper;
}

console.log(capitalize("labas"));
console.log(capitalize("jonas"));

// 7 uzduotis
// Sukurkite funkcija kuri patikrintų ar duotas sakinys yra “Title” sakinys, kai visi žodžiai prasideda iš didžiosios raidės. Funkcija gražina true, jei taip, ir false jei ne. 
console.log(`
***********7 uzduotis************`)

function checkTitle(string) {
  let bool = false;
  let found = string.match(/[A-Z]/g);
  if (found.length > 1){
    bool = true;
  }
  else{
  }
  return bool;
}

console.log(checkTitle("A Mind Boggling Achievement"));
console.log(checkTitle("Water is transparent"));

// 8 uzduotis
// Sukurkite funkcija kuri žodžius pakeistų emoji. 
// žodis emoji
// smile :D
// grin :)
// sad :(
// mad :P
console.log(`
***********8 uzduotis************`)

function emotify(string){
  let replaced = "";
  if (string.includes("smile")){
    replaced = string.replace("smile", ":D");
    return replaced;
  }
  else if (string.includes("grin")){
    replaced = string.replace("grin", ":)");
    return replaced;
  }
  else if (string.includes("sad")){
    replaced = string.replace("sad", ":(");
    return replaced;
  }
  else if (string.includes("mad")){
    replaced = string.replace("mad", ":p");
    return replaced;
  }
  else{
    replaced = string;
    return replaced;
  }  
}

console.log(emotify("Make me smile"));
console.log(emotify("Make me grin"));
console.log(emotify("Make me sad"));

// 9 uzduotis
// Sukurkite funkcija kuri paverstų skaičių į žodį. Funkcija priima parametrą skaičių, nuo 0 iki 9 ir gražiną žodinę skaičiaus reikšmė. Pamėginkite parašyti funkcija kurios viduje nebūtų if sąlygų. 
console.log(`
************9 uzduotis************`)
const string = "0-Nulis; 1-Vienas; 2-Du; 3-Trys; 4-Keturi; 5-Penki; 6-Šeši; 7-Septyni; 8-Aštuoni; 9-Devyni;";

function numberConverter(number){
  let index = string.indexOf(String(number));
  index = index + 2;//nes yra brūkšnelis
  let character = "";
  let text = "";
  while (character !== ";"){
    character = string[index];
    text = text + character;
    index++;
  }
  return text.replace(";", "");
}

console.log(numberConverter(0));