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
console.log(`
**************** 15 užduotis ****************`)

function calcTime(){
  let start = prompt("Įveskite valandas, minutes, sekundes: ");
  let timeArray = start.split(":");
  if ((parseInt(timeArray[2]) + 5) >= 60){
    if ((parseInt(timeArray[1]) + 1) >= 60){
      
    }
  }
    
  console.log(finalTime);
}

calcTime()