/* Requerimiento  2

Se tiene como base el siguiente ejercicio que cambia el color de fondo de un elemento
de HTML al hacerle click (3Puntos)

<div id="ele1">
    hello
</div>
<script>
function pintar(){
    ele.style.backgroundColor = 'yellow' 
} 
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar)
 </script>
*/
/* 
El código debe estar en 2 archivos: 
- pintar.html 
- script.js.
El script debe estar dentro de la carpeta assets/js(1Punto). 
Para obtener el puntaje debes entregar los archivos cumplimiendo 
la estructura pedida en conjunto con los requerimientos 3.2 y 3.3

*/
/*ejercicio 2.1*/
const ele = document.getElementById("ele1")

function pintar(){
    ele.style.backgroundColor = "yellow"
    }
    ele.addEventListener("click", pintar)

/* ejercico2.2*/

function pintar2(element){
    element.style.backgroundColor = "red"
    }
    ele.addEventListener("click", function(){pintar2(ele)})
 

/*ejercicio  2.3*/
function pintar3(elemento, color="green"){
    elemento.style.backgroundColor = color
}
ele.addEventListener("click", () => {
    pintar3(ele,"red")
})