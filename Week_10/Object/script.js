// 1 užduotis
// Sukurkite objekta phone ir savo nuožiūra jam priskirkite atirbutus. Galite pasinaudoti šia specifikacija: https://www.apple.com/iphone-13/specs/ 
// Objekto atributai gali turėti visas palaikomas JS reikšmes string, number, boolean, null, object.
// Pridėkite šiam objektui metoda, kuris atspausdina telefono pavadinima.

const phone = {
    name: "iPhone",
    model: "13 mini",
    color: "blue",
    capacity: 128,
    display: 6.4,
    camera: true,
    fullName: function(){
      return this.name + " " + this.model;
    }
  }

  const fName = phone.fullName();
  console.log(fName);
  
  // Sukurkite funkcija, kuri priimtų objektą kaip argumentą, ir išspausdintų visus objektų atributus ir jų reikšmes. Galite panaudoti šiektiek kūribiškumo ir atributus atskirti papildomais
  // console.log’ais kurie sukurtų lentelės vaizda pvz:
  // console.log(‘|-----------------------------------’
  // console.log(‘|’)
  // console.log(‘|---------------------------’)
  // good job! 
  function acceptObj(param){
    let attribute = "";
    let value = "";
    for (let x in param){
      attribute = x;
      value = param[x];
      console.log(`|--------------------------`);
      console.log(`|` + attribute + `|` + value);
      // console.log(`|--------------------------`);
      // console.log(`|` + value);
    }
  }
  
  acceptObj({name: "Kia", wheels: 4, status: "New", year: 2020, manual: true, colors: ["Blue", "Black", "Yellow"], maxDoors: Math.max(2, 4, 5)});
