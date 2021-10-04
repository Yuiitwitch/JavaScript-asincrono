// CALLBACK


const operacionAsincrona = (argumentoQueRecibe) => {
    //el argumento que recibe resuelta ser una función.
    func();
}

const callback = (fun) =>{
    console.log("hola mundo!!");

}

operacionAsincrona(callback);


// CALLBCACK ASINCRONO

const callback = () => {
    console.log("Acabo de llegar");
}

setTimeout(() => {
    console.log("Hola mundo");
}, 3000);

// CALLBACK DENTRO DE CALLBACK

const relojLoco = () => {
 console.log("Pedro")

 setTimeout(() => {
     console.log("Jesus");

     setTimeout(() => {
         consola.log("Rafa");

         setTimeout(() => {
             console.log("Eva");
         }, 500);
     }, 3000);

     console.log("Judas");

 }, 4000);

 console.log("Pablo");
};

relojLoco();