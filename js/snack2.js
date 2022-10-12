// **Snack2**
// Generatore di “nomi cognomi” casuali:
// il Grande Gatsby ha  una lista di nomi e una lista di cognomi,
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

let button = document.getElementById("namebtn");

let listainviti = [];

button.addEventListener("click", function () {
  document.querySelector("#names").innerHTML = "";
  let myArrayNames = [
    "Nicola",
    "Arturo",
    "Cecilia",
    "Angelina",
    "Raffaele",
    "Gianmarco",
    "Francesco",
    "Arturo",
    "Gabriele",
  ];
  let myArraySurnames = [
    "Bianchi",
    "Bianchi",
    "Pavanello",
    "Tocco",
    "Bertolucci",
    "Toscanini",
    "Marzano",
    "Lombardo",
    "Bassi",
  ];

  for (let i = 0; i < 10; i++) {
    // NOMI
    let randN = Math.floor(Math.random() * myArrayNames.length);
    let randomName = myArrayNames[randN];

    console.log(randomName);

    // COGNOMI
    let randC = Math.floor(Math.random() * myArrayNames.length);
    let randomSurnames = myArraySurnames[randC];

    console.log(randomSurnames);

    listainviti.push(randomName + " " + randomSurnames);
    console.log(listainviti);

    let prg = document.createElement("p");
    document.querySelector("#names").append(prg);
    prg.innerHTML = listainviti[i];
  }
  listainviti = [];
});
