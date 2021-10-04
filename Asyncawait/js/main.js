// //uso de async await
// //funcion en contexto asíncrono
// const contar= async (numeroUser) =>{
//     try{

//         for (let index = 0; index < numeroUser; index++) {
//             console.log(i);
//         }
//     } catch(error){
//         console.log(error);
//     }
// }


// let numeroUser = parseInt(prompt("Estimado usuario me podria decir usted un numero"));

// setTimeout(() =>{
//     contar(numeroUser);
// },5000);

// contar(numeroUser*2) ;

// --------------------------------------------------------------------------

// // -Primero pedimos un número al usuario mediante prompt. Ese número se deberá de mostrar automáticamente dividido entre dos.

// -A los 5 segundos de haber pedido el número original, lo mostraremos (el original) multiplicado por dos.

// -A los 3 segundos de mostrar el número multiplicado por dos, lo mostraremos dividido entre tres.


const contar = async (numeroUser) =>{
    try{
        for (let index = 0; index < numeroUser; index++) {
            console.log(i);
            
        }

    } catch(error){
        console.log(error)
    }
}

let numeroUser = parseInt(prompt("Indicame un número"));
let r2 = 0;
console.log(numeroUser/2);

setTimeout(() =>{
    resultado = numeroUser *2;
    console.log(resultado)

    setTimeout(() => {
    resusltado= numeroUser /3;
    console.log(resultado)
    }, 3000);
},5000);
