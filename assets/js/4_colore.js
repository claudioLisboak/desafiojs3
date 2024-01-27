const div1 = document.getElementById("uno")
const div2 = document.getElementById("dos")
const div3 = document.getElementById("tres")
const div4 = document.getElementById("cuatro")

div1.style.width='200px'
div1.style.height='200px'
div1.style.backgroundColor ='blue'

div2.style.width='200px'
div2.style.height='200px'
div2.style.backgroundColor ='red'

div3.style.width='200px'
div3.style.height='200px'
div3.style.backgroundColor ='green'

div4.style.width='200px'
div4.style.height='200px'
div4.style.backgroundColor ='yellow'

const divPadre = document.querySelector(".flex-container")



divPadre.style.display='flex'
divPadre.style.gap ='10px'

const pintarDiv1 = () => div1.style.backgroundColor ='black'
div1.addEventListener("click", pintarDiv1) 

const pintarDiv2 = () => div2.style.backgroundColor ='black'
div2.addEventListener("click", pintarDiv2)

const pintarDiv3 = () => div3.style.backgroundColor ='black'
div3.addEventListener("click", pintarDiv3)

const pintarDiv4 = () =>div4.style.backgroundColor='black'
div4.addEventListener("click", pintarDiv4)


