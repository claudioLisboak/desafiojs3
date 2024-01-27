/* Requerimiento 2
Transforma la siguiente funcióna en una arrow function de una línea.
Este ejercicio debe quedar en un archivo llamado`2_arrow.js` (1Punto)

let suma = function(a, b){ return a + b }

*/
const suma = (a,b) =>  a + b
const espera = document.querySelector("#text2")
espera.innerHTML = "el resultado de la suma es : " + suma(4,6)