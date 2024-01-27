/* 
1. Transforma esta declaración de función a una funciónde expresión.
Elejercicio debe quedar en un archivo nombrado`1_funcion.js`(1Punto)

 function example(a, b, c){
     return a+b
 }
*/

const example = function(a,b,c){
    return a+b+c
}

const texto = document.querySelector("#text1")
texto.innerHTML = "la suma de los numeros es: " +example(2,2,2)

