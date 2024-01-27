let teclaPulsada = "";
function capturarTecla(event) {
    const divKey = document.getElementById("key")
    const contenedor = document.querySelector("body")

  teclaPulsada = event.key;
 if(teclaPulsada == "a"){
    teclaPulsada ="pink"
    divKey.style.backgroundColor = teclaPulsada
 }else if(teclaPulsada == "s"){
    teclaPulsada = "orange"
    divKey.style.backgroundColor = teclaPulsada
 }else if(teclaPulsada == "d"){
    teclaPulsada = "lightblue"
    divKey.style.backgroundColor = teclaPulsada
 }else if(teclaPulsada == "q"){
teclaPulsada = "purple"
agregarDiv(teclaPulsada)
 }
 else if(teclaPulsada == "w"){
    teclaPulsada = "gray"
    agregarDiv(teclaPulsada)
 }else if(teclaPulsada == "e"){
    teclaPulsada = "brown"
    agregarDiv(teclaPulsada)
 }else{
    alert("letras permitidas q w e a s d" )
 }

 function agregarDiv(color){
    const nuevoDiv = document.createElement("div")
    contenedor.appendChild(nuevoDiv)
    nuevoDiv.style.backgroundColor = color
    nuevoDiv.style.width='200px'
    nuevoDiv.style.height='200px'
 }
}


document.addEventListener("keydown", capturarTecla);

const divKey = document.getElementById("key")
divKey.style.width = '200px'
divKey.style.height = '200px'
divKey.style.border = '1px solid black'


