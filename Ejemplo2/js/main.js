let numeros= [];

let botonSuma = document.getElementById("suma");
let botonResta = document.getElementById("resta")
let botonMulti = document.getElementById("multi")
let lcd = document.getElementById("lcd")

const addNumber = (numerPulsado) => {
    if(numeros.length < 2){
        numeros.push(numerPulsado);
        console.log("Entro")
    }else{
        console.log("ya has escojido los numeros previamente", numeros)
    }
}

//Evento que esta siendo permanentemente  vigilado & en escucha para JavaSript

botonSuma.addEventListener('click', () => {

    let resultado = parseInt(numeros[0]) + parseInt(numeros[1])

    lcd.innerHTML = `${resultado}` ;
})

botonResta.addEventListener('click', () => {

    let resultado = parseInt(numeros[0]) - parseInt(numeros[1])

    lcd.innerHTML = `${resultado}` ;
})

botonMulti.addEventListener('click', () => {

    let resultado = parseInt(numeros[0]) * parseInt(numeros[1])

    lcd.innerHTML = `${resultado}` ;
})

