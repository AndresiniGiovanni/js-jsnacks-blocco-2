// **Snack1**
// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.

let button = document.getElementById("print");

function numeri() {
  const number = document.getElementById("numbers").value;
  let div = document.querySelector("#mydiv");

  if (number % 2 == 0) {
    console.log("Il numero é pari.");
    div.className = "div";
    div.innerHTML = "pari";

  } else {
    console.log("Il numero é dispari.");
    div.className = "div";
    div.innerHTML = "dispari";

    div.append(div);
  }

  button.addEventListener("click", numeri);
}
numeri();
