//  1 uzduotis
// Martynas labai mėgsta saldainius. Mamos slėptuvėje berniukas rado m saldainių. Pirmą dieną jis suvalgė 1 saldainį, antrąją – 2, trečiąją 3. Kiekvieną kitą dieną jis suvalgydavo vienu saldainiu daugiau negu prieš tai buvusią. Per kelias dienas d Martynas suvalgys visus saldainius? Paskutinei dienai gali likti ir mažiau.
console.log("***************** 1 uzduotis ***************")

function saldainiai(m){
  let days = 0;
  while (days < m){
    m = m - days;
    days++;
  }
  console.log(days);
}

saldainiai(11);

//  2 uzduotis
// Šeima išsirengė į kelionę automobiliu. Jie pripildė kuro baką, kurio talpa t litrų ir nusprendė važiuoti tol, kol bake bus degalų. Lyginėmis kelionės dienomis automobilis suvartos n litrų degalų, o nelyginėmis - 2n litrų. Parašykite programą, kuri surastų, kiek dienų truks šeimos kelionė.
console.log("***************** 2 uzduotis ***************")

 function tripDays(t, n){
   let days = 0;
   while (t >= n){
     if (days % 2 === 0){
       t = t - n;
       days++;
     }
     else {
      t = t - (2 * n);
      days++;
     }
  }
  console.log(days);
}

tripDays(20, 5);

//  3 uzduotis
// Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2 skyrius, trečią – 3 skyrius ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.
console.log("***************** 3 uzduotis ***************")

function readingSpeed(chapterNo){
  let chapter = chapterNo;
  let days = 0;
  while (days <= chapter){
    chapter = chapter - days;
    days++;
  }
  console.log("Tadas visą knygą perskaitys per " + days + " dienas.");
  let avg = (chapterNo/days).toFixed(2);
    console.log("Tadas vidutiniškai per dieną perskaitė " + avg + " skyrius.");
}

readingSpeed(17);

//  4 uzduotis
// Danutė dirba buhaltere, todėl jai kartais reikia atlikti aritmetinius skaičiavimus su dideliais skaičių kiekiais. Ji skundžiasi, kad sunku ir nepatogu daug kartų spaudinėti skaičiuotuvo klavišus, todėl ji paprašė Jūsų, kad parašytumėte programą, kurios pradžioje pakaktų įvesti aritmetinio veiksmo simbolį, ir būtų galima įvedinėti skaičius, su kuriais bus atliekama ta operacija, operacijos pabaiga užfiksuojama įvedus nulį.

// Pavyzdžiui, Danutė išsirenka sumos skaičiavimo operaciją, tada įvedinėja skaičius, juos reikia
// sumuoti tol, kol įves nulį, tada baigti skaičiavimą ir pateikti rezultatą.
// Reikia sukurti skaičiuotuvą tokiems veiksmams atlikti: suma - 1, atimtis - 2, daugyba - 3, *didžiausia reikšmė sraute - 4, *mažiausia reikšmė sraute - 5. 

console.log("***************** 4 uzduotis ***************")

function calculate(){
  let number = "";
  let temp = 0;
  let operator = parseInt(prompt(`Įveskite vieną iš skaičių:
// 1 - suma;
// 2 - atimtis;
// 3 - daugyba;
// 4 - didžiausia reikšmė;
// 5 - mažiausia reikšmė
// 0 - sustabdyti.`));
  if (operator === 0){
    console.log("stop");
  }
  else if (operator === 1){
    do{
      number = parseInt(prompt("Įveskite skaičių"));
        if (number !== 0){
        temp = temp + number;
        console.log(number);
        }
        else{
        }
      }
    while (number !== 0);
    console.log("sum: " + temp);
  }
  else if (operator === 2){
    do{
      number = parseInt(prompt("Įveskite skaičių"));
        if (number !== 0){
        temp = temp - number;
        console.log(number); 
        }
        else{ 
        }
      }
    while (number !== 0);
    console.log("substraction: " + temp);
  }
  else if (operator === 3){
    temp = 1;
    do{
      number = parseInt(prompt("Įveskite skaičių"));
        if (number !== 0){
        temp = temp * number;
        console.log(number);
        }
        else{
        }
      }
    while (number !== 0);
    console.log("multiplication: " + temp);
  }
  else if (operator === 4){
    let arrayTemp = [];
    do{
      number = parseInt(prompt("Įveskite skaičių"));
        if (number !== 0){
        arrayTemp.push(number);
        console.log(number); 
        }
        else{
        }
      }
    while (number !== 0);
    temp = Math.max(...arrayTemp);
    console.log("max: " + temp);
  }
  else if (operator === 5){
    let arrayTemp = [];
    do{
      number = parseInt(prompt("Įveskite skaičių"));
        if (number !== 0){
        arrayTemp.push(number);
        console.log(number);
        }
        else{
        }
      }
    while (number !== 0);
    temp = Math.min(...arrayTemp);
    console.log("min: " + temp);
  }
  else {
    console.log("Incorrect data provided")
  }
}

calculate();

//  5 uzduotis
// Matematikos mokytoja paprašė sukurti matematikos užduotį pirmos klasės mokiniams. Pirmokai mokosi sudėti du skaičius. Programa turėtų sugeneruoti du skaičius iš intervalo [0; 10] ir paprašyti įvesti atsakymą. Pirmokui suklydus, programa turėtų pasiūlyti atsakymą įvesti dar kartą. 
console.log("***************** 5 uzduotis ***************")

// https://www.educative.io/edpresso/how-to-generate-a-random-number-between-a-range-in-javascript
function generateRandom(min = 0, max = 10) {
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

function learningMath(){
  let number1 = generateRandom();
  let number2 = generateRandom();
  let result = parseInt(prompt(number1 + `+` + number2 + `=`));
  while (result !== number1 + number2){
    result = parseInt(prompt(`Bandyk dar karta!
    ` + number1 + `+` + number2 + `=`));
  }
  console.log("Valio");
}

learningMath();

//  6 uzduotis
// Parašykite programą, kuri atspausdintų įvesto skaičiaus s skaitmenis (nuo galo).
// Kontroliniai duomenys:
// Įvesta: s = 123
// Gauta: 
// 3
// 2
// 1
console.log("***************** 6 uzduotis ***************")

function backwards(){
  let number = parseInt(prompt("Įveskite skaičių"));
  let stringNo = String(number);
  let lengthNo = stringNo.length - 1; // -1 nes .chartAt(0) pirmas teksto simbolis yra 0. While loope reikia tikrinti iki -1, nes lygiai taip pat pirmas simbolis naudojant .chartAt(0) yra nulis
  console.log(stringNo);
  while (lengthNo !== -1){
    let temp = stringNo.charAt(lengthNo);
    lengthNo--;
    console.log(temp);
  }
}

backwards();

//  7 uzduotis
// Parašykite programą, kuri apskaičiuotų duotojo skaičiaus a skaitmenų sumą s. 
// Kontroliniai duomenys:
// Įvesta: a = 65421
// Gauta: s = 18.
console.log("***************** 7 uzduotis ***************")

function numberSum(a){
  let stringA = String(a);
  let lengthA = stringA.length - 1;
  let sum = 0;
  while (lengthA !== -1){
    let temp = parseInt(stringA.charAt(lengthA));
    sum = sum + temp;
    lengthA--;
  }
  console.log(sum);
}

numberSum(65421);

//  8 uzduotis
// Parašykite programą, kuri apskaičiuotų duotojo skaičiaus a (nėra nulinių skaitmenų) skaitmenų sandaugą. 

// Kontroliniai duomenys:
// Įvesta: a = 611221
// Gauta: sandauga = 24.

console.log("***************** 8 uzduotis ***************")

function daugyba(a){
  let stringA = String(a);
  let lengthA = stringA.length - 1;
  let multiplication = 1;
  while (lengthA !== -1){
    let temp = parseInt(stringA.charAt(lengthA));
    multiplication = multiplication * temp;
    lengthA--;
  }
  console.log(multiplication);
}

daugyba(611221);

//  9 uzduotis
// Parašykite programą, kuri suskaičiuotų, kiek skaitmenų turi duotas skaičius a. 

// Kontroliniai duomenys:
// Įvesta: a = 6112211
// Gauta: suma = 7.

console.log("***************** 9 uzduotis ***************")

function symbolsCount(a){
  let stringA = String(a);
  let lengthA = stringA.length - 1;
  let count = 0;
  while (lengthA !== -1){
    let symbol = stringA.charAt(lengthA);
    let temp = symbol.length;
    count = count + temp;
    lengthA--;
  }
  console.log(count);
}

symbolsCount(6112211);

//  10 uzduotis
// Parašykite programą, kuri suskaičiuotų, kiek duotas skaičius a turi lyginių ir nelyginių skaitmenų. 

// Kontroliniai duomenys:
// Įvesta: a = 63258
// Gauta: lyginių 3, nelyginių 2.

console.log("***************** 10 uzduotis ***************")

function evenOdd(a){
  const stringA = String(a);
  let lengthA = stringA.length - 1;
  let even = 0;
  let odd = 0;
  while (lengthA !== -1){
    let temp = parseInt(stringA.charAt(lengthA));
    if (temp % 2 === 0){
      even++;
    }
    else {
      odd++;
    }
    lengthA--;
  }
  console.log("Lyginių " + even);
  console.log("Nelyginių " + odd);
}

evenOdd(63258);