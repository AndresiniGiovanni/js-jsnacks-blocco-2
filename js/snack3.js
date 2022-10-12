// **Snack3**
// Crea un array di numeri interi e fai la somma di tutti gli elementi
//  che sono in posizione dispari

let arr = [15, 23, 538, 755, 298, 690];
let calc = document.querySelector("#calcolo");

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    sum += arr[i];
  }
}

calc.innerHTML = "Somma numeri dispari: " + sum;
