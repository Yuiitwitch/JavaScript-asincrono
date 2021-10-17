const funcionSuma = (num1, num2) => {
    return console.log (num1 + num2);
}
const funcionResta= (num1, num2) =>{
    return console.log (num1-num2)
}
const funcionMulti= (num1, num2) =>{
    return console.log (num1*num2)
}
const algoritmoPrueba =(num1,num2) =>{
    if (num1>num2){
        return console.log ("Es mayor")
    }
}

module.exports = {
    funcionSuma,
    funcionResta,
    funcionMulti,
    algoritmoPrueba
}


