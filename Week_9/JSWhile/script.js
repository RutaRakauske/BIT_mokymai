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

let operator = "";
let number = "";
let no = "";
let sum = 0;

do{
  number = prompt("Įveskite skaičių", no);
  sum = sum + Number(number);
  console.log(sum);
}
while (no === 0);


// function calculator(operatorNo){
//   if (operatorNo == undefined){
//     console.log(`Įveskite vieną iš skaičių:
// 1 - suma;
// 2 - atimtis;
// 3 - daugyba;
// 4 - didžiausia reikšmė;
// 5 - mažiausia reikšmė.`);
//   }
//   else if (operatorNo === 0){
//     console.log("Stop");
//   }
//   else{
//     if (operatorNo === 1){
//       let sum = 0;
//       do{
//         function calc(number){
//         sum = sum + number;
//           return sum;
//         }
//       }
//       while(operatorNo === 0);

      
//     }
//     else if (operatorNo === 2){
      
//     }
//     else if (operatorNo === 3){
      
//     }
//     else if (operatorNo === 4){
      
//     }
//     else {
      
//     }
//   }
// }

// calculator(1);

