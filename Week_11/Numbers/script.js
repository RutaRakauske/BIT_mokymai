// 1 užduotis
// Vienas jungtukas turi dvi kombinacijas: on ir off. Pavyzdžiui jei turime du jungtukus, tai iš viso įmanomų kombinacijų skaičius yra keturi 1 on + 2 on, 1 on + 2 off, 1 off + 2 on, 1 off + 2 off.  Sukurkite funkcija kuri grąžina imanomas kombinacijas nuo tam tikro jungtukų skaičiaus, jei yra duodamas jungtukų skaičius kaip funkcijos argumentas. 
console.log("**************** 1 užduotis ****************")

function jungtSk(buttonNo){
  return Math.pow(2, buttonNo);
}

console.log(jungtSk(3));


// 2 užduotis
// Sukurkite funkcija kuri kaip argumentų priimtų metus ir grąžintų boolean reikšmę ar tai keliamieji metai ar ne. (Keliamieji metai yra kas 4 metus);
console.log(`
**************** 2 užduotis ****************`)

function kelMetai(year){
  if (year % 4 === 0){
    return true;
  }
  return false;
}

console.log(kelMetai(2024));

// 3 užduotis
// Žinoma, kad iš skaičiaus sk galima ištraukti kvadratinę šaknį jeigu skaičius yra neneigiamas (sk≥0). Parašykite programą, kuri ištraukia kvadratinę šaknį iš duotojo skaičiaus sk. 
console.log(`
**************** 3 užduotis ****************`)

function extractNumber(numberToExtract){
  if (numberToExtract > 0){
    return Math.sqrt(numberToExtract);
  }
  return "Šaknies ištraukti negalima, nes įvestas neigiamas skaičius";
}

console.log(extractNumber(0));

// 4 užduotis
// Parašyti programą, kuri nustatytų, ar iš n degtukų galima sudaryti kvadratą. 
console.log(`
**************** 4 užduotis ****************`)

function square(matchesNo){
  if (matchesNo % 4 === 0){
    return "Kvadratą sudaryti galima";
  }
  return "Kvadrato sudaryti negalima";
}

console.log(square(8));
console.log(square(5));
console.log(square(12));

// 5 užduotis
// Parduotuvėje vyksta akcija, jeigu bet kurios prekės perkama daugiau nei 3 vienetai, taikoma 20 %  nuolaidą nuo bendros sumos. 
// Turime prekės kainą k ir perkamus vienetus vnt.  
console.log(`
**************** 5 užduotis ****************`)

function discounts(k, vnt){
  if (vnt >= 3){
    const discountPrice = (vnt * k) - ((vnt * k) * 0.2);
    return "Suma su nuolaida: " + discountPrice;
  }
  return "Suma (be nuolaidos): " + vnt * k;
}

console.log(discounts(2.44, 6));
console.log(discounts(2.44, 2));

// 6 užduotis
// Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių. Į mašiną telpa m dėžių. Parašykite programą,  kuri apskaičiuotų, kiek kartų k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į  parduotuvę.   
console.log(`
**************** 6 užduotis ****************`)

function transportRuns(total, carFits){
  return Math.ceil(total / 4);
}

console.log(transportRuns(9, 4));
console.log(transportRuns(8, 4));
console.log(transportRuns(21, 4));

// 7 užduotis
// Parašykite programą, kuri nustatytų kampo rūšį. Jeigu kampas lygus 90o tai statusis, jeigu 180o– ištiestinis, jeigu 360o– tai pilnutinis.   
console.log(`
**************** 7 užduotis ****************`)

function angleType(anglePercent){
  if (anglePercent > 0){
    if (anglePercent === 90){
      return "Statusis";
    }
    else if (anglePercent === 180){
      return "Ištiestinis";
    }
    else if (anglePercent === 360){
      return "Pilnutinis"
    }
    return "Pavadinimo nėra";
  }
  return "Kampo dydis turi būti teigiamas skaičius";
}

console.log(angleType(90));
console.log(angleType(-5));
console.log(angleType(360));
console.log(angleType(50));

// 8 užduotis
// Parašykite programą, kuri nustatytų, ar iš duotų trijų atkarpų (įvedami jų ilgiai) galima sudaryti  trikampį.    
console.log(`
**************** 8 užduotis ****************`)

function triangle(a, b, c){
  const maxNo = Math.max(a, b, c);
  if (a === maxNo){
    if (b + c > maxNo){
      return "Galima sudaryti trikampį";
    }
    else return "Negalima sudaryti trikampio";
  }
  else if (b === maxNo){
    if (a + c > maxNo){
      return "Galima sudaryti trikampį";
    }
    else return "Negalima sudaryti trikampio";
  }
  else {
    if (a + b > maxNo){
        return "Galima sudaryti trikampį";
    }
    else return "Negalima sudaryti trikampio";
  }
}

console.log(triangle(3, 4, 5));
console.log(triangle(3, 2, 5));

// 9 užduotis
// Programa, įvedus trikampio kraštinių ilgius, apskaičiuoja trikampio perimetrą ir išveda rezultatą į  ekraną.     
console.log(`
**************** 9 užduotis ****************`)


function calculate(){
  let a = prompt("Įveskite pirmą kraštinę: ");
  let b = prompt("Įveskite antrą kraštinę: ");
  let c = prompt("Įveskite trečią kraštinę: ");
  let perimetras = parseInt(a) + parseInt(b) + parseInt(c);
  return "Perimetras: " + perimetras;
}
console.log(calculate());

// 10 užduotis
// Ištiestinis kampas (180o) padalintas į tris kampus, žinomi tik du kampai. Programa apskaičiuoja  nežinomo kampo didumą ir rezultatą išveda į ekraną.     
console.log(`
**************** 10 užduotis ****************`)

function calcEdge(){
  let pirmas = prompt("Įveskite pirmą kampą: ");
  let antras = prompt("Įveskite antrą kampą: ");
  let x = 180 - parseInt(pirmas) - parseInt(antras);
  return "x kampas: " + x;
}

console.log(calcEdge());

// 11 užduotis
// Nuo metų pradžios praėjo d dienų (tarkime, kad pirmoji metų diena - pirmadienis). Parenkite programą,  kuri apskaičiuotų, kiek savaičių s praėjo nuo metų pradžios.     
console.log(`
**************** 11 užduotis ****************`)

function calcWeeks(){
  let dienos = prompt("Įveskite kiek dienų praėjo: ");
  let sav = Math.floor(parseInt(dienos) / 7);
  return "Praėjo " + sav + " savaitės";
}

console.log(calcWeeks());

// 12 užduotis
// Olimpiadoje dalyvavo n devintokų. Mokytoja nupirko m saldainių (m>n) ir išdalijo mokiniams po  lygiai. Po kiek saldainių s gavo kiekvienas mokinys ir kiek saldainių k liko mokytojai.     
console.log(`
**************** 12 užduotis ****************`)

function calcSweets(){
  let sweets = parseInt(prompt("Įveskite saldainių skaičių: "));
  let people = parseInt(prompt("Įveskite mokinių skaičių: "));
  let countSweets = Math.floor(sweets / people);
  let leftSweets = sweets % people;
  return "Išdalinta po " + countSweets + " saldainius. Liko: " + leftSweets;
}

console.log(calcSweets());

// 13 užduotis
// Kasininkė grąžą pirkėjui pabėrė centais ct. Reikia apskaičiuoti kiek tai yra eurų eg ir centų ctg.     
console.log(`
**************** 13 užduotis ****************`)

function calcEur(){
  let centai = parseInt(prompt("Įveskite centus: "));
  let eurai = Math.floor (centai / 100);
  let centaiLeft = centai % 100;
  return eurai + " Eur ir " + centaiLeft + " ct";
}

console.log(calcEur());


// 14 užduotis
// Lėktuvo pakilimo laikas h valandų ir min minučių. Skrydžio trukmė truk (minutėmis). Parenkite  programą, kuri apskaičiuotų kada lėktuvas nusileis: h1 ir min1.     
console.log(`
**************** 14 užduotis ****************`)

function calcFlight(){
  let h = parseInt(prompt("Įveskite pakilimo valanadą: "));
  let min = parseInt(prompt("Įveskite pakilimo minutes: "));
  let duration = parseInt(prompt("Įveskite skrydžio trukmę: "));
  let landingH = h + Math.floor(duration / 60);
  let landingMin = 0;
  if (min + (duration % 60) > 60){
    landingH = landingH + 1;
    landingMin = (min + (duration % 60)) - 60;
  }
  landingMin = min + (duration % 60);
  return "Lėktuvas nusileis " + landingH + " h ir " + landingMin + " min";
}

console.log(calcFlight());

// 15 užduotis
// Filmas prasideda h valandų ir min minučių. Filmo metu būna 3 reklamos po 10 minučių. Filmo  trukmė h1 valandų ir min1 minučių. Kada filmas pasibaigs?     
console.log(`
**************** 15 užduotis ****************`)

function calcMovieTime(){
  let start = prompt("Įveskite pradžios laiką: ");
  let duration = prompt("Įveskite trukmę: ");
  let startArray = start.split(":");
  let durationArray = duration.split(":");
  let finalh = parseInt(startArray[0]) + parseInt(durationArray[0]);
  let finalm = parseInt(startArray[1]) + parseInt(durationArray[1]) + 30;
  if (finalm >= 60){
    finalh = finalh + Math.floor(finalm / 60);
    finalm = finalm % 60;
  }
  console.log("Baigsis: " + finalh + ":" + finalm );
}

calcMovieTime();

// 15 užduotis
// Elektroninis laikrodis rodo laiką: valandas, minutes ir sekundes (h, m, s). Kiek laiko rodys laikrodis po  penkių sekundžių?

// Jei bus 10:59:58, tuomet reikai keisti visus 3 skaitmenis - 11:00:03
console.log(`
**************** 15 užduotis ****************`)

function calcTime(){
  let start = prompt("Įveskite valandas, minutes, sekundes: ");
  let timeArray = start.split(":");
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if ((parseInt(timeArray[2]) + 5) >= 60){
    minutes = parseInt(timeArray[1]) + 1;
    seconds = (parseInt(timeArray[2]) + 5) % 60;
    if (minutes >= 60){
      hours = parseInt(timeArray[0]) + 1; 
      minutes = "00";
      seconds = (parseInt(timeArray[2]) + 5) % 60;
      console.log(hours + ":" + minutes + ":" + seconds);
    }
    else {
      console.log(timeArray[0] + ":" + minutes + ":" + seconds); 
    }
  }
  else {
    seconds = parseInt(timeArray[2]) + 5;
    console.log(timeArray[0] + ":" + timeArray[1] + ":" + seconds);
  }
}

calcTime();






// 8.2
// 1 užduotis
// Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatus naudodami console.log()
console.log("**************** 1 užduotis ****************")

const firstVar = Math.floor(Math.random() * 5);
const secondVar = Math.floor(Math.random() * 5);
// console.log(firstVar);
// console.log(secondVar);

console.log(Math.max(firstVar, secondVar) / Math.min(firstVar, secondVar));

// 2 užduotis
// Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintamąjį turintį vidurinę reikšmę.
console.log(`
**************** 2 užduotis ****************`)

const firstNo = Math.floor(Math.random() * 26);
const secondNo = Math.floor(Math.random() * 26);
const thirdNo = Math.floor(Math.random() * 26);
// console.log(firstNo);
// console.log(secondNo);
// console.log(thirdNo);

let min = Math.min(firstNo, secondNo, thirdNo);
let max = Math.max(firstNo, secondNo, thirdNo);
if (firstNo !== min && firstNo !== max){
  console.log("Middle: " + firstNo);
}
else if (secondNo !== min && secondNo !== max){
  console.log("Middle: " + secondNo);
}
else if (thirdNo !== min && thirdNo !== max){
  console.log("Middle: " + thirdNo);
}
else{
  console.log("There are 2 same numbers, so no middle.")
}

// 3 užduotis
// Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log().
console.log(`
**************** 3 užduotis ****************`)

const a = Math.floor(Math.random() * 11);
const b = Math.floor(Math.random() * 11);
const c = Math.floor(Math.random() * 11);
// console.log(a);
// console.log(b);
// console.log(c);

function triangle(a, b, c){
    const maxNo = Math.max(a, b, c);
  if (a === maxNo){
    if (b + c > maxNo){
      return "Galima sudaryti trikampį";
    }
    else return "Negalima sudaryti trikampio";
  }
  else if (b === maxNo){
    if (a + c > maxNo){
      return "Galima sudaryti trikampį";
    }
    else return "Negalima sudaryti trikampio";
  }
  else {
    if (a + b > maxNo){
        return "Galima sudaryti trikampį";
    }
    else return "Negalima sudaryti trikampio";
  }
}

console.log(triangle(a, b, c));

// 4 užduotis
// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspausdinkite su console.log()
console.log(`
**************** 4 užduotis ****************`)

const randNo = Math.floor(Math.random() * 3);
const randNo2 = Math.floor(Math.random() * 3);
const randNo3 = Math.floor(Math.random() * 3);
const randNo4 = Math.floor(Math.random() * 3);

console.log(randNo);
console.log(randNo2);
console.log(randNo3);
console.log(randNo4);

function calcNo(array){
  let zero = 0;
  let one = 0;
  let two = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] === 0){
      zero++;
    }
    else if (array[i] === 1){
      one++;
    }
    else if (array[i] === 2){
      two++;
    }
  }
  console.log("Nulių - " + zero + " Vienetų - " + one + " Dvejetų - " + two);
}

calcNo([randNo, randNo2, randNo3, randNo4]);

// 5 užduotis
// Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspausdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspausdinkite “-” simbolius, o prie 0 “*” simbolius
console.log(`
**************** 5 užduotis ****************`)

function getRndInteger(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function signs(x){
  if (x > 0){
    return "+" + x + "+";
  }
  else if (x === 0){
    return "*" + x + "*";
  }
  else{
    return x + "-";
  }
}

console.log(signs(getRndInteger(-10, 10)));
console.log(signs(getRndInteger(-10, 10)));
console.log(signs(getRndInteger(-10, 10)));

// 6 užduotis
// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
console.log(`
**************** 6 užduotis ****************`)

function candleCalc(candleNo){
  if (candleNo > 1000){
    console.log("Žvakių skaičius: " + candleNo + " kainuoja: " + (candleNo - (candleNo * 0.03)) + " Eur");
  }
  else if (candleNo > 2000) {
    console.log("Žvakių skaičius: " + candleNo + " kainuoja: " + (candleNo - (candleNo * 0.04)) + " Eur");
  }
  else {
    console.log("Žvakių skaičius: " + candleNo + " kainuoja: " + candleNo + " Eur");
  }
}

candleCalc(getRndInteger(5, 3000));

// 7 užduotis
// Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinem reikšmėm nuo 0 iki 100. Apskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()
console.log(`
**************** 7 užduotis ****************`)

let randomN = Math.floor(Math.random() * 101);
let randomN2 = Math.floor(Math.random() * 101);
let randomN3 = Math.floor(Math.random() * 101);
// console.log(randomN);
// console.log(randomN2);
// console.log(randomN3);

let average = (randomN + randomN2 + randomN3)/3;
console.log("Average 1: " + ((randomN + randomN2 + randomN3)/3));

function calcAverage(array){
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++){
    if (incorrectNo(array[i]) > 0){
      sum = sum + array[i];
      counter++;
    }
  }
  console.log("Average 2: " + (sum / counter));
}

function incorrectNo(x){
  if (x < 10 || x > 90){
    return x = 0;
  }
  else {
    return x;
  }
}

calcAverage([randomN, randomN2, randomN3]);
